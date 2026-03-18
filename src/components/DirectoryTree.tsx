"use client";

import { useState, useCallback } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { getAllPosts } from "@/lib/blog";

type TreeNode = {
  name: string;
  type: "file" | "directory";
  content?: React.ReactNode;
  href?: string;
  children?: TreeNode[];
};

function buildTree(): TreeNode[] {
  const posts = getAllPosts();

  const aboutContent = (
    <div className="text-sm text-[#666] space-y-2">
      <p>
        I studied neuroscience and physiology at the University of Sydney — how
        the brain processes information, learns, and adapts. That curiosity led
        me to machine learning, where I spent several years researching NLP,
        computer vision, and timeseries forecasting at UTS and building
        conversational AI systems at Fujitsu.
      </p>
      <p>
        I&apos;ve since moved into engineering AI at scale — deploying models in
        production at Suncorp, and now co-founding Vern, where we&apos;re
        rethinking how data migration works for onboarding.
      </p>
      <p>
        Based in{" "}
        <a
          href={RESUME_DATA.locationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#666]"
        >
          Sydney
        </a>
        . I like building things that make abstract problems feel tractable.
      </p>
    </div>
  );

  const experienceChildren: TreeNode[] = RESUME_DATA.work.map((job) => ({
    name: `${job.company.toLowerCase().replace(/\s+/g, "-")}.txt`,
    type: "file" as const,
    content: (
      <div className="text-sm text-[#666] space-y-1">
        <p className="text-[#1a1a1a]">{job.title}</p>
        <p>{job.start}{job.end ? ` — ${job.end}` : ""}</p>
        <p>{job.description}</p>
        {job.link && (
          <p>
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#666]"
            >
              {job.link}
            </a>
          </p>
        )}
      </div>
    ),
  }));

  const educationChildren: TreeNode[] = RESUME_DATA.education.map((edu) => ({
    name: `${edu.school.toLowerCase().replace(/\s+/g, "-")}.txt`,
    type: "file" as const,
    content: (
      <div className="text-sm text-[#666] space-y-1">
        <p className="text-[#1a1a1a]">{edu.degree}</p>
        {(edu.start || edu.end) && (
          <p>{edu.start}{edu.end ? ` — ${edu.end}` : ""}</p>
        )}
      </div>
    ),
  }));

  const projectChildren: TreeNode[] = RESUME_DATA.projects.map((project) => ({
    name: project.title.toLowerCase().replace(/\s+/g, "-"),
    type: "file" as const,
    content: (
      <div className="text-sm text-[#666] space-y-1">
        <p>{project.description}</p>
        <p className="text-xs">{project.techStack.join(", ")}</p>
        {project.link && (
          <p>
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#666]"
            >
              {project.link.label}
            </a>
          </p>
        )}
      </div>
    ),
  }));

  const skillsContent = (
    <div className="text-sm text-[#666]">
      <p>{RESUME_DATA.skills.join(", ")}</p>
    </div>
  );

  const blogChildren: TreeNode[] = posts.map((post) => ({
    name: `${post.slug}`,
    type: "file" as const,
    href: `/thoughts/${post.slug}`,
    content: (
      <div className="text-sm text-[#666] space-y-1">
        <p className="text-[#1a1a1a]">{post.title}</p>
        <p>{post.summary}</p>
        <p className="text-xs">{post.date}</p>
      </div>
    ),
  }));

  return [
    { name: "about.txt", type: "file", content: aboutContent },
    { name: "experience", type: "directory", children: experienceChildren },
    { name: "education", type: "directory", children: educationChildren },
    { name: "projects", type: "directory", children: projectChildren },
    { name: "skills.txt", type: "file", content: skillsContent },
    { name: "thoughts", type: "directory", children: blogChildren },
  ];
}

function FolderIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
        <path
          d="M1.5 3.5C1.5 2.95 1.95 2.5 2.5 2.5H6L7.5 4H13.5C14.05 4 14.5 4.45 14.5 5V5.5H3L1.5 12.5V3.5Z"
          fill="#ccc"
          stroke="#999"
          strokeWidth="0.75"
        />
        <path
          d="M1.5 12.5L3 5.5H14.5L13 12.5H1.5Z"
          fill="#e8e8e8"
          stroke="#999"
          strokeWidth="0.75"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M2.5 2.5H6L7.5 4H13.5C14.05 4 14.5 4.45 14.5 5V12C14.5 12.55 14.05 13 13.5 13H2.5C1.95 13 1.5 12.55 1.5 12V3.5C1.5 2.95 1.95 2.5 2.5 2.5Z"
        fill="#e8e8e8"
        stroke="#999"
        strokeWidth="0.75"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M4 1.5H10L13 4.5V14C13 14.28 12.78 14.5 12.5 14.5H4C3.72 14.5 3.5 14.28 3.5 14V2C3.5 1.72 3.72 1.5 4 1.5Z"
        fill="#f5f5f5"
        stroke="#999"
        strokeWidth="0.75"
      />
      <path d="M10 1.5V4.5H13" stroke="#999" strokeWidth="0.75" />
    </svg>
  );
}

function TreeRow({
  node,
  depth,
  expanded,
  onToggle,
}: {
  node: TreeNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (path: string) => void;
}) {
  const isDir = node.type === "directory";
  const isOpen = expanded.has(node.name);

  const handleClick = () => {
    if (node.href) {
      window.location.href = node.href;
      return;
    }
    onToggle(node.name);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <>
      <li>
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="w-full text-left flex items-center gap-2 px-2 py-1 rounded hover:bg-[#f0f0f0] focus:outline-none focus:bg-[#ebebeb] transition-colors"
          style={{ paddingLeft: `${depth * 20 + 8}px` }}
          aria-expanded={isDir ? isOpen : undefined}
        >
          {isDir ? <FolderIcon open={isOpen} /> : <FileIcon />}
          <span className="text-[#1a1a1a] text-sm">{node.name}</span>
        </button>

        {isOpen && node.content && (
          <div
            className="tree-content mx-2 my-1 px-3 py-2 border-l-2 border-[#e5e5e5]"
            style={{ marginLeft: `${depth * 20 + 28}px` }}
          >
            {node.content}
          </div>
        )}
      </li>

      {isOpen &&
        node.children?.map((child) => (
          <TreeRow
            key={child.name}
            node={child}
            depth={depth + 1}
            expanded={expanded}
            onToggle={onToggle}
          />
        ))}
    </>
  );
}

export function DirectoryTree() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const tree = buildTree();

  const onToggle = useCallback((name: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }, []);

  return (
    <nav aria-label="Directory tree">
      <ul role="tree" className="space-y-0.5">
        {tree.map((node) => (
          <TreeRow
            key={node.name}
            node={node}
            depth={0}
            expanded={expanded}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </nav>
  );
}
