// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSortedPostsData, getPaginatedPostsData } from '@/lib/server/posts';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    if (category) {
      const { getPostsByCategory } = await import('@/lib/server/posts');
      const posts = getPostsByCategory(category);
      return NextResponse.json(posts);
    }

    if (search) {
      const { searchPosts } = await import('@/lib/server/posts');
      const posts = searchPosts(search);
      return NextResponse.json(posts);
    }

    if (page || limit) {
      const result = getPaginatedPostsData(page, limit);
      return NextResponse.json(result);
    }

    const posts = getSortedPostsData();
    return NextResponse.json(posts);
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}