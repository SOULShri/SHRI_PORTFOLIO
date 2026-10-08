import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Terminal, Cpu } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { whatIBuildPillars } from '../data/portfolioData';

export const WhatIBuild: React.FC = () => {
  const pillarIcons = [Layers, Terminal, Cpu];

  return (
    <section id="what-i-build" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ARCHITECTURE PHILOSOPHY"
          title="Software with a reason behind every layer."
          subtitle="Every component, endpoint, and pipeline is engineered with intentional structure — prioritizing maintainability, data integrity, and clear boundaries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {whatIBuildPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx];

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                className="group relative rounded-2xl bg-surface border border-surface-border p-6 md:p-8 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-md hover:shadow-subtle-glow"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-accent/80 tracking-tight">
                      {pillar.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-muted bg-surface-elevated border border-surface-border">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                    <Icon className="w-5 h-5 text-accent shrink-0" />
                    <span>{pillar.title}</span>
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Micro Visual Pipeline */}
                <div className="pt-6 border-t border-surface-border">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">
                    Execution Pipeline
                  </div>
                  <div className="bg-surface-elevated/80 border border-surface-border rounded-xl p-3">
                    <div className="flex items-center justify-between gap-1 text-[11px] font-mono">
                      {pillar.visualNodes.map((node, nodeIdx) => (
                        <React.Fragment key={node}>
                          <div className="px-2 py-1.5 rounded-lg bg-surface border border-surface-border/90 text-gray-200 text-center flex-1 truncate font-medium">
                            {node}
                          </div>
                          {nodeIdx < pillar.visualNodes.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
