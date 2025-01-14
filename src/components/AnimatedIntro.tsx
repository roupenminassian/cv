'use client';

import React, { useState, useEffect, ReactNode } from 'react';

interface AnimatedIntroProps {
  bio: string;
  children: ReactNode;
}

const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ bio, children }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!bio) return; // Guard against undefined bio
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < bio.length) {
        setDisplayText(bio.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [bio]);

  return (
    <div className="space-y-8">
      {/* Bio section with typing effect */}
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {displayText}
        {!isTypingComplete && (
          <span className="animate-pulse">|</span>
        )}
      </p>

      {/* Content that should fade in */}
      <div className={`space-y-8 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedIntro;