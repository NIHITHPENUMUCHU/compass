import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'normal' | 'energy' | 'data';
}

interface InteractiveBackgroundProps {
  className?: string;
  variant?: 'default' | 'cyber' | 'matrix';
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ 
  className = '',
  variant = 'default'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000));
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const particleType = Math.random() > 0.8 ? 'energy' : Math.random() > 0.6 ? 'data' : 'normal';
        newParticles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: particleType === 'energy' ? Math.random() * 4 + 2 : 
                particleType === 'data' ? Math.random() * 2 + 1 :
                Math.random() * 3 + 1,
          opacity: particleType === 'energy' ? Math.random() * 0.6 + 0.4 :
                  particleType === 'data' ? Math.random() * 0.4 + 0.2 :
                  Math.random() * 0.3 + 0.1,
          color: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
          type: particleType
        });
      }
      setParticles(newParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          const attraction = particle.type === 'energy' ? 0.0003 : 0.0001;
          particle.vx += dx * force * attraction;
          particle.vy += dy * force * attraction;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary handling
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Friction
        particle.vx *= 0.995;
        particle.vy *= 0.995;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'energy') {
          // Energy particles with glow
          ctx.shadowBlur = 20;
          ctx.shadowColor = particle.color;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner bright core
          ctx.shadowBlur = 5;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'data') {
          // Data particles as squares
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        } else {
          // Normal particles
          ctx.fillStyle = particle.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();

        // Draw connections
        particles.forEach(otherParticle => {
          if (particle.id >= otherParticle.id) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const maxDistance = variant === 'cyber' ? 150 : 120;
          
          if (distance < maxDistance) {
            ctx.save();
            ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.3;
            
            if (variant === 'cyber') {
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 2;
              ctx.shadowBlur = 5;
              ctx.shadowColor = particle.color;
            } else {
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 3;
              ctx.shadowColor = particle.color;
            }
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [particles.length, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
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