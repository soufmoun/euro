// app/api/posts/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPostData } from '@/lib/server/posts';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const post = getPostData(slug);
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post ${params.slug}:`, error);
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }
}