import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FloatingCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  intensity?: number;
}> = ({ children, className = '', delay = 0, intensity = 1 }) => (
  <motion.div
    className={`transform-style-3d ${className}`}
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
      y: -10 * intensity, 
      rotateX: 5 * intensity,
      rotateY: 5 * intensity,
      scale: 1 + (0.02 * intensity),
      transition: { duration: 0.3 }
    }}
  >
    {children}
  </motion.div>
);

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

export const MorphingBlob: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = 'var(--primary)', size = 200 }) => (
  <motion.div 
    className={`morphing-blob ${className}`}
    style={{
      width: size,
      height: size,
      background: `linear-gradient(45deg, ${color}, ${color}80)`,
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
}> = ({ children, className = '', intensity = 1 }) => (
  <div 
    className={`glass-effect ${className}`}
    style={{
      backdropFilter: `blur(${16 * intensity}px) saturate(${180 * intensity}%)`,
      WebkitBackdropFilter: `blur(${16 * intensity}px) saturate(${180 * intensity}%)`
    }}
  >
    {children}
  </div>
);

export const NeonGlow: React.FC<{
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}> = ({ children, color = 'var(--primary)', intensity = 1, className = '' }) => (
  <motion.div 
    className={`relative ${className}`}
    style={{
      filter: `drop-shadow(0 0 ${10 * intensity}px ${color})`
    }}
    whileHover={{
      filter: `drop-shadow(0 0 ${20 * intensity}px ${color})`
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export const CyberGrid: React.FC<{
  className?: string;
  animated?: boolean;
}> = ({ className = '', animated = true }) => (
  <div className={`absolute inset-0 ${className}`}>
    <svg width="100%" height="100%" className="opacity-10">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path 
            d="M 50 0 L 0 0 0 50" 
            fill="none" 
            stroke="var(--primary)" 
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {animated && (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
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
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
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
}> = ({ size = 100, className = '' }) => (
  <motion.div
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-[var(--primary-gradient)] opacity-60"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
        opacity: [0.6, 0.8, 0.6]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute inset-2 rounded-full border-2 border-[var(--primary)]"
      animate={{
        rotate: [0, -360],
        scale: [0.8, 1, 0.8]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div
      className="absolute inset-4 rounded-full bg-[var(--primary)] opacity-80"
      animate={{
        scale: [0.5, 1, 0.5],
        opacity: [0.8, 0.4, 0.8]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
);

export const MatrixRain: React.FC<{
  className?: string;
  density?: number;
}> = ({ className = '', density = 10 }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {Array.from({ length: density }).map((_, i) => (
      <motion.div
        key={i}
        className="matrix-rain absolute"
        style={{
          left: `${(100 / density) * i}%`,
          fontSize: Math.random() * 10 + 10,
        }}
        animate={{
          y: ['-100vh', '100vh'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "linear"
        }}
      >
        {String.fromCharCode(Math.random() * 26 + 65)}
      </motion.div>
    ))}
  </div>
);

export const HoverCard3D: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <motion.div
    className={`card-3d ${className}`}
    whileHover={{
      rotateY: 10,
      rotateX: 5,
      scale: 1.05,
      z: 50
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