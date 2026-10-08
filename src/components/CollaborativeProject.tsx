import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { collaborativeProject } from '../data/portfolioData';

export const CollaborativeProject: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8 hover:border-surface-border/80 transition-all shadow-xl relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-surface-border">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                COLLABORATIVE INITIATIVE
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="text-xs font-mono text-muted">{collaborativeProject.team}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              {collaborativeProject.title}
            </h3>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-gray-300 w-fit">
          <TrendingUp className="w-3.5 h-3.5 text-accent" />
          <span>FinTech & Hackathon Focus</span>
        </div>
      </div>

      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
        {collaborativeProject.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {collaborativeProject.keyHighlights.map((highlight, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-surface-elevated/70 border border-surface-border text-xs text-gray-300 flex items-start gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="leading-snug">{highlight}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
