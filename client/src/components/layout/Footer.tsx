import React from 'react';
import { Link } from 'wouter';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">InnovAI Compass</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              Discover and compare the best AI tools for your needs. Updated daily with the latest AI innovations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  Text Generation
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  Image Creation
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  Code Assistant
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  Website Making
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                <Github size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-[var(--text-secondary)] text-sm">
            © {new Date().getFullYear()} InnovAI Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};