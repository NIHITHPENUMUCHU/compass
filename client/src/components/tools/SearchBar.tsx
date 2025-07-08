import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools } from '../../data/mockTools';
import { Tool } from '../../types';
import { useLocation } from 'wouter';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (query.trim()) {
        setIsSearching(true);
        
        // Simulate search delay for better UX
        setTimeout(() => {
          const filtered = tools.filter(tool =>
            tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase()) ||
            tool.developer.toLowerCase().includes(query.toLowerCase()) ||
            tool.features.some(feature => 
              feature.toLowerCase().includes(query.toLowerCase())
            )
          ).slice(0, 8); // Limit to 8 results
          
          setSearchResults(filtered);
          setShowResults(true);
          setIsSearching(false);
        }, 300);
      } else {
        setSearchResults([]);
        setShowResults(false);
        setIsSearching(false);
      }
      
      onSearch(query);
    }, 200);

    return () => clearTimeout(searchTimer);
  }, [query, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      setLocation(`/tool/${searchResults[0].id}`);
      setShowResults(false);
      setIsFocused(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (toolId: string) => {
    setLocation(`/tool/${toolId}`);
    setShowResults(false);
    setIsFocused(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setShowResults(false);
    onSearch('');
    inputRef.current?.focus();
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-[var(--primary)] text-white px-1 rounded">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto relative">
      <motion.div 
        ref={searchRef}
        className="relative search-enhanced"
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] w-5 h-5 z-10" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          placeholder="Search AI tools, categories, or developers..."
          className="w-full pl-12 pr-12 py-4 text-lg bg-transparent border-none outline-none font-['Inter'] text-[var(--text-primary)] placeholder-[var(--text-secondary)] relative z-10"
        />
        
        {query && (
          <motion.button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>
        )}
        
        {/* Typing Animation Effect */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ background: 'transparent' }}
            animate={{
              background: [
                'transparent',
                'linear-gradient(90deg, transparent 0%, rgba(196, 69, 108, 0.05) 50%, transparent 100%)',
                'transparent'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Search Results Dropdown */}
        <AnimatePresence>
          {showResults && (isFocused || query) && (
            <motion.div
              className="search-results"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {isSearching ? (
                <div className="search-result-item">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin w-4 h-4 border-2 border-[var(--primary)] border-t-transparent rounded-full"></div>
                    <span className="text-[var(--text-secondary)]">Searching...</span>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <>
                  {searchResults.map((tool, index) => (
                    <motion.div
                      key={tool.id}
                      className="search-result-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleResultClick(tool.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[var(--primary-gradient)] rounded-lg flex items-center justify-center text-white font-bold">
                          {tool.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[var(--text-primary)] font-['Orbitron']">
                            {highlightMatch(tool.name, query)}
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)] truncate">
                            {highlightMatch(tool.description, query)}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] px-2 py-1 rounded-full">
                              {tool.category.name}
                            </span>
                            <span className="text-xs text-[var(--primary)]">
                              ⭐ {tool.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {searchResults.length === 8 && (
                    <div className="search-result-item border-t-2 border-[var(--primary)]">
                      <div className="text-center text-[var(--text-secondary)] text-sm">
                        <span>Showing top 8 results. </span>
                        <button 
                          onClick={() => {
                            setLocation('/categories');
                            setShowResults(false);
                          }}
                          className="text-[var(--primary)] hover:underline font-semibold"
                        >
                          View all results →
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : query.trim() && (
                <div className="no-results">
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-[var(--text-secondary)]">
                      No tools found for "{query}"
                    </p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                      Try searching for categories like "text generation" or "image creation"
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </form>
  );
};