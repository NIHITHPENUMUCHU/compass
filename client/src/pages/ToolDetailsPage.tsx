import React from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { RatingStars } from '../components/tools/RatingStars';
import { tools } from '../data/mockTools';
import { ExternalLink, Calendar, User, DollarSign, Star, Zap, Shield, Globe } from 'lucide-react';
import { FloatingCard, GlassMorphism, CyberGrid, QuantumOrb, MatrixRain } from '../components/ui/3DElements';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { EasterEggs } from '../components/ui/EasterEggs';
import { FloatingIcons } from '../components/ui/AnimatedIcons';

export const ToolDetailsPage = () => {
  const [match, params] = useRoute('/tool/:id');
  const tool = tools.find((t) => t.id === params?.id);

  if (!tool) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <InteractiveBackground variant="cyber" />
        <CyberGrid />
        <MatrixRain density={8} variant="binary" />
        <FloatingIcons />
        <EasterEggs />
        
        <div className="main-content flex items-center justify-center min-h-screen">
          <FloatingCard variant="cyber">
            <GlassMorphism className="p-12 rounded-2xl text-center">
              <QuantumOrb size={80} className="mx-auto mb-6" variant="cyber" />
              <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-4">
                TOOL NOT FOUND
              </h2>
              <p className="text-[var(--text-secondary)] text-lg font-['JetBrains_Mono']">
                The requested AI tool could not be located in our database.
              </p>
            </GlassMorphism>
          </FloatingCard>
        </div>
        <ScrollToTop />
      </div>
    );
  }

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
        <GradientOrb className="w-96 h-96 top-20 left-10" delay={0} variant="cyber" />
        <GradientOrb className="w-64 h-64 bottom-20 right-10" delay={2} variant="energy" />
        <QuantumOrb size={120} className="absolute top-32 right-32" variant="cyber" />
        <QuantumOrb size={80} className="absolute bottom-32 left-32" variant="energy" />
      </div>

      <div className="main-content tool-details-container">
        {/* Hero Section */}
        <motion.div
          className="tool-hero-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[var(--primary-gradient)] rounded-xl flex items-center justify-center text-white text-2xl font-['Orbitron'] font-bold">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-4xl font-black text-neon font-['Orbitron']">{tool.name}</h1>
                  <p className="text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">
                    BY {tool.developer.toUpperCase()}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RatingStars rating={tool.rating} size={24} />
                  <span className="text-2xl font-bold text-[var(--primary)] font-['Orbitron']">
                    {tool.rating}
                  </span>
                </div>
                <div className="text-[var(--text-secondary)] font-['JetBrains_Mono']">
                  ({tool.reviewCount.toLocaleString()} reviews)
                </div>
              </div>
              
              <p className="text-xl text-[var(--text-primary)] leading-relaxed font-['Inter']">
                {tool.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)] font-['JetBrains_Mono']">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Updated: {new Date(tool.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>Released: {new Date(tool.releaseDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-80 space-y-4">
              <motion.a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-lg px-8 py-4 font-['Orbitron'] tracking-wider flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={24} />
                <span>VISIT WEBSITE</span>
                <ExternalLink size={20} />
              </motion.a>
              
              <div className="cyber-border rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)] font-['JetBrains_Mono']">Pricing:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold font-['Orbitron'] ${
                      tool.pricing.type === 'free' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : tool.pricing.type === 'freemium'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                    }`}>
                      {tool.pricing.type === 'free' ? 'FREE' : 
                       tool.pricing.type === 'freemium' ? 'FREEMIUM' : 
                       'PREMIUM'}
                    </span>
                  </div>
                  {tool.pricing.startingPrice && (
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-secondary)] font-['JetBrains_Mono']">Starting from:</span>
                      <span className="text-[var(--primary)] font-bold font-['Orbitron']">
                        {tool.pricing.startingPrice}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)] font-['JetBrains_Mono']">Category:</span>
                    <span className="text-[var(--primary)] font-bold font-['Orbitron']">
                      {tool.category.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="feature-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FloatingCard variant="cyber" delay={0.4}>
            <div className="feature-card">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-[var(--primary)]" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-['Orbitron']">
                  KEY FEATURES
                </h3>
              </div>
              <ul className="space-y-3">
                {tool.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-[var(--text-primary)] font-['Inter']"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3 animate-neon-pulse"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </FloatingCard>

          <FloatingCard variant="hologram" delay={0.6}>
            <div className="feature-card">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-8 h-8 text-[var(--primary)]" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-['Orbitron']">
                  PRICING INFO
                </h3>
              </div>
              <div className="space-y-4">
                <div className="cyber-border rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-neon font-['Orbitron'] mb-2">
                      {tool.pricing.type === 'free' ? 'FREE' : 
                       tool.pricing.type === 'freemium' ? 'FREEMIUM' : 
                       tool.pricing.startingPrice || 'PREMIUM'}
                    </div>
                    <p className="text-[var(--text-secondary)] font-['JetBrains_Mono']">
                      {tool.pricing.type === 'free' ? 'Completely free to use' :
                       tool.pricing.type === 'freemium' ? 'Free tier available' :
                       'Premium features available'}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <motion.a
                    href={tool.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyberpunk px-6 py-3 font-['JetBrains_Mono']"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    VIEW PRICING
                  </motion.a>
                </div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard variant="cyber" delay={0.8}>
            <div className="feature-card">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-[var(--primary)]" />
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-['Orbitron']">
                  TRUST SCORE
                </h3>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-neon font-['Orbitron'] mb-2">
                    {Math.round(tool.rating * 20)}%
                  </div>
                  <p className="text-[var(--text-secondary)] font-['JetBrains_Mono']">
                    Based on {tool.reviewCount.toLocaleString()} user reviews
                  </p>
                </div>
                <div className="flex justify-center">
                  <RatingStars rating={tool.rating} size={32} />
                </div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>

        {/* Tutorial Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FloatingCard variant="hologram" delay={1}>
            <GlassMorphism className="p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
                HOW TO GET STARTED
              </h2>
              <div className="space-y-8">
                {tool.tutorialSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col md:flex-row gap-6 items-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    <div className="w-16 h-16 bg-[var(--primary-gradient)] rounded-full flex items-center justify-center text-white text-2xl font-bold font-['Orbitron'] animate-neon-pulse">
                      {index + 1}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-['Orbitron'] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-['Inter'] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassMorphism>
          </FloatingCard>
        </motion.div>

        {/* Screenshots Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <FloatingCard variant="cyber" delay={1.2}>
            <GlassMorphism className="p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
                SCREENSHOTS & PREVIEW
              </h2>
              <div className="screenshot-gallery">
                {tool.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="screenshot-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={screenshot}
                      alt={`${tool.name} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg border-2 border-[var(--primary)]"
                    />
                  </motion.div>
                ))}
              </div>
            </GlassMorphism>
          </FloatingCard>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <FloatingCard variant="hologram" delay={1.4}>
            <GlassMorphism className="p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-6">
                READY TO GET STARTED?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] font-['Inter'] mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already using {tool.name} to enhance their workflow and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-10 py-5 font-['Orbitron'] tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  TRY {tool.name.toUpperCase()} NOW
                </motion.a>
                <motion.button
                  onClick={() => window.history.back()}
                  className="btn-cyberpunk px-8 py-4 font-['JetBrains_Mono']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BACK TO TOOLS
                </motion.button>
              </div>
            </GlassMorphism>
          </FloatingCard>
        </motion.div>
      </div>

      <ScrollToTop />
    </div>
  );
};