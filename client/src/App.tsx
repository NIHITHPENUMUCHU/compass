import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ToolDetailsPage } from './pages/ToolDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { PageLoader } from './components/ui/LoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PageLoader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Layout>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/categories" component={CategoryPage} />
                <Route path="/tool/:id" component={ToolDetailsPage} />
                <Route path="/about" component={AboutPage} />
              </Switch>
              <ScrollToTop />
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;