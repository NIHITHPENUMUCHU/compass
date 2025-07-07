import React from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '../../types';

interface ToolGridProps {
  tools: Tool[];
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tools }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
};