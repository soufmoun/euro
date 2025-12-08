// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const postsDirectory = path.join(
  process.cwd(), 
  process.env.POSTS_DIRECTORY || 'content/destinations'
);

let postsCache: PostData[] | null = null;
let lastCacheTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Interface should be defined at the top level, not inside a function
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

const PostDataSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  dailyBudget: z.string().optional(),
  bestFor: z.array(z.string()).optional(),
  image: z.string().optional(),
  cover: z.string().optional(),
  date: z.string().or(z.date()),
  content: z.string().optional(),
});


export function getSortedPostsData(): PostData[] {
  const now = Date.now();
  
  if (postsCache && (now - lastCacheTime) < CACHE_DURATION) {
    return postsCache;
  }
  
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'No Title',
        description: data.description || '',
        dailyBudget: data.dailyBudget || '',
        bestFor: data.bestFor || [],
        image: data.image || '/images/default.jpg',
        cover: data.cover,
        date: data.date || new Date().toISOString(),
      } as PostData;
    });
    
    // Sort posts by date (newest first)
    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
    
    postsCache = sortedPosts;
    lastCacheTime = now;
    return sortedPosts;
    
  } catch (error) {
    console.log('No posts directory found');
    return [];
  }
}

export function getPostData(slug: string): PostData {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post with slug "${slug}" not found`);
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'No Title',
      description: data.description || '',
      dailyBudget: data.dailyBudget || '',
      bestFor: data.bestFor || [],
      image: data.image || '/images/default.jpg',
      cover: data.cover,
      date: data.date || new Date().toISOString(),
      content: content || '',
    };
  } catch (error) {
    console.error(`Error loading post "${slug}":`, error);
    throw error;
  }
}

export function validatePostData(data: unknown): PostData {
  return PostDataSchema.parse(data) as PostData;
}

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
  } catch (error) {
    return [];
  }
}

export function getPaginatedPostsData(page: number = 1, limit: number = 10): {
  posts: PostData[];
  total: number;
  totalPages: number;
} {
  const allPosts = getSortedPostsData();
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: allPosts.slice(startIndex, endIndex),
    total: allPosts.length,
    totalPages: Math.ceil(allPosts.length / limit),
  };
}

export function getPostsByCategory(category: string): PostData[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.bestFor?.includes(category) || 
    post.title.toLowerCase().includes(category.toLowerCase())
  );
}

export function searchPosts(query: string): PostData[] {
  const allPosts = getSortedPostsData();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.content?.toLowerCase().includes(searchTerm)
  );
}