import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-border bg-surface/50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & VJTI Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono font-bold text-sm text-accent">SB.</span>
              <span className="text-sm font-semibold text-white">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-muted font-mono">
              Information Technology · Veermata Jijabai Technological Institute (VJTI)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-white hover:border-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-accent hover:border-accent/50 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-white hover:border-gray-600 transition-colors flex items-center gap-1.5 text-xs font-mono"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </div>
          <div>
            Mumbai, India · 2023 – Present
          </div>
        </div>
      </div>
    </footer>
  );
};
