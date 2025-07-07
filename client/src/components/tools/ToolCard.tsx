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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <Link to={`/tool/${tool.id}`}>
        <div className="card-3d overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
          <div className="relative overflow-hidden">
            <img 
              src={tool.screenshots[0]} 
              alt={tool.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={20} className="text-white drop-shadow-lg" />
            </div>
          </div>
          
          <div className="p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors font-['Orbitron'] group-hover:text-[var(--primary)]">
                {tool.name}
              </h3>
              <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
                <Star size={14} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">{tool.rating}</span>
              </div>
            </div>
            
            <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed">
              {tool.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
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
              </div>
              
              <span className="text-[var(--text-tertiary)] text-xs font-['JetBrains_Mono']">
                {tool.reviewCount.toLocaleString()} reviews
              </span>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-1">
              {tool.features.slice(0, 3).map((feature, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-xs rounded-md font-['JetBrains_Mono']"
                >
                  {feature}
                </span>
              ))}
              {tool.features.length > 3 && (
                <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs rounded-md font-['JetBrains_Mono']">
                  +{tool.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};