import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="relative inline-block"
          style={{ color: 'var(--text-primary)' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};