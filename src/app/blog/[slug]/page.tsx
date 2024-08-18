import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { CaptionedImage } from "@/components/CaptionedImage";
import "./styles.css";

// Rest of the file remains the same...

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Roupen Minassian`,
    description: post.summary,
  };
}

const customRenderers: Components = {
  p: ({ node, ...props }) => {
    if (node && node.children && node.children.length > 0) {
      const child = node.children[0] as any;
      if (
        child &&
        child.type === "element" &&
        child.tagName === "img" &&
        typeof child.properties?.alt === "string"
      ) {
        const [alt, caption, width, height] = child.properties.alt.split("|");
        return (
          <CaptionedImage
            src={child.properties.src as string}
            alt={alt.trim()}
            caption={caption.trim()}
            width={parseInt(width.trim())}
            height={parseInt(height.trim())}
          />
        );
      }
    }
    return <p {...props} />;
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card className="overflow-hidden border border-muted">
          <CardHeader className="space-y-1 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Published on {post.date}
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="prose prose-gray max-w-none">
              <ReactMarkdown components={customRenderers}>
                {post.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
