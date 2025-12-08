// types/index.ts
export interface PostFrontmatter {
    title: string;
    description: string;
    dailyBudget: string;
    bestFor: string[];
    image?: string;  // Optional (might not exist)
    cover?: string;  // Optional (might not exist)
    date: string;
  }
  
  export interface Post {
    slug: string;
    frontmatter: PostFrontmatter;
  }