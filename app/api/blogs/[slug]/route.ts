import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } } 
) {
  try {
    const { slug } =  params;

    if (!slug || slug.trim() === "") {
      return NextResponse.json({ error: 'Invalid blog slug' }, { status: 400 });
    }

    const blog = await prisma.blogs.findUnique({
      where: { slug },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Failed to fetch blog by slug:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog by slug' },
      { status: 500 }
    );
  }
}
