import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import formidable from 'formidable'
import path from 'path'

const prisma = new PrismaClient();

async function parseForm(req: Request): Promise<{ fields: any; files: any }> {
    const form = formidable({
        uploadDir: path.join(process.cwd(), 'public/uploads'),
        keepExtensions: true,
        filename: (name, ext, part) => {
            return `${Date.now()}-${part.originalFilename}`
        },
    })

    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = []
        req.body
            ?.getReader()
            .read()
            .then(async ({ done, value }) => {
                if (value) chunks.push(value)
                const buffer = Buffer.concat(chunks)

                // Convert Request to a mock Node.js req
                const readable = new ReadableStream({
                    start(controller) {
                        controller.enqueue(buffer)
                        controller.close()
                    },
                })

                const mockReq: any = new ReadableStream()
                Object.assign(mockReq, readable)

                form.parse(mockReq, (err, fields, files) => {
                    if (err) reject(err)
                    else resolve({ fields, files })
                })
            })
    })
}

export async function GET(req: NextRequest) {

    try {
        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get('limit') || '10') // default 10
        const offset = parseInt(searchParams.get('offset') || '0') // default 0

        const blogs = await prisma.blogs.findMany({
            skip: offset,
            take: limit,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true, // adjust based on your User model
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(blogs);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(req: Request) {

    try {

        const { fields, files } = await parseForm(req)
        const {
            id,
            user_id,
            title,
            subtitle,
            content,
            created_at,
            updated_at,
        } = fields

        // Validation
        if (!user_id || !title || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const imageFile = files.image?.[0]
        const imagePath = imageFile ? `/uploads/${path.basename(imageFile.filepath)}` : null

        const data = {
            userId: parseInt(user_id),
            title,
            sub_title: subtitle || null,
            content,
            img: imagePath,
            updatedAt: updated_at ? new Date(updated_at) : new Date(),
            createdAt: created_at ? new Date(created_at) : new Date(),
        }

        const blog = id
            ? await prisma.blogs.update({ where: { id: parseInt(id) }, data })
            : await prisma.blogs.create({ data })

        return NextResponse.json({ blog })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to process blog' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing blog id' }, { status: 400 });
    }

    try {
        const deletedBlog = await prisma.blogs.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: 'Blog deleted', blog: deletedBlog }, { status: 200 });
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing so multer can handle it
    },
}

