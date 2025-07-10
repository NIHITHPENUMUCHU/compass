import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { tools } from '../data/mockTools';
import { Tool } from '../types';
import { SearchBar } from '../components/tools/SearchBar';
import { CategoryFilter } from '../components/tools/CategoryFilter';
import { ToolGrid } from '../components/tools/ToolGrid';
import { LayoutToggle } from '../components/ui/LayoutToggle';
import { FloatingCard, GlassMorphism, CyberGrid, QuantumOrb, MatrixRain } from '../components/ui/3DElements';
import { CardSkeleton, QuantumLoader } from '../components/ui/LoadingSpinner';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { EasterEggs } from '../components/ui/EasterEggs';
import { FloatingIcons } from '../components/ui/AnimatedIcons';

export const HomePage = () => {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'rating' | 'updated'>('latest');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const toolsPerPage = 12;

  useEffect(() => {
    setLoading(true);
    setIsSearching(true);
    
    const searchTimer = setTimeout(() => {
      let filtered = tools.filter((tool) => {
        const matchesSearch = 
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.developer.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedCategory ? tool.category.id === selectedCategory : true;
        
        return matchesSearch && matchesCategory;
      });

      // Sort tools
      if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'updated') {
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
      } else {
        filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
      }

      setFilteredTools(filtered);
      setCurrentPage(1);
      setLoading(false);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchQuery, selectedCategory, sortBy]);

  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  const handleExploreTools = () => {
    setLocation('/categories');
  };

  const handleLearnMore = () => {
    setLocation('/about');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const VisibleText = ({ text, useInnovaiColor = false }: { text: string; useInnovaiColor?: boolean }) => (
    <div className="flex flex-wrap justify-center">
      {text.split('').map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block font-['Orbitron'] font-black"
          style={{ color: useInnovaiColor ? 'var(--text-innovai)' : 'var(--primary)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: idx * 0.05,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
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
      <div className="absolute inset-0">
        <GradientOrb className="w-96 h-96 top-20 left-10" delay={0} variant="cyber" />
        <GradientOrb className="w-64 h-64 bottom-20 right-10" delay={2} variant="energy" />
        <GradientOrb className="w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" delay={4} />
        <QuantumOrb size={120} className="absolute top-32 right-32" variant="cyber" />
        <QuantumOrb size={80} className="absolute bottom-32 left-32" variant="energy" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="text-center py-24 mobile-padding"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FloatingCard delay={0.2} variant="cyber" intensity={1.5}>
            <GlassMorphism className="inline-block px-8 py-4 rounded-full mb-8" variant="cyber">
              <motion.span 
                className="text-sm font-medium text-gradient font-['JetBrains_Mono'] tracking-wider"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &gt; DISCOVER NEXT-GENERATION AI TOOLS_
              </motion.span>
            </GlassMorphism>
          </FloatingCard>

          <div className="space-y-6">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-['Orbitron'] mb-4">
                <VisibleText text="InnovAI" useInnovaiColor={true} />
              </div>
              <div className="font-['Orbitron'] text-neon">
                <VisibleText text="Compass" useInnovaiColor={false} />
              </div>
            </motion.h1>
          </div>

          <FloatingCard delay={0.4} variant="hologram">
            <motion.p 
              className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-['Inter'] font-medium mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Navigate the future with precision. Discover cutting-edge AI tools that 
              <span className="text-gradient font-bold"> transform ideas into reality</span>.
            </motion.p>
          </FloatingCard>

          <FloatingCard delay={0.6}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                onClick={handleExploreTools}
                className="btn-primary text-lg px-10 py-5 font-['Orbitron'] tracking-wider"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORE TOOLS
              </motion.button>
              <motion.button 
                onClick={handleLearnMore}
                className="btn-cyberpunk px-8 py-4 font-['JetBrains_Mono']"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </FloatingCard>
        </motion.section>

        {/* Search Section */}
        <section className="max-w-5xl mx-auto mobile-padding mb-16">
          <FloatingCard delay={0.8} variant="cyber">
            <GlassMorphism className="p-8 rounded-2xl" variant="cyber">
              <div className="search-enhanced">
                <SearchBar onSearch={handleSearch} />
              </div>
              {isSearching && (
                <div className="flex justify-center mt-4">
                  <QuantumLoader text="Searching AI tools..." />
                </div>
              )}
            </GlassMorphism>
          </FloatingCard>
        </section>
        
        {/* Filters Section */}
        <section className="max-w-7xl mx-auto mobile-padding mb-8">
          <motion.div 
            className="animate-slide-up"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <GlassMorphism className="p-6 rounded-xl" variant="cyber">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <CategoryFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
                <div className="cyber-border rounded-lg">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating' | 'updated')}
                    className="bg-transparent border-none outline-none font-['JetBrains_Mono'] font-medium text-[var(--text-primary)] p-3 rounded-lg"
                  >
                    <option value="latest">Latest Release</option>
                    <option value="rating">Highest Rated</option>
                    <option value="updated">Recently Updated</option>
                  </select>
                </div>
              </div>
            </GlassMorphism>
          </motion.div>
        </section>

        {/* Layout Toggle Section */}
        <section className="max-w-7xl mx-auto mobile-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
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

        {/* Stats Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FloatingCard variant="hologram">
              <GlassMorphism className="p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-5xl font-black text-neon font-['Orbitron'] mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {tools.length}+
                    </motion.div>
                    <div className="text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">AI TOOLS</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-5xl font-black text-neon font-['Orbitron'] mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      8
                    </motion.div>
                    <div className="text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">CATEGORIES</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-5xl font-black text-neon font-['Orbitron'] mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      100%
                    </motion.div>
                    <div className="text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">AUTHENTIC</div>
                  </motion.div>
                </div>
              </GlassMorphism>
            </FloatingCard>
          </motion.div>
        </section>

        {/* Tools Grid Section */}
        <section className="max-w-7xl mx-auto mobile-padding mb-20">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : filteredTools.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FloatingCard variant="cyber">
                <GlassMorphism className="p-12 rounded-2xl">
                  <QuantumOrb size={80} className="mx-auto mb-6" variant="cyber" />
                  <h3 className="text-3xl font-bold text-neon font-['Orbitron'] mb-4">
                    NO TOOLS FOUND
                  </h3>
                  <p className="text-[var(--text-secondary)] text-lg font-['JetBrains_Mono']">
                    No AI tools found matching your search criteria.
                  </p>
                </GlassMorphism>
              </FloatingCard>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <h2 className="text-4xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
                  {searchQuery ? 'SEARCH RESULTS' : 'FEATURED AI TOOLS'}
                </h2>
                <ToolGrid tools={currentTools} />
              </motion.div>
              
              {totalPages > 1 && (
                <motion.div 
                  className="flex justify-center space-x-3 mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  {Array.from({ length: totalPages }, (_, i) => (
                    <motion.button
                      key={i + 1}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05, rotateZ: 5 }}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-6 py-3 rounded-xl font-['JetBrains_Mono'] font-bold transition-all duration-300 ${
                        currentPage === i + 1
                          ? 'btn-primary'
                          : 'cyber-border text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};