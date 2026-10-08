import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Layers,
  Sparkles,
  Users2,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { buildJourneyTimeline } from '../data/portfolioData';

export const BuildJourney: React.FC = () => {
  const timelineIcons = [Calendar, Layers, Sparkles, Users2, Briefcase];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PROGRESSION TIMELINE"
          title="Build Journey"
          subtitle="How fundamental CS education, full-stack projects, and applied AI systems developed into a unified engineering skill set."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-10 sm:space-y-12">
            {buildJourneyTimeline.map((item, idx) => {
              const Icon = timelineIcons[idx % timelineIcons.length];
              const isCurrent = idx === buildJourneyTimeline.length - 1;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot / icon */}
                  <div
                    className={`absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                      isCurrent
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-sm'
                        : 'bg-surface border-surface-border text-accent group-hover:border-accent'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl bg-surface border transition-all ${
                      isCurrent
                        ? 'border-emerald-500/30 bg-surface/90 shadow-subtle-glow'
                        : 'border-surface-border hover:border-gray-700'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-accent">
                          STAGE 0{idx + 1}
                        </span>
                        {item.badge && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                              isCurrent
                                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                : 'bg-surface-elevated text-muted border border-surface-border'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {isCurrent && (
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Active Focus</span>
                        </div>
                      )}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
