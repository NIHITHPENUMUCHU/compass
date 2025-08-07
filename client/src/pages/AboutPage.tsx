import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { FloatingCard, GlassMorphism } from '../components/ui/3DElements';
import { InteractiveBackground, GradientOrb } from '../components/ui/InteractiveBackground';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { DeveloperProfile } from '../components/ui/DeveloperProfile';

export const AboutPage = () => {
  const [, setLocation] = useLocation();
  const features = [
    {
      title: 'Comprehensive AI Directory',
      description: 'Discover 50+ authentic AI tools across multiple categories including text generation, image creation, video editing, and daily life applications.',
      icon: '🤖'
    },
    {
      title: 'Free & Paid Options',
      description: 'Find AI tools with free tokens, trial periods, and freemium models alongside premium solutions for every budget.',
      icon: '💰'
    },
    {
      title: 'Real-Time Updates',
      description: 'Stay current with the latest AI tools and features. Our directory is continuously updated with new releases and improvements.',
      icon: '🔄'
    },
    {
      title: 'Interactive Experience',
      description: 'Enjoy a modern, responsive interface with smooth animations, gradient effects, and mobile-optimized design.',
      icon: '✨'
    },
    {
      title: 'Smart Search',
      description: 'Find exactly what you need with intelligent search and filtering by category, pricing, and functionality.',
      icon: '🔍'
    },
    {
      title: 'Community Driven',
      description: 'Built for the AI community, featuring authentic tools that developers and creators actually use.',
      icon: '👥'
    }
  ];

  const categories = [
    'Text Generation & Writing',
    'Image Creation & Design',
    'Video Production & Editing',
    'Audio & Music Generation',
    'Code Development',
    'App Building Platforms',
    'Daily Life & Wellness',
    'Productivity Tools'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground variant="cyber" />
      
      {/* Background Elements */}
      <div className="background-layer">
        <GradientOrb className="w-64 h-64 top-20 left-20" delay={0} variant="cyber" />
        <GradientOrb className="w-48 h-48 bottom-20 right-20" delay={2} variant="energy" />
      </div>

      <div className="main-content py-20">
        {/* Hero Section */}
        <motion.section 
          className="text-center mobile-padding mb-20"
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
                {'>'} ABOUT INNOVAI COMPASS_
              </motion.span>
            </GlassMorphism>
          </FloatingCard>

          <h1 className="text-5xl md:text-6xl font-black mb-8 text-neon font-['Orbitron']">
            NAVIGATE THE FUTURE OF AI
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-['Inter']">
            InnovAI Compass is your comprehensive guide to discovering and exploring cutting-edge AI tools. 
            We curate the best AI solutions across all categories to help you transform ideas into reality.
          </p>
        </motion.section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto mobile-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FloatingCard delay={0.6} variant="hologram">
              <GlassMorphism className="p-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-6">
                  OUR MISSION
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-['Inter']">
                  To democratize access to AI technology by providing a centralized platform where creators, 
                  developers, and innovators can discover authentic AI tools that accelerate their projects. 
                  We believe AI should be accessible to everyone, from beginners exploring their first AI tool 
                  to experts building complex applications.
                </p>
              </GlassMorphism>
            </FloatingCard>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto mobile-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-12 text-center">
              WHY CHOOSE INNOVAI COMPASS
            </h2>
            <div className="mobile-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <FloatingCard delay={1.2 + index * 0.1} variant="cyber">
                    <div className="card-3d p-8 h-full">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] font-['Orbitron'] mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-['Inter'] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="max-w-6xl mx-auto mobile-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <FloatingCard delay={2} variant="hologram">
              <GlassMorphism className="p-12 rounded-2xl">
                <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-8 text-center">
                  TOOL CATEGORIES
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category}
                      className="gradient-border p-1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="gradient-border-inner text-center">
                        <span className="text-[var(--text-primary)] font-['JetBrains_Mono'] font-medium">
                          {category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassMorphism>
            </FloatingCard>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="max-w-4xl mx-auto mobile-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <FloatingCard delay={2.6} variant="cyber">
              <GlassMorphism className="p-12 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-4xl font-black text-neon font-['Orbitron'] mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      50+
                    </motion.div>
                    <div className="text-[var(--text-secondary)] font-['JetBrains_Mono'] tracking-wider">AI TOOLS</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="text-4xl font-black text-neon font-['Orbitron'] mb-2"
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
                      className="text-4xl font-black text-neon font-['Orbitron'] mb-2"
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

        {/* Technology Section */}
        <section className="max-w-6xl mx-auto mobile-padding mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <FloatingCard delay={3} variant="hologram">
              <GlassMorphism className="p-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-6">
                  BUILT WITH MODERN TECHNOLOGY
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-['Inter'] mb-8">
                  InnovAI Compass is built using cutting-edge web technologies including React, TypeScript, 
                  Framer Motion for animations, and PostgreSQL for data management. Our responsive design 
                  ensures a seamless experience across all devices.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['React', 'TypeScript', 'Framer Motion', 'PostgreSQL', 'Tailwind CSS', 'Vite'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="gradient-border px-4 py-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 3.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                    >
                      <div className="gradient-border-inner">
                        <span className="text-[var(--primary)] font-['JetBrains_Mono'] font-semibold">
                          {tech}
                        </span>
                      </div>
                    </motion.span>
                  ))}
                </div>
              </GlassMorphism>
            </FloatingCard>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mobile-padding">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
          >
            <FloatingCard delay={3.6} variant="cyber">
              <GlassMorphism className="p-12 rounded-2xl">
                <h2 className="text-3xl font-bold text-neon font-['Orbitron'] mb-6">
                  START YOUR AI JOURNEY TODAY
                </h2>
                <p className="text-lg text-[var(--text-secondary)] font-['Inter'] mb-8">
                  Explore our comprehensive directory of AI tools and discover the perfect solution for your next project.
                </p>
                <motion.button 
                  onClick={() => setLocation('/categories')}
                  className="btn-primary text-lg px-10 py-5 font-['Orbitron'] tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPLORE AI TOOLS
                </motion.button>
              </GlassMorphism>
            </FloatingCard>
          </motion.div>
        </section>

        {/* Developer Details Section */}
        <DeveloperProfile />
      </div>

      <ScrollToTop />
    </div>
  );
};