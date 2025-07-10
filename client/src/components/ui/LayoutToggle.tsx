import React, { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, Image, Type } from 'lucide-react';

type LayoutMode = 'grid' | 'list';
type ViewMode = 'with-images' | 'text-only';

interface LayoutContextType {
  layoutMode: LayoutMode;
  viewMode: ViewMode;
  setLayoutMode: (mode: LayoutMode) => void;
  setViewMode: (mode: ViewMode) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  layoutMode: 'grid',
  viewMode: 'with-images',
  setLayoutMode: () => {},
  setViewMode: () => {},
});

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('grid');
  const [viewMode, setViewMode] = useState<ViewMode>('with-images');

  return (
    <LayoutContext.Provider value={{ layoutMode, viewMode, setLayoutMode, setViewMode }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const LayoutToggle: React.FC = () => {
  const { layoutMode, viewMode, setLayoutMode, setViewMode } = useLayout();

  return (
    <div className="flex items-center space-x-4 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-2">
      {/* Layout Mode Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-['JetBrains_Mono'] text-[var(--text-secondary)]">Layout:</span>
        <div className="flex bg-[var(--bg-primary)] rounded-lg p-1">
          <motion.button
            onClick={() => setLayoutMode('grid')}
            className={`p-2 rounded-md transition-all duration-200 ${
              layoutMode === 'grid'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Grid size={16} />
          </motion.button>
          <motion.button
            onClick={() => setLayoutMode('list')}
            className={`p-2 rounded-md transition-all duration-200 ${
              layoutMode === 'list'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <List size={16} />
          </motion.button>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-['JetBrains_Mono'] text-[var(--text-secondary)]">View:</span>
        <div className="flex bg-[var(--bg-primary)] rounded-lg p-1">
          <motion.button
            onClick={() => setViewMode('with-images')}
            className={`p-2 rounded-md transition-all duration-200 ${
              viewMode === 'with-images'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image size={16} />
          </motion.button>
          <motion.button
            onClick={() => setViewMode('text-only')}
            className={`p-2 rounded-md transition-all duration-200 ${
              viewMode === 'text-only'
                ? 'bg-[var(--primary)] text-white'
                : 'text-[var(--text-secondary)] hover:text-[var(--primary)]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Type size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};