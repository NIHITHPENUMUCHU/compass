import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';

export const FloatingCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  intensity?: number;
  variant?: 'default' | 'cyber' | 'hologram';
}> = ({ children, className = '', delay = 0, intensity = 1, variant = 'default' }) => {
  const cardClass = variant === 'cyber' ? 'card-3d cyber-border' : 
                   variant === 'hologram' ? 'card-holographic' : 'card-3d';

  return (
    <motion.div
      className={`transform-style-3d ${cardClass} ${className}`}
      initial={{ y: 20, opacity: 0, rotateX: -15 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -15 * intensity, 
        rotateX: 8 * intensity,
        rotateY: 5 * intensity,
        scale: 1 + (0.03 * intensity),
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

export const HolographicCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((event.clientX - centerX) / rect.width);
    y.set((event.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`card-holographic perspective-1000 ${className}`}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export const CyberCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <motion.div
    className={`card-3d cyber-border energy-field ${className}`}
    whileHover={{
      rotateY: 5,
      rotateX: 3,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export const MorphingBlob: React.FC<{
  className?: string;
  color?: string;
  size?: number;
  variant?: 'default' | 'cyber' | 'energy';
}> = ({ className = '', color = 'var(--primary)', size = 200, variant = 'default' }) => {
  const blobClass = variant === 'cyber' ? 'morphing-blob animate-glitch' :
                   variant === 'energy' ? 'morphing-blob animate-energy-pulse' :
                   'morphing-blob';

  return (
    <motion.div 
      className={`${blobClass} ${className}`}
      style={{
        width: size,
        height: size,
        background: variant === 'cyber' ? 'var(--cyber-gradient)' : 
                   variant === 'energy' ? 'var(--primary-gradient)' :
                   `linear-gradient(45deg, ${color}, ${color}80)`,
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "70% 30% 40% 60% / 40% 70% 60% 30%",
          "40% 70% 60% 30% / 70% 40% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%"
        ],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const ParallaxElement: React.FC<{
  children: React.ReactNode;
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};

export const GlassMorphism: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  variant?: 'default' | 'cyber';
}> = ({ children, className = '', intensity = 1, variant = 'default' }) => {
  const glassClass = variant === 'cyber' ? 'glass-effect cyber-border' : 'glass-effect';
  
  return (
    <div 
      className={`${glassClass} ${className}`}
      style={{
        backdropFilter: `blur(${20 * intensity}px) saturate(${180 * intensity}%)`,
        WebkitBackdropFilter: `blur(${20 * intensity}px) saturate(${180 * intensity}%)`
      }}
    >
      {children}
    </div>
  );
};

export const NeonGlow: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}> = ({ children, color = 'var(--primary)', intensity = 1, className = '' }) => (
  <motion.div 
    className={`relative ${className}`}
    style={{
      filter: `drop-shadow(0 0 ${15 * intensity}px ${color})`
    }}
    whileHover={{
      filter: `drop-shadow(0 0 ${25 * intensity}px ${color})`
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export const CyberGrid: React.FC<{
  className?: string;
  animated?: boolean;
  density?: number;
}> = ({ className = '', animated = true, density = 5 }) => (
  <div className={`absolute inset-0 interactive-grid ${className}`}>
    <svg width="100%" height="100%" className="opacity-20">
      <defs>
        <pattern id="cyber-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path 
            d="M 60 0 L 0 0 0 60" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="1"
          />
          <circle cx="0" cy="0" r="2" fill="var(--primary)" opacity="0.5" />
          <circle cx="60" cy="60" r="2" fill="var(--primary)" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cyber-grid)" />
    </svg>
    {animated && (
      <>
        {Array.from({ length: density }).map((_, i) => (
          <motion.div
            key={i}
            className="data-stream"
            style={{
              left: `${20 * i}%`,
              top: 0,
            }}
            animate={{
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
      </>
    )}
  </div>
);

export const QuantumOrb: React.FC<{
  size?: number;
  className?: string;
  variant?: 'default' | 'cyber' | 'energy';
}> = ({ size = 100, className = '', variant = 'default' }) => {
  return null; // Removed for performance
};

export const MatrixRain: React.FC<{
  className?: string;
  density?: number;
  variant?: 'binary' | 'hex' | 'symbols';
}> = ({ className = '', density = 5, variant = 'binary' }) => {
  return null; // Removed for performance
};

export const HoverCard3D: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}> = ({ children, className = '', intensity = 1 }) => (
  <motion.div
    className={`card-3d ${className}`}
    whileHover={{
      rotateY: 10 * intensity,
      rotateX: 5 * intensity,
      scale: 1 + (0.05 * intensity),
      z: 50 * intensity
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

export const ParticleSystem: React.FC<{
  className?: string;
  count?: number;
  variant?: 'default' | 'cyber' | 'energy';
}> = ({ className = '', count = 20, variant = 'default' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className={`particle-system absolute ${
          variant === 'cyber' ? 'animate-glitch' :
          variant === 'energy' ? 'animate-energy-pulse' : ''
        }`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 4 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

export const EnergyField: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}> = ({ children, className = '', intensity = 1 }) => (
  <div className={`energy-field ${className}`}>
    <motion.div
      className="absolute inset-0 rounded-xl"
      style={{
        background: `conic-gradient(from 0deg, transparent, var(--primary), transparent)`,
        opacity: 0.1 * intensity
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    {children}
  </div>
);