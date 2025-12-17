// lib/posts/destinations.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface DestinationFrontmatter {
  title: string;
  description: string;
  dailyBudget?: string;
  bestFor?: string[];
  image?: string;
  cover?: string;
  date?: string;
  lastUpdated?: string;
  keywords?: string[];
  featuredImage?: string;
}

export interface Destination {
  slug: string;
  content: string;
  title: string;
  description: string;
  dailyBudget?: string;
  bestFor?: string[];
  image?: string;
  cover?: string;
  date?: string;
  lastUpdated?: string;
  keywords?: string[];
  featuredImage?: string;
}

const destinationsDirectory = path.join(
  process.cwd(),
  "content/destinations"
);

// Get all destination slugs
export function getAllDestinationSlugs(): string[] {
  try {
    if (!fs.existsSync(destinationsDirectory)) {
      console.warn(`Directory not found: ${destinationsDirectory}`);
      return [];
    }

    return fs
      .readdirSync(destinationsDirectory)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(".md", ""));
  } catch (error) {
    console.error("Error reading destination slugs:", error);
    return [];
  }
}

// Update the getDestinationBySlug function
export function getDestinationBySlug(slug: string): Destination | null {
  try {
    const fullPath = path.join(destinationsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.error("Destination file not found:", fullPath);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Cast to any first, then handle the conversion
    const frontmatter = data as any;

    // Handle keywords - ensure it's always an array
    let keywords: string[] = [];
    
    const rawKeywords = frontmatter.keywords;
    if (rawKeywords !== undefined && rawKeywords !== null) {
      if (Array.isArray(rawKeywords)) {
        keywords = rawKeywords.map((k: any) => String(k));
      } else {
        // It's a string or other type
        const keywordString = String(rawKeywords);
        keywords = keywordString
          .split(',')
          .map(k => k.trim())
          .filter(k => k.length > 0);
      }
    }

    // Handle bestFor - ensure it's always an array too
    let bestFor: string[] = [];
    const rawBestFor = frontmatter.bestFor;
    if (rawBestFor !== undefined && rawBestFor !== null) {
      if (Array.isArray(rawBestFor)) {
        bestFor = rawBestFor.map((k: any) => String(k));
      } else {
        // It's a string or other type
        const bestForString = String(rawBestFor);
        bestFor = bestForString
          .split(',')
          .map(k => k.trim())
          .filter(k => k.length > 0);
      }
    }

    return {
      slug,
      content,
      title: String(frontmatter.title || ""),
      description: String(frontmatter.description || ""),
      dailyBudget: frontmatter.dailyBudget ? String(frontmatter.dailyBudget) : undefined,
      bestFor: bestFor.length > 0 ? bestFor : undefined,
      image: frontmatter.image ? String(frontmatter.image) : undefined,
      cover: frontmatter.cover ? String(frontmatter.cover) : undefined,
      date: frontmatter.date ? String(frontmatter.date) : undefined,
      lastUpdated: frontmatter.lastUpdated ? String(frontmatter.lastUpdated) : undefined,
      keywords: keywords.length > 0 ? keywords : undefined,
      featuredImage: frontmatter.featuredImage || frontmatter.image ? String(frontmatter.featuredImage || frontmatter.image) : undefined,
    };
  } catch (error) {
    console.error(`Error loading destination "${slug}":`, error);
    return null;
  }
}

// Get all destinations sorted alphabetically
export function getAllDestinations(): Destination[] {
  try {
    const slugs = getAllDestinationSlugs();

    const allDestinations = slugs
      .map((slug) => getDestinationBySlug(slug))
      .filter((dest): dest is Destination => dest !== null);

    return allDestinations.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } catch (error) {
    console.error("Error loading all destinations:", error);
    return [];
  }
}