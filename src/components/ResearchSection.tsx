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

interface Research {
  title: string;
  authors: readonly string[];
  venue: string;
  date: string;
  type: "Journal" | "Conference";
  link?: string;
  badges?: readonly string[];
  description?: string;
}

interface ResearchSectionProps {
  publications: readonly Research[];
}

const ResearchCard: React.FC<Research> = ({
  title,
  authors,
  venue,
  date,
  type,
  link,
  badges,
  description,
}) => (
  <Card className="flex flex-col overflow-hidden border border-muted p-3">
    <CardHeader className="">
      <div className="space-y-1">
        <CardTitle className="text-base">
          {link ? (
            <Link
              href={link}
              className="inline-flex items-center gap-1 hover:underline"
            >
              {title} <span className="size-1 rounded-full bg-green-500"></span>
            </Link>
          ) : (
            title
          )}
        </CardTitle>
        {link && (
          <div className="hidden font-mono text-xs underline print:visible">
            {link.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        )}
        <CardDescription className="font-mono text-xs">
          {authors.join(", ")} • {venue} • {date}
        </CardDescription>
        {description && (
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        )}
      </div>
    </CardHeader>
    <CardContent className="mt-auto flex">
      <div className="mt-2 flex flex-wrap gap-1">
        <Badge
          className="px-1 py-0 text-[10px]"
          variant="secondary"
          key={type}
        >
          {type}
        </Badge>
        {badges?.map((badge) => (
          <Badge
            className="px-1 py-0 text-[10px]"
            variant="secondary"
            key={badge}
          >
            {badge}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const ResearchSection: React.FC<ResearchSectionProps> = ({ publications }) => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Research & Publications</h2>
      <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((publication, index) => (
          <ResearchCard key={index} {...publication} />
        ))}
      </div>
    </Section>
  );
};