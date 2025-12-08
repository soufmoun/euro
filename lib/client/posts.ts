// lib/client/posts.ts (client-safe version)
export interface PostData {
    slug: string;
    title: string;
    description: string;
    dailyBudget: string;
    bestFor: string[];
    image: string;
    cover?: string;
    date: string;
    content?: string;
  }
  
  // Client-side functions that fetch from API instead of filesystem
  export async function fetchPosts(): Promise<PostData[]> {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
  
  export async function fetchPost(slug: string): Promise<PostData | null> {
    try {
      const response = await fetch(`/api/posts/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching post "${slug}":`, error);
      return null;
    }
  }
  
  export async function searchPostsClient(query: string): Promise<PostData[]> {
    try {
      const response = await fetch(`/api/posts/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to search posts');
      return await response.json();
    } catch (error) {
      console.error('Error searching posts:', error);
      return [];
    }
  }