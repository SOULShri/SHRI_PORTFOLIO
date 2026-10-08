import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  Check,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categoryIcons = [Code, Layout, Server, Database, Cpu, Wrench];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & Technologies"
          subtitle="A focused toolkit of languages, frameworks, and infrastructure tools utilized across projects, systems programming, and AI workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-surface border border-surface-border p-6 hover:border-accent/40 transition-all duration-300 shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-surface-elevated text-accent border border-surface-border group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {cat.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-surface-border/80">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-gray-200 bg-surface-elevated border border-surface-border hover:border-accent/50 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70" />
                        {skill}
                      </span>
                    ))}
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
