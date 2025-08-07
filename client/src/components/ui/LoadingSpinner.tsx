import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'default' | 'quantum' | 'neon' | 'cyber' | 'hologram';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  if (variant === 'quantum') {
    return (
      <motion.div 
        className={`${sizeClasses[size]} ${className}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-4 border-transparent border-t-[var(--primary)] border-r-[var(--primary-light)] rounded-full" />
      </motion.div>
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

  if (variant === 'cyber') {
    return (
      <motion.div 
        className={`${sizeClasses[size]} relative ${className}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border-4 border-transparent border-t-[var(--primary)] border-r-[var(--primary-light)] rounded-full" />
        <div className="absolute inset-2 border-2 border-transparent border-b-[var(--primary)] border-l-[var(--primary-dark)] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        <div className="absolute inset-4 bg-[var(--primary)] rounded-full animate-neon-pulse" />
      </motion.div>
    );
  }

  if (variant === 'hologram') {
    return (
      <motion.div 
        className={`${sizeClasses[size]} ${className}`}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity },
          opacity: { duration: 1.5, repeat: Infinity }
        }}
      >
        <div className="w-full h-full border-4 border-[var(--primary)] rounded-full animate-hologram" />
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

export const LoadingDots: React.FC<{ className?: string; variant?: 'default' | 'cyber' }> = ({ 
  className = '', 
  variant = 'default' 
}) => (
  <div className={`flex gap-2 ${className}`}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className={`w-3 h-3 rounded-full ${
          variant === 'cyber' 
            ? 'bg-[var(--primary)] animate-neon-pulse' 
            : 'bg-[var(--primary)]'
        }`}
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
  variant?: 'default' | 'cyber';
}> = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '',
  variant = 'default'
}) => (
  <div className={`skeleton ${width} ${height} ${className} ${
    variant === 'cyber' ? 'cyber-border animate-energy-pulse' : ''
  }`} />
);

export const PageLoader: React.FC = () => (
  <motion.div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]/95 backdrop-blur-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="text-center relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -m-20">
        <div className="matrix-rain" style={{ left: '10%', animationDelay: '0s' }}>01</div>
        <div className="matrix-rain" style={{ left: '20%', animationDelay: '0.5s' }}>10</div>
        <div className="matrix-rain" style={{ left: '30%', animationDelay: '1s' }}>11</div>
        <div className="matrix-rain" style={{ left: '40%', animationDelay: '1.5s' }}>00</div>
        <div className="matrix-rain" style={{ left: '50%', animationDelay: '2s' }}>01</div>
        <div className="matrix-rain" style={{ left: '60%', animationDelay: '2.5s' }}>10</div>
        <div className="matrix-rain" style={{ left: '70%', animationDelay: '3s' }}>11</div>
        <div className="matrix-rain" style={{ left: '80%', animationDelay: '3.5s' }}>00</div>
        <div className="matrix-rain" style={{ left: '90%', animationDelay: '4s' }}>01</div>
      </div>
      
      <LoadingSpinner size="xl" variant="quantum" className="mx-auto mb-8" />
      
      <motion.h2 
        className="text-3xl font-bold text-neon font-['Orbitron'] mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        InnovAI Compass
      </motion.h2>
      
      <motion.p 
        className="text-[var(--text-secondary)] text-lg font-['JetBrains_Mono'] tracking-wider"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        Initializing AI Discovery Platform...
      </motion.p>
      
      <motion.div 
        className="mt-6 flex justify-center"
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="h-1 bg-[var(--primary-gradient)] rounded-full animate-energy-pulse" />
      </motion.div>
    </div>
  </motion.div>
);

export const CardSkeleton: React.FC = () => (
  <div className="card-3d space-y-4">
    <SkeletonLoader height="h-48" className="rounded-lg" variant="cyber" />
    <SkeletonLoader height="h-6" width="w-3/4" variant="cyber" />
    <SkeletonLoader height="h-4" width="w-full" />
    <SkeletonLoader height="h-4" width="w-2/3" />
    <div className="flex space-x-2">
      <SkeletonLoader height="h-8" width="w-20" variant="cyber" />
      <SkeletonLoader height="h-8" width="w-24" variant="cyber" />
    </div>
  </div>
);

export const QuantumLoader: React.FC<{ text?: string }> = ({ text = "Processing..." }) => (
  <motion.div 
    className="flex flex-col items-center space-y-6"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative">
      <LoadingSpinner size="xl" variant="quantum" />
      <motion.div
        className="absolute inset-0 border-2 border-[var(--primary)] rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-4 border border-[var(--primary-light)] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
    
    <motion.p 
      className="text-[var(--text-secondary)] font-['JetBrains_Mono'] text-sm tracking-wider"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      {text}
    </motion.p>
  </motion.div>
);

export const CyberLoader: React.FC = () => (
  <div className="relative w-32 h-32">
    <LoadingSpinner size="xl" variant="cyber" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-8 h-8 bg-[var(--primary)] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />
    </div>
  </div>
);