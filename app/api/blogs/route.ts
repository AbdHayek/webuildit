import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import formidable from 'formidable'
import path from 'path'
import { Readable } from 'stream'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set in environment variables');
}

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing so multer can handle it
    },
}

export async function parseForm(req: Request,storeUrl:string): Promise<{ fields: any; files: any }> {

    const form = formidable({
        uploadDir: path.join(process.cwd(), storeUrl),
        keepExtensions: true,
        filename: (name, ext, part) => `${Date.now()}-${part.originalFilename}`,
    })

    // Get raw body as buffer
    const buffer = Buffer.from(await req.arrayBuffer())

    // Create a fake Node.js IncomingMessage from the Web Request
    const nodeReq = new Readable() as any
    nodeReq.push(buffer)
    nodeReq.push(null) // signal EOF

    // Add headers & method to mimic IncomingMessage
    nodeReq.headers = Object.fromEntries(req.headers.entries())
    nodeReq.method = req.method || 'POST'
    nodeReq.url = ''

    return new Promise((resolve, reject) => {
        form.parse(nodeReq, (err, fields, files) => {
            if (err) reject(err)
            else resolve({ fields, files })
        })
    })
}

export async function checkValidToken(): Promise<number | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        console.error('No token provided');
        return null;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
        return decoded.id;
    } catch (err) {
        console.error('Invalid token', err);
        return null;
    }
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const isAdmin = parseInt(searchParams.get('admin') || '0') === 1;
        const limit = parseInt(searchParams.get('limit') || '10'); // default 10
        const offset = parseInt(searchParams.get('offset') || '0'); // default 0

        const baseQuery = {
            include: {
                user: {
                    select: {
                        id: true,
                        name: true, // Adjust if your User model changes
                    },
                },
            },
            orderBy: {
                id: 'desc',
            },
        };

        const blogs = isAdmin
            ? await prisma.blogs.findMany(baseQuery as any)
            : await prisma.blogs.findMany({
                ...baseQuery as any,
                skip: offset,
                take: limit
            });

        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(req: Request) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

    try {
        const { fields, files } = await parseForm(req,'public/uploads/blogs')
        const {
            id,
            title,
            subtitle,
            content,
            created_at,
            updated_at,
        } = fields

        // Validation
        if ((title === undefined || String(title)?.trim() === "") || (content === undefined || String(content)?.trim() === "")) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const imageFile = files.image?.[0]
        const imagePath = imageFile ? `/uploads/blogs/${path.basename(imageFile.filepath)}` : null

        let data = {
            userId: userId,
            title: String(title),
            sub_title: String(subtitle) || null,
            content: String(content),
            updatedAt: updated_at ? new Date(updated_at) : new Date(),
            createdAt: created_at ? new Date(created_at) : new Date()
        }

        // upload image
        if (imagePath)
            data = { ...data, img: imagePath }

        const blog = id
            ? await prisma.blogs.update({ where: { id: parseInt(id) }, data })
            : await prisma.blogs.create({
                data,
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true, 
                        },
                    },
                },
            })

        return NextResponse.json({ blog })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to process blog' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

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
