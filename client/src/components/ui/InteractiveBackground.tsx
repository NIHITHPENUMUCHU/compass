import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveBackgroundProps {
  className?: string;
  variant?: 'default' | 'cyber';
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ 
  className = '',
  variant = 'cyber'
}) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      {variant === 'cyber' && <CyberGrid />}
    </div>
  );
};

export const GradientOrb: React.FC<{ 
  className?: string; 
  delay?: number;
  variant?: 'default' | 'cyber' | 'energy';
}> = ({ 
  className = '', 
  delay = 0,
  variant = 'default'
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.6, 0.2],
        rotate: 360
      }}
      transition={{
        duration: variant === 'cyber' ? 6 : variant === 'energy' ? 4 : 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: variant === 'cyber' ? 
          'radial-gradient(circle, var(--primary) 0%, var(--primary-light) 50%, transparent 70%)' :
          variant === 'energy' ?
          'radial-gradient(circle, var(--primary) 0%, var(--primary-dark) 30%, transparent 60%)' :
          'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        filter: `blur(${variant === 'cyber' ? '30px' : '25px'})`
      }}
    />
  );
};

export const CyberGrid: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`absolute inset-0 ${className}`}>
    <svg width="100%" height="100%" className="opacity-10">
      <defs>
        <pattern id="cyber-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path 
            d="M 80 0 L 0 0 0 80" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="2" fill="var(--primary)" opacity="0.6" />
          <circle cx="80" cy="80" r="2" fill="var(--primary)" opacity="0.6" />
        </pattern>
        <pattern id="data-flow" width="200" height="20" patternUnits="userSpaceOnUse">
          <rect width="200" height="20" fill="transparent" />
          <rect width="40" height="2" y="9" fill="var(--primary)" opacity="0.3">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;200,0;0,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cyber-grid)" />
      <rect width="100%" height="100%" fill="url(#data-flow)" />
    </svg>
  </div>
);