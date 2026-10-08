import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Binary,
  Layers,
  Database,
  Cpu,
  Network,
  GitMerge,
  BookOpen,
  MapPin,
  Calendar,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { personalInfo, engineeringFoundations } from '../data/portfolioData';

export const About: React.FC = () => {
  const foundationIcons = [Binary, Layers, Database, Cpu, Network, GitMerge];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BACKGROUND & EDUCATION"
          title="Student. Builder. Constantly learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              I'm pursuing a B.Tech in Information Technology at Veermata Jijabai Technological Institute (VJTI), Mumbai. I enjoy taking an idea, turning it into a working application, and understanding what happens underneath the UI.
            </p>

            <p className="text-base text-muted leading-relaxed">
              My projects span full-stack web development, backend APIs, databases and AI-assisted workflows. I'm interested in software engineering roles where I can build, learn quickly and grow through real engineering problems.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-muted">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border">
                <MapPin className="w-4 h-4 text-accent" />
                <span>VJTI Mumbai Campus</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-surface-border">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Batch of 2023 – Present</span>
              </div>
            </div>
          </motion.div>

          {/* Education Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-surface border border-surface-border p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent">
                    CURRENT DEGREE
                  </span>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-sm text-gray-300 mt-1">
                    {personalInfo.education.institution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-muted">
                <span>Duration: {personalInfo.education.period}</span>
                <span className="text-emerald-400 font-medium">In Good Standing</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Engineering Foundation Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-accent uppercase tracking-wider mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>CORE CURRICULUM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Engineering Foundation
              </h3>
            </div>
            <span className="text-xs font-mono text-muted hidden sm:inline-block">
              VJTI IT Academic Core
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {engineeringFoundations.map((foundation, idx) => {
              const Icon = foundationIcons[idx % foundationIcons.length];

              return (
                <motion.div
                  key={foundation.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-xl bg-surface border border-surface-border p-5 hover:border-accent/40 transition-all duration-200 hover:shadow-subtle-glow group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-surface-elevated text-accent border border-surface-border group-hover:border-accent/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{foundation.code}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-accent transition-colors">
                    {foundation.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed font-mono">
                    {foundation.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
