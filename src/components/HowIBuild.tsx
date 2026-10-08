import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  FileCode2,
  Cpu,
  CheckCircle,
  ArrowRight,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { howIBuildProcess } from '../data/portfolioData';

export const HowIBuild: React.FC = () => {
  const stepIcons = [Compass, Workflow, FileCode2, CheckCircle];

  return (
    <section id="how-i-build" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING METHODOLOGY"
          title="How I Build"
          subtitle="From problem framing and data contracts to robust implementation and performance tuning — a methodical 4-stage pipeline."
        />

        {/* Linear High-Level Flow Indicator */}
        <div className="hidden lg:block mb-12 p-4 rounded-2xl bg-surface border border-surface-border">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground uppercase">PIPELINE:</span>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="text-accent font-semibold">Understand the problem</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Break into workflows</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Design APIs / data / components</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Implement</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-emerald-400 font-semibold">Debug & refine</span>
            </div>
            <span className="text-emerald-400">READY</span>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIBuildProcess.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-surface border border-surface-border p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-md group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-accent/80">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-surface-elevated text-gray-300 border border-surface-border group-hover:border-accent/40 group-hover:text-accent transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                    {step.phase}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Sub-tasks list */}
                <div className="pt-4 border-t border-surface-border/70 space-y-2">
                  {step.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-2 text-[11px] text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
