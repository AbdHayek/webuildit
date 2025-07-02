import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import path from 'path'
import { parseForm } from '../blogs/route';
import { checkValidToken } from '../blogs/route';

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

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const isAdmin = parseInt(searchParams.get('admin') || '0') === 1;
        const limit = parseInt(searchParams.get('limit') || '10'); // default 10
        const offset = parseInt(searchParams.get('offset') || '0'); // default 0

        const baseQuery = {
            orderBy: {
                id: 'desc',
            },
        };

        const partners = isAdmin
            ? await prisma.partners.findMany(baseQuery as any)
            : await prisma.partners.findMany({
                ...baseQuery as any,
                skip: offset,
                take: limit
            });

        return NextResponse.json(partners);
    } catch (error) {
        console.error('Error fetching partners:', error);
        return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
    }
}

export async function POST(req: Request) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

    try {

        const { fields, files } = await parseForm(req)
        const {
            id,
            created_at,
            updated_at,
        } = fields

        const imageFile = files.image?.[0]
        const imagePath = imageFile ? `/uploads/partners/${path.basename(imageFile.filepath)}` : null

        if (!imagePath) {
            return NextResponse.json({ error: 'Image is required' }, { status: 400 })
        }

        let data = {
            img: imagePath,
            updatedAt: updated_at ? new Date(updated_at) : new Date(),
            createdAt: created_at ? new Date(created_at) : new Date()
        }

        const partner = id
            ? await prisma.partners.update({ where: { id: parseInt(id) }, data })
            : await prisma.partners.create({data})

        return NextResponse.json({ partner })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to process partner' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing partner id' }, { status: 400 });
    }

    try {
        const deletedPartner = await prisma.partners.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: 'partner deleted', partner: deletedPartner }, { status: 200 });
    } catch (error) {
        console.error('Failed to delete partner:', error);
        return NextResponse.json({ error: 'Failed to delete partner' }, { status: 500 });
    }
}
