import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Zap, Heart, Star, Rocket } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
  category: string;
}

const quotes: Quote[] = [
  {
    text: "The future belongs to those who understand that artificial intelligence is not about replacing humans, but about amplifying human potential.",
    author: "Satya Nadella",
    category: "AI Vision"
  },
  {
    text: "Machine learning is the last invention that humanity will ever need to make.",
    author: "Nick Bostrom",
    category: "Innovation"
  },
  {
    text: "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire.",
    author: "Sundar Pichai",
    category: "Technology"
  },
  {
    text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    author: "Edsger W. Dijkstra",
    category: "Philosophy"
  },
  {
    text: "Artificial intelligence would be the ultimate version of Google. The ultimate search engine that would understand everything on the web.",
    author: "Larry Page",
    category: "Search"
  },
  {
    text: "I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.",
    author: "Alan Turing",
    category: "Prediction"
  },
  {
    text: "The real question is not whether machines think but whether men do.",
    author: "B.F. Skinner",
    category: "Philosophy"
  },
  {
    text: "AI doesn't have to be evil to destroy humanity – if AI has a goal and humanity just happens to come in the way, it will destroy humanity as a matter of course without even thinking about it, no hard feelings.",
    author: "Elon Musk",
    category: "Caution"
  },
  {
    text: "The development of full artificial intelligence could spell the end of the human race.",
    author: "Stephen Hawking",
    category: "Warning"
  },
  {
    text: "Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last.",
    author: "Stephen Hawking",
    category: "Future"
  }
];

interface EasterEggProps {
  icon: React.ReactNode;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
}

const EasterEgg: React.FC<EasterEggProps> = ({ icon, position, delay = 0 }) => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);

  const handleClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    setShowQuote(true);
  };

  return (
    <>
      <motion.div
        className="easter-egg"
        style={position}
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.2,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.div>

      <AnimatePresence>
        {showQuote && (
          <>
            <motion.div
              className="quote-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuote(false)}
            />
            <motion.div
              className="quote-modal"
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative">
                <button
                  onClick={() => setShowQuote(false)}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--primary-dark)] transition-colors"
                >
                  <X size={16} />
                </button>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[var(--primary-gradient)] text-white text-xs font-bold rounded-full font-['JetBrains_Mono'] tracking-wider">
                    {currentQuote.category.toUpperCase()}
                  </span>
                </div>
                
                <blockquote className="text-lg text-[var(--text-primary)] font-['Inter'] leading-relaxed mb-6 italic">
                  "{currentQuote.text}"
                </blockquote>
                
                <div className="text-right">
                  <cite className="text-[var(--primary)] font-semibold font-['Orbitron']">
                    — {currentQuote.author}
                  </cite>
                </div>
                
                <div className="mt-6 text-center">
                  <motion.button
                    onClick={handleClick}
                    className="btn-cyberpunk text-sm px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Another Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const EasterEggs: React.FC = () => {
  return (
    <>
      <EasterEgg
        icon={<Sparkles size={24} className="text-[var(--primary)]" />}
        position={{ top: '20%', left: '5%' }}
        delay={1}
      />
      
      <EasterEgg
        icon={<Zap size={28} className="text-yellow-500" />}
        position={{ top: '60%', right: '8%' }}
        delay={2}
      />
      
      <EasterEgg
        icon={<Heart size={26} className="text-red-500" />}
        position={{ bottom: '30%', left: '10%' }}
        delay={3}
      />
      
      <EasterEgg
        icon={<Star size={24} className="text-blue-500" />}
        position={{ top: '40%', left: '15%' }}
        delay={4}
      />
      
      <EasterEgg
        icon={<Rocket size={30} className="text-purple-500" />}
        position={{ bottom: '20%', right: '15%' }}
        delay={5}
      />
      
      <EasterEgg
        icon={<Sparkles size={22} className="text-green-500" />}
        position={{ top: '80%', left: '50%' }}
        delay={6}
      />
    </>
  );
};