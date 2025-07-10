import React, { useState } from 'react';
import { Link } from 'wouter';
import { Compass, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="flex items-center space-x-6">
            <motion.div 
              className="hidden md:flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/categories" 
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all duration-300 font-['Orbitron'] font-medium"
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all duration-300 font-['Orbitron'] font-medium"
              >
                About
              </Link>
            </motion.div>
            
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-300 border-2 border-yellow-300/30' 
                  : 'bg-gray-100 text-gray-700 border-2 border-gray-300'
              } hover:scale-110 hover:animate-neon-pulse`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? 
                <X size={24} className="text-[var(--text-primary)]" /> : 
                <Menu size={24} className="text-[var(--text-primary)]" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <Link 
                  to="/categories" 
                  className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-['Orbitron']"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 rounded-lg text-base font-medium text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-['Orbitron']"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};