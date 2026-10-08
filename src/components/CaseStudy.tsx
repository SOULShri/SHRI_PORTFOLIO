import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Layers,
  AlertCircle,
  CheckCircle2,
  Cpu,
  FileCode2,
  Workflow,
  Sparkles,
  BookOpen,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './ui/Icons';
import { Project } from '../data/types';
import { projects } from '../data/portfolioData';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface CaseStudyProps {
  project: Project;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project }) => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  // Find next project for smooth linear progression
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-background text-gray-100 pt-24 pb-20 selection:bg-accent/30 selection:text-white">
      {/* Background glow and subtle grid */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-accent/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors p-2 -ml-2 rounded-lg hover:bg-surface"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-b border-surface-border pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-semibold text-accent tracking-widest uppercase">
              CASE STUDY
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="font-mono text-xs text-muted">{project.subtitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Quick Meta Stats & Repo Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-surface-border/80">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-surface text-xs font-mono text-gray-300 border border-surface-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <Button
              variant="secondary"
              size="sm"
              href={project.githubUrl}
              isExternal
              icon={<GithubIcon className="w-4 h-4" />}
            >
              View Repository
            </Button>
          </div>
        </header>

        {/* MAIN BODY SECTIONS */}
        <div className="space-y-16">
          {/* 1. Overview */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <FileCode2 className="w-4 h-4" />
              <span>Project Overview</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              Context & Objective
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </section>

          {/* 2. Problem Statement */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              Operational Challenges & Inefficiencies
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </section>

          {/* 3. What I Built */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Scope of Work</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
              What I Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.caseStudy.whatIBuilt.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Architecture Diagram & Description */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4" />
              <span>System Design</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
              Architecture & Data Flow
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {project.caseStudy.architectureExplanation}
            </p>

            {/* Visual Flow Schematic */}
            <div className="rounded-xl bg-surface-subtle border border-surface-border p-5 space-y-4">
              <div className="text-xs font-mono text-muted uppercase">Execution Layer Flow</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureNodes.primary.map((node, nIdx) => (
                  <div
                    key={node.label}
                    className="p-4 rounded-lg bg-surface border border-surface-border hover:border-accent/40 transition-colors"
                  >
                    <div className="text-[11px] font-mono text-accent mb-1">LAYER 0{nIdx + 1}</div>
                    <div className="font-semibold text-white text-sm">{node.label}</div>
                    <div className="text-xs font-mono text-muted mt-1">{node.desc}</div>
                  </div>
                ))}
              </div>

              {project.architectureNodes.branch && (
                <div className="pt-3 border-t border-surface-border">
                  <div className="text-xs font-mono text-sky-400 uppercase mb-2">
                    Auxiliary / Subsystem Pipeline
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.architectureNodes.branch.map((bNode) => (
                      <div
                        key={bNode.label}
                        className="p-3.5 rounded-lg bg-surface border border-sky-500/20 text-xs"
                      >
                        <div className="font-semibold text-sky-200">{bNode.label}</div>
                        <div className="font-mono text-muted text-[11px] mt-0.5">{bNode.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 5. Implementation Deep Dive (HOW technologies were actually used) */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4" />
              <span>Engineering Implementation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              How Technologies Were Actually Used
            </h2>
            <p className="text-xs font-mono text-muted mb-6">
              Concrete architectural decisions, middleware pipelines, and data handling in the codebase.
            </p>

            <div className="space-y-6">
              {project.caseStudy.implementation.map((block, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-elevated border border-surface-border space-y-3"
                >
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{block.title}</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {block.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-accent font-mono text-xs mt-1">▸</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Step-by-Step Workflow */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <Workflow className="w-4 h-4" />
              <span>Lifecycle & Workflows</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
              End-to-End Workflow
            </h2>

            <div className="space-y-3">
              {project.caseStudy.workflowSteps.map((wf) => (
                <div
                  key={wf.step}
                  className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold shrink-0">
                      {wf.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{wf.title}</h3>
                      <p className="text-xs text-muted mt-0.5">{wf.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Technology Stack Breakdown */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider mb-3">
              <FileCode2 className="w-4 h-4" />
              <span>Tech Stack Specification</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
              Technology Justifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.caseStudy.techStackExplanation.map((item) => (
                <div
                  key={item.tech}
                  className="p-4 rounded-xl bg-surface-elevated border border-surface-border"
                >
                  <div className="font-mono text-sm font-bold text-accent mb-1">{item.tech}</div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.usage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. What I Learned */}
          <section className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Reflections</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
              What I Learned
            </h2>

            <div className="space-y-3">
              {project.caseStudy.whatILearned.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-200 leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA / Next Case Study */}
          <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <Button
              variant="primary"
              size="md"
              href={project.githubUrl}
              isExternal
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Inspect Source on GitHub
            </Button>

            <Link
              to={nextProject.caseStudyUrl}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors group"
            >
              <span>Next Case Study: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
