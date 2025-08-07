import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Sparkles, 
  Target, 
  Rocket, 
  Globe, 
  Code, 
  Palette, 
  Music,
  Video,
  MessageSquare,
  Heart,
  Star,
  Lightbulb,
  Shield,
  Eye,
  Atom
} from 'lucide-react';

interface AnimatedIconProps {
  icon: React.ReactNode;
  animation?: 'float' | 'pulse' | 'rotate' | 'bounce' | 'glow' | 'shake' | 'heartbeat';
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  icon, 
  animation = 'float', 
  size = 24, 
  color = 'var(--primary)', 
  delay = 0,
  className = ''
}) => {
  const animations = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        delay
      }
    },
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
        delay
      }
    },
    glow: {
      filter: [
        'drop-shadow(0 0 5px currentColor)',
        'drop-shadow(0 0 20px currentColor)',
        'drop-shadow(0 0 5px currentColor)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    },
    shake: {
      x: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        delay
      }
    },
    heartbeat: {
      scale: [1, 1.3, 1, 1.3, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={animations[animation]}
      style={{ color }}
    >
      {React.cloneElement(icon as React.ReactElement, { size })}
    </motion.div>
  );
};

export const FloatingIcons: React.FC = () => {
  return null; // Removed for performance
};

export const CategoryIcons = {
  'Text Generation': <MessageSquare className="w-6 h-6" />,
  'Image Creation': <Palette className="w-6 h-6" />,
  'Code Assistant': <Code className="w-6 h-6" />,
  'Audio & Speech': <Music className="w-6 h-6" />,
  'Website Making': <Globe className="w-6 h-6" />,
  'Video Creation': <Video className="w-6 h-6" />,
  'App Development': <Cpu className="w-6 h-6" />,
  'Daily Life': <Heart className="w-6 h-6" />
};

export { AnimatedIcon };