import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'quantum' | 'neon';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  if (variant === 'quantum') {
    return (
      <div className={`loading-quantum ${sizeClasses[size]} ${className}`} />
    );
  }

  if (variant === 'neon') {
    return (
      <motion.div 
        className={`${sizeClasses[size]} ${className}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-transparent border-t-[var(--primary)] rounded-full animate-neon-pulse" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`${sizeClasses[size]} border-4 border-[var(--border-primary)] border-t-[var(--primary)] rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex gap-2 ${className}`}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-[var(--primary)] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

export const SkeletonLoader: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string;
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '' 
}) => (
  <div className={`skeleton ${width} ${height} ${className}`} />
);

export const PageLoader: React.FC = () => (
  <motion.div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]/90 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="text-center">
      <LoadingSpinner size="lg" variant="quantum" className="mx-auto mb-6" />
      <motion.h2 
        className="text-2xl font-bold text-neon font-['Orbitron']"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading InnovAI Compass
      </motion.h2>
      <motion.p 
        className="text-[var(--text-secondary)] mt-2 font-['Orbitron']"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        Initializing AI Discovery Platform...
      </motion.p>
    </div>
  </motion.div>
);

export const CardSkeleton: React.FC = () => (
  <div className="card-3d space-y-4">
    <SkeletonLoader height="h-48" className="rounded-lg" />
    <SkeletonLoader height="h-6" width="w-3/4" />
    <SkeletonLoader height="h-4" width="w-full" />
    <SkeletonLoader height="h-4" width="w-2/3" />
    <div className="flex space-x-2">
      <SkeletonLoader height="h-8" width="w-20" />
      <SkeletonLoader height="h-8" width="w-24" />
    </div>
  </div>
);

export const QuantumLoader: React.FC<{ text?: string }> = ({ text = "Processing..." }) => (
  <motion.div 
    className="flex flex-col items-center space-y-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative">
      <LoadingSpinner size="lg" variant="quantum" />
      <motion.div
        className="absolute inset-0 border-2 border-[var(--primary)] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
    <motion.p 
      className="text-[var(--text-secondary)] font-['Orbitron'] text-sm"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {text}
    </motion.p>
  </motion.div>
);