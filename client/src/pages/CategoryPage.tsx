import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { tools } from '../data/mockTools';
import { categories } from '../data/mockCategories';
import { Tool, Category } from '../types';
import { SearchBar } from '../components/tools/SearchBar';
import { ToolGrid } from '../components/tools/ToolGrid';
import { LayoutToggle } from '../components/ui/LayoutToggle';
import { FloatingCard, GlassMorphism, CyberGrid, QuantumOrb, MatrixRain } from '../components/ui/3DElements';
import { LoadingSpinner, CardSkeleton } from '../components/ui/LoadingSpinner';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { EasterEggs } from '../components/ui/EasterEggs';
import { FloatingIcons } from '../components/ui/AnimatedIcons';

export const CategoryPage = () => {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let filtered = tools;

    if (selectedCategory) {
      filtered = tools.filter(tool => tool.category.id === selectedCategory.id);
    }

    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.developer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const CategoryCard = ({ category }: { category: Category }) => (
    <motion.div
      className={`card-3d p-6 cursor-pointer transition-all duration-300 ${
        selectedCategory?.id === category.id ? 'ring-2 ring-[var(--primary)]' : ''
      }`}
      onClick={() => handleCategorySelect(category)}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-[var(--primary-gradient)] rounded-xl flex items-center justify-center text-white text-2xl font-['Orbitron'] font-bold animate-neon-pulse">
          {category.name.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-[var(--text-primary)] font-['Orbitron']">
          {category.name}
        </h3>
        <p className="text-[var(--text-secondary)] font-['Inter']">
          {category.description}
        </p>
        <div className="text-sm text-[var(--primary)] font-['JetBrains_Mono'] font-bold tracking-wider">
          {tools.filter(tool => tool.category.id === category.id).length} TOOLS
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground variant="cyber" />
      <CyberGrid />
      <MatrixRain density={8} variant="binary" />
      <FloatingIcons />
      <EasterEggs />
      
      {/* Background Elements */}
      <div className="background-layer">
        <GradientOrb className="w-80 h-80 top-10 right-10" delay={0} variant="cyber" />
        <GradientOrb className="w-60 h-60 bottom-10 left-10" delay={3} variant="energy" />
        <QuantumOrb size={100} className="absolute top-40 left-40" variant="cyber" />
        <QuantumOrb size={60} className="absolute bottom-40 right-40" variant="energy" />
      </div>

      <div className="main-content py-20">
        {/* Header Section */}
        <motion.section 
          className="text-center mobile-padding mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingCard delay={0.2} variant="cyber">
            <GlassMorphism className="inline-block px-8 py-4 rounded-full mb-8" variant="cyber">
              <motion.span 
                className="text-sm font-medium text-gradient font-['JetBrains_Mono'] tracking-wider"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {'>'} EXPLORE AI CATEGORIES_
              </motion.span>
            </GlassMorphism>
          </FloatingCard>

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-neon font-['Orbitron']">
            AI TOOL CATEGORIES
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto font-['Inter']">
            Discover AI tools organized by categories to find exactly what you need for your next project
          </p>
        </motion.section>

        {/* Search Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-8">
          <FloatingCard delay={0.4} variant="hologram">
            <GlassMorphism className="p-6 rounded-2xl">
              <div className="search-enhanced">
                <SearchBar onSearch={handleSearch} />
              </div>
            </GlassMorphism>
          </FloatingCard>
        </section>

        {/* Layout Toggle Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassMorphism className="p-4 rounded-xl" variant="cyber">
              <div className="flex justify-between items-center">
                <span className="text-sm font-['JetBrains_Mono'] text-[var(--text-secondary)]">
                  Display Options:
                </span>
                <LayoutToggle />
              </div>
            </GlassMorphism>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto mobile-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
              BROWSE BY CATEGORY
            </h2>
            <div className="mobile-grid">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Selected Category Tools */}
        {selectedCategory && (
          <section className="max-w-7xl mx-auto mobile-padding mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-neon font-['Orbitron']">
                  {selectedCategory.name.toUpperCase()} TOOLS
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="btn-cyberpunk px-6 py-3 font-['JetBrains_Mono']"
                >
                  VIEW ALL CATEGORIES
                </button>
              </div>

              {loading ? (
                <div className="mobile-grid">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              ) : filteredTools.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FloatingCard variant="cyber">
                    <GlassMorphism className="p-12 rounded-2xl">
                      <QuantumOrb size={80} className="mx-auto mb-6" variant="cyber" />
                      <h3 className="text-2xl font-bold text-neon font-['Orbitron'] mb-4">
                        NO TOOLS FOUND
                      </h3>
                      <p className="text-[var(--text-secondary)] text-lg font-['JetBrains_Mono']">
                        No tools found in this category matching your search.
                      </p>
                    </GlassMorphism>
                  </FloatingCard>
                </motion.div>
              ) : (
                <ToolGrid tools={filteredTools} />
              )}
            </motion.div>
          </section>
        )}

        {/* All Tools Section */}
        {!selectedCategory && (
          <section className="max-w-7xl mx-auto mobile-padding mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
                {searchQuery ? 'SEARCH RESULTS' : 'ALL AI TOOLS'}
              </h2>

              {loading ? (
                <div className="mobile-grid">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              ) : filteredTools.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FloatingCard variant="cyber">
                    <GlassMorphism className="p-12 rounded-2xl">
                      <QuantumOrb size={80} className="mx-auto mb-6" variant="cyber" />
                      <h3 className="text-2xl font-bold text-neon font-['Orbitron'] mb-4">
                        NO TOOLS FOUND
                      </h3>
                      <p className="text-[var(--text-secondary)] text-lg font-['JetBrains_Mono']">
                        No AI tools found matching your search criteria.
                      </p>
                    </GlassMorphism>
                  </FloatingCard>
                </motion.div>
              ) : (
                <ToolGrid tools={filteredTools} />
              )}
            </motion.div>
          </section>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
};