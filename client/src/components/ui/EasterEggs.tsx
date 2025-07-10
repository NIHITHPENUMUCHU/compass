import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Zap, Heart, Star, Rocket, Gift } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
  category: string;
  nextClue: string;
}

const quotes: Quote[] = [
  {
    text: "The future belongs to those who understand that artificial intelligence is not about replacing humans, but about amplifying human potential.",
    author: "Satya Nadella",
    category: "AI Vision",
    nextClue: "Look for the sparkling energy in the top right corner - it holds the power of innovation! ⚡"
  },
  {
    text: "Machine learning is the last invention that humanity will ever need to make.",
    author: "Nick Bostrom",
    category: "Innovation",
    nextClue: "The heart of AI beats in the bottom left - find the symbol of love for technology! ❤️"
  },
  {
    text: "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire.",
    author: "Sundar Pichai",
    category: "Technology",
    nextClue: "A star shines bright in the middle left - discover the guiding light of AI! ⭐"
  },
  {
    text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger W. Dijkstra",
    category: "Philosophy",
    nextClue: "Blast off to the bottom right where rockets launch dreams into reality! 🚀"
  },
  {
    text: "Artificial intelligence would be the ultimate version of Google. The ultimate search engine that would understand everything on the web.",
    author: "Larry Page",
    category: "Search",
    nextClue: "Magic sparkles in the center bottom - find the gift that keeps on giving! ✨"
  },
  {
    text: "I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.",
    author: "Alan Turing",
    category: "Prediction",
    nextClue: "You've found them all! You are a true AI explorer! 🎉 Keep exploring InnovAI Compass!"
  }
];

interface EasterEggProps {
  icon: React.ReactNode;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
  eggId: number;
  onFound: (eggId: number) => void;
  isFound: boolean;
}

const EasterEgg: React.FC<EasterEggProps> = ({ icon, position, delay = 0, eggId, onFound, isFound }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isFound) {
      onFound(eggId);
    }
  };

  return (
    <motion.div
      className={`easter-egg ${isFound ? 'opacity-30' : ''}`}
      style={position}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isFound ? 0.3 : 0.6, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        opacity: 1, 
        scale: 1.3,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.div>
  );
};

export const EasterEggs: React.FC = () => {
  const [foundEggs, setFoundEggs] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const handleEggFound = (eggId: number) => {
    if (!foundEggs.includes(eggId)) {
      setFoundEggs([...foundEggs, eggId]);
      setCurrentQuote(quotes[eggId]);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentQuote(null);
  };

  return (
    <>
      <div className="interactive-layer">
        <EasterEgg
          icon={<div className="w-3 h-3 bg-[var(--primary)] rounded-full opacity-30 hover:opacity-100 transition-opacity duration-300" />}
          position={{ top: '15%', left: '3%' }}
          delay={1}
          eggId={0}
          onFound={handleEggFound}
          isFound={foundEggs.includes(0)}
        />
        
        <EasterEgg
          icon={<div className="w-2 h-2 bg-yellow-500 rounded-full opacity-20 hover:opacity-100 transition-opacity duration-300" />}
          position={{ top: '25%', right: '5%' }}
          delay={2}
          eggId={1}
          onFound={handleEggFound}
          isFound={foundEggs.includes(1)}
        />
        
        <EasterEgg
          icon={<div className="w-2 h-2 bg-red-500 rounded-full opacity-25 hover:opacity-100 transition-opacity duration-300" />}
          position={{ bottom: '35%', left: '7%' }}
          delay={3}
          eggId={2}
          onFound={handleEggFound}
          isFound={foundEggs.includes(2)}
        />
        
        <EasterEgg
          icon={<div className="w-2 h-2 bg-blue-500 rounded-full opacity-20 hover:opacity-100 transition-opacity duration-300" />}
          position={{ top: '45%', left: '12%' }}
          delay={4}
          eggId={3}
          onFound={handleEggFound}
          isFound={foundEggs.includes(3)}
        />
        
        <EasterEgg
          icon={<div className="w-3 h-3 bg-purple-500 rounded-full opacity-25 hover:opacity-100 transition-opacity duration-300" />}
          position={{ bottom: '25%', right: '12%' }}
          delay={5}
          eggId={4}
          onFound={handleEggFound}
          isFound={foundEggs.includes(4)}
        />
        
        <EasterEgg
          icon={<div className="w-2 h-2 bg-green-500 rounded-full opacity-15 hover:opacity-100 transition-opacity duration-300" />}
          position={{ bottom: '55%', left: '45%' }}
          delay={6}
          eggId={5}
          onFound={handleEggFound}
          isFound={foundEggs.includes(5)}
        />
      </div>

      <AnimatePresence>
        {showModal && currentQuote && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] max-w-lg w-full mx-4"
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--primary)] rounded-2xl p-8 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary-gradient)] animate-energy-pulse"></div>
                
                <div className="relative z-10">
                  <button
                    onClick={closeModal}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors z-20"
                  >
                    <X size={16} />
                  </button>
                  
                  {/* Celebration header */}
                  <motion.div 
                    className="text-center mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: 3 }}
                      className="text-4xl mb-2"
                    >
                      🎉
                    </motion.div>
                    <h2 className="text-2xl font-bold text-[var(--primary)] font-['Orbitron'] mb-2">
                      CONGRATULATIONS!
                    </h2>
                    <p className="text-[var(--text-secondary)] font-['JetBrains_Mono'] text-sm">
                      You found Easter Egg #{foundEggs.length}!
                    </p>
                  </motion.div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[var(--primary-gradient)] text-white text-xs font-bold rounded-full font-['JetBrains_Mono'] tracking-wider">
                      {currentQuote.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <blockquote className="text-lg text-[var(--text-primary)] font-['Inter'] leading-relaxed mb-6 italic">
                    "{currentQuote.text}"
                  </blockquote>
                  
                  <div className="text-right mb-6">
                    <cite className="text-[var(--primary)] font-semibold font-['Orbitron']">
                      — {currentQuote.author}
                    </cite>
                  </div>
                  
                  {/* Next clue section */}
                  <motion.div 
                    className="bg-[var(--bg-primary)] border border-[var(--primary)] rounded-lg p-4 mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-sm font-bold text-[var(--primary)] font-['Orbitron'] mb-2 flex items-center">
                      <Sparkles size={16} className="mr-2" />
                      NEXT CLUE
                    </h3>
                    <p className="text-[var(--text-secondary)] font-['Inter'] text-sm">
                      {currentQuote.nextClue}
                    </p>
                  </motion.div>
                  
                  {/* Progress indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-['JetBrains_Mono'] text-[var(--text-secondary)]">
                        Progress: {foundEggs.length}/6
                      </span>
                      <span className="text-sm font-['JetBrains_Mono'] text-[var(--primary)]">
                        {Math.round((foundEggs.length / 6) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                      <motion.div 
                        className="bg-[var(--primary-gradient)] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(foundEggs.length / 6) * 100}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <motion.button
                      onClick={closeModal}
                      className="btn-primary text-sm px-6 py-3 font-['Orbitron']"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONTINUE EXPLORING
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};