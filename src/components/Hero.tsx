import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Code2, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { personalInfo } from '../data/portfolioData';
import { Button } from './ui/Button';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden">
      {/* Background radial glow & fine grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-glow rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-accent bg-accent/10 border border-accent/20 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{personalInfo.eyebrow}</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-gray-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted" /> Mumbai, India
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-6">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-accent to-blue-200">full-stack applications</span> &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">AI-powered systems</span>.
            </h1>

            {/* Supporting Text */}
            <div className="space-y-3 mb-8 max-w-2xl">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                {personalInfo.bio1}
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {personalInfo.bio2}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                onClick={handleScrollToProjects}
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={personalInfo.github}
                isExternal
                icon={<GithubIcon className="w-4 h-4 text-gray-300" />}
              >
                GitHub
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={personalInfo.linkedin}
                isExternal
                icon={<LinkedinIcon className="w-4 h-4 text-blue-400" />}
              >
                LinkedIn
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onOpenResume}
                icon={<FileText className="w-4 h-4 text-accent" />}
              >
                View Resume
              </Button>
            </div>

            {/* Status Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-surface-border/80 max-w-xl">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-surface-border">
                <div className="p-2 rounded-lg bg-blue-500/10 text-accent border border-accent/20 shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    CURRENTLY
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-200 mt-0.5">
                    {personalInfo.currently}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-surface/60 border border-surface-border">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    OPEN TO
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-emerald-300 mt-0.5">
                    {personalInfo.openTo}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Technical Visual (moves below on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
