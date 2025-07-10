import React from 'react';
import { Star, ExternalLink, Calendar, User } from 'lucide-react';
import { Tool } from '../../types';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLayout } from '../ui/LayoutToggle';

interface ToolListItemProps {
  tool: Tool;
  index: number;
}

export const ToolListItem: React.FC<ToolListItemProps> = ({ tool, index }) => {
  const { viewMode } = useLayout();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <Link to={`/tool/${tool.id}`}>
        <div className="card-3d p-6 hover:shadow-xl transition-all duration-300 flex items-center space-x-6">
          {viewMode === 'with-images' && (
            <div className="flex-shrink-0">
              <img 
                src={tool.screenshots[0]} 
                alt={tool.name}
                className="w-24 h-24 object-cover rounded-lg border-2 border-[var(--primary)] transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors font-['Orbitron'] group-hover:text-[var(--primary)] mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">
                  BY {tool.developer.toUpperCase()}
                </p>
              </div>
              
              <div className="flex items-center space-x-4 flex-shrink-0">
                <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">{tool.rating}</span>
                </div>
                <ExternalLink size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors" />
              </div>
            </div>
            
            <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed font-['Inter']">
              {tool.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tool.pricing.type === 'free' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    : tool.pricing.type === 'freemium'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                }`}>
                  {tool.pricing.type === 'free' ? 'Free' : 
                   tool.pricing.type === 'freemium' ? 'Freemium' : 
                   `From ${tool.pricing.startingPrice}`}
                </span>
                
                <span className="text-[var(--text-tertiary)] text-xs font-['JetBrains_Mono']">
                  {tool.reviewCount.toLocaleString()} reviews
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-[var(--text-secondary)] font-['JetBrains_Mono']">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>Updated: {new Date(tool.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.features.slice(0, 4).map((feature, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs rounded-md font-['JetBrains_Mono']"
                >
                  {feature}
                </span>
              ))}
              {tool.features.length > 4 && (
                <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs rounded-md font-['JetBrains_Mono']">
                  +{tool.features.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};