'use client';

import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function AnimatedBio({ text }: { text: string }) {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  return (
    <p className="max-w-md text-pretty">
      <TypewriterText 
        text={text} 
        onComplete={() => setIsTypingComplete(true)} 
      />
    </p>
  );
}