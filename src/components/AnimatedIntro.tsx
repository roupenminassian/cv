'use client';

import React, { ReactNode } from 'react';

interface AnimatedIntroProps {
  bio: string;
  children: ReactNode;
}

const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ bio, children }) => {
  return (
    <div className="space-y-8">
      {/* Bio section without typing effect */}
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {bio}
      </p>

      {/* Content displayed immediately */}
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
};

export default AnimatedIntro;