'use client';

import React, { useState } from 'react';
import Button from '@/app/components/Button';

interface CollapsibleSectionProps {
  children: React.ReactNode;
}

export default function CollapsibleSection({ children }: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {!isExpanded && (
        <div className="flex justify-center pt-16 pb-24">
          <Button
            onClick={() => setIsExpanded(true)}
            variant="primary"
            size="md"
          >
            Read More
          </Button>
        </div>
      )}

      {isExpanded && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          {children}
        </div>
      )}
    </>
  );
}
