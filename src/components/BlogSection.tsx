import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  tags: readonly string[];
  link: string;
}

interface BlogSectionProps {
  posts: readonly BlogPost[];
}

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  date,
  summary,
  tags,
  link,
}) => (
  <Card className="flex flex-col overflow-hidden border border-muted p-3">
    <CardHeader className="">
      <div className="space-y-1">
        <CardTitle className="text-base">
          <Link
            href={link}
            className="inline-flex items-center gap-1 hover:underline"
          >
            {title}
            <span className="inline-block h-1 w-1 rounded-full bg-green-500"></span>
          </Link>
        </CardTitle>
        <div className="hidden font-mono text-xs underline print:visible">
          {link.replace("https://", "").replace("www.", "").replace("/", "")}
        </div>
        <CardDescription className="font-mono text-xs">
          {date} • {summary}
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent className="mt-auto flex">
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            className="px-1 py-0 text-[10px]"
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  if (posts.length === 0) return null;
  
  return (
    <Section>
      <h2 className="text-xl font-bold">Blog Posts</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </Section>
  );
};