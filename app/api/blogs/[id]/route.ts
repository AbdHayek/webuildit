// app/api/blogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (isNaN(parseInt(id))) {
      return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
    } 

    const blog = await prisma.blogs.findUnique({
      where: { id: parseInt(id) },
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
    console.error('Failed to fetch blog by ID:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog by ID' },
      { status: 500 }
    );
  }
}
