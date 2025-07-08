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
  const iconData = [
    { icon: <Brain />, position: { top: '10%', left: '5%' }, animation: 'float' as const, color: '#ff6b9d', delay: 0 },
    { icon: <Cpu />, position: { top: '20%', right: '10%' }, animation: 'rotate' as const, color: '#4ade80', delay: 1 },
    { icon: <Zap />, position: { top: '50%', left: '8%' }, animation: 'glow' as const, color: '#fbbf24', delay: 2 },
    { icon: <Sparkles />, position: { bottom: '30%', right: '5%' }, animation: 'pulse' as const, color: '#a78bfa', delay: 3 },
    { icon: <Target />, position: { bottom: '20%', left: '15%' }, animation: 'bounce' as const, color: '#f87171', delay: 4 },
    { icon: <Rocket />, position: { top: '70%', right: '20%' }, animation: 'shake' as const, color: '#60a5fa', delay: 5 },
    { icon: <Globe />, position: { top: '40%', left: '20%' }, animation: 'rotate' as const, color: '#34d399', delay: 6 },
    { icon: <Code />, position: { bottom: '50%', right: '25%' }, animation: 'float' as const, color: '#fbbf24', delay: 7 },
    { icon: <Palette />, position: { top: '80%', left: '30%' }, animation: 'pulse' as const, color: '#f472b6', delay: 8 },
    { icon: <Music />, position: { top: '15%', left: '40%' }, animation: 'glow' as const, color: '#a78bfa', delay: 9 },
    { icon: <Video />, position: { bottom: '40%', left: '45%' }, animation: 'bounce' as const, color: '#fb7185', delay: 10 },
    { icon: <MessageSquare />, position: { top: '60%', right: '35%' }, animation: 'float' as const, color: '#4ade80', delay: 11 },
    { icon: <Heart />, position: { bottom: '60%', right: '40%' }, animation: 'heartbeat' as const, color: '#ef4444', delay: 12 },
    { icon: <Star />, position: { top: '30%', right: '45%' }, animation: 'glow' as const, color: '#fbbf24', delay: 13 },
    { icon: <Lightbulb />, position: { bottom: '70%', left: '35%' }, animation: 'pulse' as const, color: '#fbbf24', delay: 14 },
    { icon: <Shield />, position: { top: '90%', right: '30%' }, animation: 'float' as const, color: '#10b981', delay: 15 },
    { icon: <Eye />, position: { top: '25%', left: '60%' }, animation: 'shake' as const, color: '#8b5cf6', delay: 16 },
    { icon: <Atom />, position: { bottom: '80%', right: '50%' }, animation: 'rotate' as const, color: '#06b6d4', delay: 17 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {iconData.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={item.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: item.delay * 0.2, duration: 0.5 }}
        >
          <AnimatedIcon
            icon={item.icon}
            animation={item.animation}
            color={item.color}
            delay={item.delay * 0.1}
            size={Math.random() * 20 + 20}
          />
        </motion.div>
      ))}
    </div>
  );
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