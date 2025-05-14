'use client';

import * as React from 'react';
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn("flex space-x-1 border-b border-border", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "px-4 py-2 font-medium text-sm transition-colors rounded-t-md",
            activeTab === tab 
              ? "bg-background text-foreground border-b-2 border-primary" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
} 