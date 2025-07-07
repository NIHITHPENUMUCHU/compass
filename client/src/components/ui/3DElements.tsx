import React from 'react';
import { motion } from 'framer-motion';

export const FloatingCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`transform-gpu ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const MorphingBlob: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = 'var(--primary)' }) => (
  <div 
    className={`animate-morph ${className}`}
    style={{
      background: `linear-gradient(45deg, ${color}, ${color}80)`,
      filter: 'blur(40px)',
      opacity: 0.3
    }}
  />
);

export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export const GlassMorphism: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div 
    className={`backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 ${className}`}
    style={{
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)'
    }}
  >
    {children}
  </div>
);

export const HolographicCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

export const NeonGlow: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}> = ({ children, color = 'var(--primary)', intensity = 20, className = '' }) => (
  <div 
    className={`relative ${className}`}
    style={{
      filter: `drop-shadow(0 0 ${intensity}px ${color})`
    }}
  >
    {children}
  </div>
);

export const Tilt3D: React.FC<{
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};