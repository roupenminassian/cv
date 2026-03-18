import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Metadata } from "next";
import "./styles.css";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: post.title,
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
          <figure>
            <img
              src={child.properties.src as string}
              alt={alt.trim()}
              width={parseInt(width?.trim())}
              height={parseInt(height?.trim())}
              className="w-full"
            />
            {caption && (
              <figcaption className="text-xs text-[#666] italic mt-2">
                {caption.trim()}
              </figcaption>
            )}
          </figure>
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
    <main className="mx-auto max-w-2xl px-6 py-16 print:py-8">
      <Link
        href="/"
        className="text-sm text-[#666] underline decoration-[#ccc] underline-offset-2 hover:decoration-[#999]"
      >
        &lt;-- ~/roupenminassian/thoughts/
      </Link>

      <article className="mt-8">
        <h1 className="text-lg text-[#1a1a1a]">{post.title}</h1>
        <p className="text-sm text-[#666] mt-1">
          {post.date}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-[#666]">
              [{tag}]
            </span>
          ))}
        </div>

        <div className="prose mt-8">
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
