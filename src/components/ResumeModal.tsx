import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  GraduationCap,
  Code,
  FileCheck,
  Mail,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { personalInfo, projects, skillCategories, engineeringFoundations } from '../data/portfolioData';
import { Button } from './ui/Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-elevated shrink-0">
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-accent" />
              <span className="font-semibold text-white text-sm sm:text-base">
                Shrivara Bhat — Engineering Resume
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrint}
                icon={<Printer className="w-3.5 h-3.5" />}
                className="hidden sm:inline-flex"
              >
                Print / PDF
              </Button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-surface transition-colors"
                aria-label="Close resume modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-200">
            {/* Top Identity Block */}
            <div className="border-b border-surface-border pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-mono text-accent mt-0.5">
                    {personalInfo.education.degree} · VJTI Mumbai
                  </p>
                </div>
                <div className="text-xs font-mono text-muted space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-muted" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-muted" />
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-surface-border/60 text-xs font-mono">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> github.com/SOULShri
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> linkedin.com/in/shrivara-bhat-b62369332
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    {personalInfo.education.institution}
                  </h3>
                  <p className="text-xs text-gray-300 mt-0.5">
                    {personalInfo.education.degree}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted shrink-0">
                  {personalInfo.education.period}
                </span>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.category} className="p-3 rounded-lg bg-surface-elevated border border-surface-border">
                    <span className="font-mono text-muted font-medium block mb-1">{cat.category}:</span>
                    <span className="text-gray-200 font-mono">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Selected Projects
              </h2>
              {projects.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {p.title} — <span className="font-normal text-gray-300">{p.subtitle}</span>
                    </h3>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1"
                    >
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-mono text-muted">
                    <span className="text-muted-foreground">Tech: </span>
                    {p.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Foundations */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Engineering Foundation (Coursework)
              </h2>
              <div className="flex flex-wrap gap-2">
                {engineeringFoundations.map((f) => (
                  <span
                    key={f.title}
                    className="px-2.5 py-1 rounded bg-surface-elevated text-xs font-mono text-gray-300 border border-surface-border"
                  >
                    {f.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-surface-border bg-surface-elevated flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-muted">
              Updated for 2026 / 2027 Internship Drives
            </span>
            <Button variant="primary" size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
