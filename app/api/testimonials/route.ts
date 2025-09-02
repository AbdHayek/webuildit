import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { checkValidToken, parseForm } from '../blogs/route'
import path from 'path'

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set in environment variables');
}

export async function GET(req: NextRequest) {
    try {
        const baseQuery = {
            orderBy: {
                order_number: 'asc',
            }
        };

        const testimonials = await prisma.testimonials.findMany(baseQuery as any);

        return NextResponse.json(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}

export async function POST(req: Request) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

    try {
        const { fields, files } = await parseForm(req, 'public/uploads/testimonials')
        const {
            id,
            title,
            author,
            content,
            order_number,
            url,
            created_at,
            updated_at,
        } = fields

        // Validation
        if (
            (title === undefined || String(title)?.trim() === "") ||
            (author === undefined || String(author)?.trim() === "") ||
            (content === undefined || String(content)?.trim() === "") ||
            (order_number === undefined || String(order_number)?.trim() === "")
        ) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        let data = {
            title: String(title),
            author: String(author) || null,
            order_number: parseInt(order_number),
            content: String(content),
            url: url ? String(url) : null,
            updatedAt: updated_at ? new Date(updated_at) : new Date(),
            createdAt: created_at ? new Date(created_at) : new Date()
        }

        const testimonial = id
            ? await prisma.testimonials.update({ where: { id: parseInt(id) }, data })
            : await prisma.testimonials.create({ data })

        return NextResponse.json({ testimonial })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to process testimonial' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {

    // check token valid
    const userId = await checkValidToken();
    if (userId === null) return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Missing testimonial id' }, { status: 400 });
    }

    try {
        const deletedtestimonial = await prisma.testimonials.delete({
            where: { id: parseInt(id) },
        });

        return NextResponse.json({ message: 'testimonial deleted', testimonial: deletedtestimonial }, { status: 200 });
    } catch (error) {
        console.error('Failed to delete testimonial:', error);
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
