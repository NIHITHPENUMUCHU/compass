import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/tool/${tool.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden card-hover shadow-lg">
          <div className="relative">
            <img 
              src={tool.screenshots[0]} 
              alt={tool.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] transition-colors">
                {tool.name}
              </h3>
              <span className="flex items-center text-yellow-500">
                <Star size={16} className="fill-current" />
                <span className="ml-1 text-sm">{tool.rating}</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
              {tool.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[var(--primary)] text-sm font-medium">
                {tool.pricing.type === 'free' ? 'Free' : `From ${tool.pricing.startingPrice}`}
              </span>
              <span className="text-[var(--text-secondary)] text-sm">
                {tool.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};