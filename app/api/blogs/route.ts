import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const blogs = await prisma.blogs.findMany({
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
