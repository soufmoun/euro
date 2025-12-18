// app/api/posts/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPostData } from '@/lib/server/posts';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const params = await context.params;
    const { slug } = params;
    
    const post = getPostData(slug);
    
    // Optional: Check if post exists
    if (!post) {
      return NextResponse.json(
        { error: `Post with slug "${slug}" not found` },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error in GET /api/posts/[slug]:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}