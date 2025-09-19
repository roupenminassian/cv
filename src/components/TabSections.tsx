'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

// Define project type to match the structure in resume-data
type Project = typeof RESUME_DATA.projects[number];

export const TabSections = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([...RESUME_DATA.projects]);
  
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
    <div className="space-y-8">
          <Section>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
              
              <div className="space-y-3">
                {RESUME_DATA.work.map((work, index) => (
                  <div key={work.company} className="relative flex items-start gap-4 group">
                     {/* Timeline dot */}
                     <div className="relative z-10 flex h-8 w-8 items-center justify-center">
                       <div className={`h-3 w-3 rounded-full border-2 border-background shadow-sm transition-colors duration-300 ${
                         work.end === "Present" 
                           ? "bg-green-500" 
                           : "bg-gray-400 group-hover:bg-black"
                       }`}></div>
                     </div>
                     
                     {/* Content */}
                     <div className="flex-1 min-w-0">
                       <div className="space-y-2 hover:bg-muted/30 rounded-lg px-0.5 py-0 hover:py-2 transition-all duration-300 ease-in-out cursor-pointer">
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
                        <div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-32 overflow-hidden">
                          {work.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <h3 className="text-lg font-bold">Tools and Skills</h3>
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
            <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Active project</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Completed project</span>
              </div>
            </div>
            {filteredProjects.length === 0 ? (
              <p className="text-muted-foreground text-sm">No projects match the selected skills.</p>
            ) : (
              <div className="flex flex-col md:flex-row gap-3 print:grid print:grid-cols-2 print:gap-2">
                <div className="flex-1 space-y-3">
                  {filteredProjects.filter((_, index) => index % 2 === 0).map((project) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={"link" in project ? project.link.href : undefined}
                      isActive={project.title === "Twitter Misinformation" || project.title === "HASS-DSI"}
                    />
                  ))}
                </div>
                <div className="flex-1 space-y-3">
                  {filteredProjects.filter((_, index) => index % 2 === 1).map((project) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={"link" in project ? project.link.href : undefined}
                      isActive={project.title === "Twitter Misinformation" || project.title === "HASS-DSI"}
                    />
                  ))}
                </div>
              </div>
            )}
          </Section>
    </div>
  );
}; 