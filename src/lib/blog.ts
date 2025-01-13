import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseISO, format } from "date-fns";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Remove quotes from the date string if they exist
    const dateStr = data.date?.replace(/"/g, '') || '';
    
    let formattedDate = '';
    try {
      if (dateStr) {
        formattedDate = format(parseISO(dateStr), "yyyy-MM-dd");
      }
    } catch (error) {
      console.error(`Error parsing date for ${fileName}:`, error);
      formattedDate = dateStr; // Fallback to original date string
    }

    return {
      slug,
      title: data.title || '',
      date: formattedDate,
      summary: data.summary || '',
      tags: data.tags || [],
      content: content || '',
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}