import React from 'react';
import { ToolCard } from './ToolCard';
import { ToolListItem } from './ToolListItem';
import { Tool } from '../../types';
import { useLayout } from '../ui/LayoutToggle';

interface ToolGridProps {
  tools: Tool[];
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tools }) => {
  const { layoutMode } = useLayout();

  if (layoutMode === 'list') {
    return (
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <ToolListItem key={tool.id} tool={tool} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mobile-grid">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} index={index} />
      ))}
    </div>
  );
};