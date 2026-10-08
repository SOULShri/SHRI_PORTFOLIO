import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Server,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './ui/Icons';
import { Project } from '../data/types';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative rounded-3xl bg-surface border border-surface-border p-6 sm:p-8 lg:p-10 hover:border-surface-border/80 transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-[140px] pointer-events-none" />

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isEven ? '' : 'lg:grid-flow-dense'
        }`}
      >
        {/* TEXT CONTENT */}
        <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-7'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-semibold text-accent tracking-widest uppercase">
              PROJECT 0{index + 1}
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="text-xs font-mono text-muted">{project.subtitle}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Roles / Workflows Metadata */}
          {project.roles && project.roles.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-2">
                User Personas & Roles:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.roles.map((role) => (
                  <Badge key={role} variant="default" size="sm">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.workflows && project.workflows.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-2">
                Core Workflows:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.workflows.map((wf) => (
                  <Badge key={wf} variant="outline" size="sm">
                    {wf}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* AI Features if present */}
          {project.aiFeatures && project.aiFeatures.length > 0 && (
            <div className="mb-6 p-3 rounded-xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-1.5 text-xs font-mono text-accent font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Pipeline Features:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-blue-200">
                {project.aiFeatures.map((feat) => (
                  <span key={feat} className="flex items-center gap-1 bg-accent/10 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-2">
              Technologies Used:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-surface-elevated text-xs font-mono text-gray-300 border border-surface-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link to={project.caseStudyUrl}>
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Read Deep Dive Case Study
              </Button>
            </Link>

            <Button
              variant="secondary"
              size="md"
              href={project.githubUrl}
              isExternal
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GitHub Repository
            </Button>
          </div>
        </div>

        {/* VISUAL ARCHITECTURE SHOWCASE */}
        <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-1'}`}>
          <div className="rounded-2xl bg-surface-subtle border border-surface-border p-5 sm:p-6 shadow-inner relative overflow-hidden group/visual">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-border text-xs font-mono">
              <div className="flex items-center gap-2 text-muted">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>ARCHITECTURE PREVIEW</span>
              </div>
              <span className="text-muted-foreground">{project.id}.manifest</span>
            </div>

            {/* Primary Pipeline Diagram */}
            <div className="space-y-3 mb-4">
              <div className="text-[11px] font-mono text-muted uppercase">Primary Application Flow</div>
              <div className="flex flex-col gap-2">
                {project.architectureNodes.primary.map((node, nIdx) => (
                  <div key={node.label} className="relative">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-surface-border/90 hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-mono font-bold">
                          {nIdx + 1}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{node.label}</div>
                          <div className="text-[11px] font-mono text-muted">{node.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-gray-400 border border-surface-border hidden sm:inline-block">
                        Active Layer
                      </span>
                    </div>

                    {nIdx < project.architectureNodes.primary.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="w-0.5 h-3 bg-surface-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Pipeline if present */}
            {project.architectureNodes.branch && project.architectureNodes.branch.length > 0 && (
              <div className="mt-4 pt-3 border-t border-surface-border">
                <div className="flex items-center gap-2 text-[11px] font-mono text-sky-400 uppercase mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Subsystem / Orchestration Flow</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureNodes.branch.map((bNode) => (
                    <div
                      key={bNode.label}
                      className="p-2.5 rounded-lg bg-surface border border-sky-500/20 text-xs"
                    >
                      <div className="font-medium text-sky-200">{bNode.label}</div>
                      <div className="text-[10px] font-mono text-muted mt-0.5">{bNode.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom note */}
            <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-muted">
              <span>Verified System Implementation</span>
              <Link
                to={project.caseStudyUrl}
                className="text-accent hover:underline flex items-center gap-1 font-medium"
              >
                Inspect Full Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
