'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  tags: readonly string[];
  link: string;
}

interface Publication {
  title: string;
  authors: readonly string[];
  venue: string;
  date: string;
  type: "Journal" | "Conference";
  link?: string;
  badges?: readonly string[];
}

// Define project type to match the structure in resume-data
type Project = typeof RESUME_DATA.projects[number];

// Create a custom component for Blog Posts without a heading
const BlogPostsContent: React.FC<{ posts: readonly BlogPost[] }> = ({ posts }) => {
  if (posts.length === 0) return null;
  
  return (
    <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card key={index} className="flex flex-col overflow-hidden border border-muted p-3">
          <CardHeader className="">
            <div className="space-y-1">
              <h3 className="text-base font-semibold">
                <a href={post.link} className="inline-flex items-center gap-1 hover:underline">
                  {post.title}
                  <span className="inline-block h-1 w-1 rounded-full bg-green-500"></span>
                </a>
              </h3>
              <div className="font-mono text-xs text-muted-foreground">
                {post.date} • {post.summary}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex">
            <div className="mt-2 flex flex-wrap gap-1">
              {post.tags.map((tag) => (
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
      ))}
    </div>
  );
};

// Create a custom component for Research without a heading
const ResearchContent: React.FC<{ publications: readonly Publication[] }> = ({ publications }) => {
  return (
    <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
      {publications.map((publication, index) => (
        <Card key={index} className="flex flex-col overflow-hidden border border-muted p-3">
          <CardHeader className="">
            <div className="space-y-1">
              <h3 className="text-base font-semibold">
                {publication.link ? (
                  <a href={publication.link} className="inline-flex items-center gap-1 hover:underline">
                    {publication.title} <span className="size-1 rounded-full bg-green-500"></span>
                  </a>
                ) : (
                  publication.title
                )}
              </h3>
              <div className="font-mono text-xs text-muted-foreground">
                {publication.authors.join(", ")} • {publication.venue} • {publication.date}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex">
            <div className="mt-2 flex flex-wrap gap-1">
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={publication.type}>
                {publication.type}
              </Badge>
              {publication.badges?.map((badge) => (
                <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={badge}>
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const TabSections = () => {
  const [activeTab, setActiveTab] = useState("Work Experience");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([...RESUME_DATA.projects]);
  
  const tabs = ["Work Experience", "Blog", "R&D"];
  
  // Extract unique skills from projects
  const availableSkills = useMemo(() => {
    // Get all skills from all projects
    const allSkills = RESUME_DATA.projects.flatMap(project => project.techStack);
    // Create a Set to get unique skills, then convert back to array
    const uniqueSkillsArray = Array.from(new Set(allSkills));
    // Sort alphabetically
    return uniqueSkillsArray.sort();
  }, []);
  
  // Filter projects whenever selected skills change
  useEffect(() => {
    if (selectedSkills.length === 0) {
      // If no skills selected, show all projects
      setFilteredProjects([...RESUME_DATA.projects]);
    } else {
      // Filter projects based on selected skills
      setFilteredProjects(
        RESUME_DATA.projects.filter(project => 
          // Check if any of the selected skills match the project's tech stack
          project.techStack.some(tech => 
            selectedSkills.includes(tech)
          )
        )
      );
    }
  }, [selectedSkills]);
  
  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill) // Remove if already selected
        : [...prev, skill] // Add if not selected
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Navigation Headings */}
      <div className="flex gap-6 border-b pb-2">
        {tabs.map((tab) => (
          <h2 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "text-xl font-bold cursor-pointer transition-colors leading-7",
              activeTab === tab
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </h2>
        ))}
      </div>
      
      {/* Content */}
      {activeTab === "Work Experience" && (
        <div className="space-y-8">
          <Section>
            <div className="space-y-4">
              {RESUME_DATA.work.map((work) => (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h4 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h4>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>
                    <div className="font-mono text-sm leading-none">
                      {work.title}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section>
            <h3 className="text-lg font-bold">Education</h3>
            <div className="space-y-4">
              {RESUME_DATA.education.map((education) => (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h4 className="font-semibold leading-none">
                        {education.school}
                      </h4>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section>
            <h3 className="text-lg font-bold">Technologies</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Click on skills to filter projects
            </p>
            <div className="flex flex-wrap gap-1">
              {availableSkills.map((skill) => (
                <Badge 
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={cn(
                    "cursor-pointer transition-colors",
                    selectedSkills.includes(skill) 
                      ? "bg-primary text-primary-foreground hover:bg-primary/80" 
                      : "bg-gray-600 text-white hover:bg-gray-500"
                  )}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          <Section className="print-force-new-page scroll-mb-16">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Projects</h3>
              {selectedSkills.length > 0 && (
                <button 
                  onClick={() => setSelectedSkills([])}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear filters
                </button>
              )}
            </div>
            {filteredProjects.length === 0 ? (
              <p className="text-muted-foreground text-sm">No projects match the selected skills.</p>
            ) : (
              <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                ))}
              </div>
            )}
          </Section>
        </div>
      )}

      {activeTab === "Blog" && (
        <div className="space-y-4">
          <BlogPostsContent posts={RESUME_DATA.blogPosts} />
        </div>
      )}

      {activeTab === "R&D" && (
        <div className="space-y-4">
          <ResearchContent publications={RESUME_DATA.publications} />
        </div>
      )}
    </div>
  );
}; 