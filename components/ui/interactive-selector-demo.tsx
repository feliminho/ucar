'use client';

import React from 'react';
import InteractiveSelector from "@/components/ui/interactive-selector";

const DemoOne = () => {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center p-4">
      <InteractiveSelector />
    </div>
  );
};

export { DemoOne };
export default DemoOne;
