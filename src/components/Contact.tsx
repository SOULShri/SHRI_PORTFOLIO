import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-surface border border-surface-border p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-glow rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-accent uppercase mb-4 bg-accent/10 border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                GET IN TOUCH
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Let's build something useful.
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl font-normal">
                Looking for internships and opportunities to work on real software problems with a strong engineering team.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                <Button
                  variant="primary"
                  size="md"
                  href={`mailto:${personalInfo.email}`}
                  isExternal
                  icon={<Mail className="w-4 h-4" />}
                >
                  Email Me Directly
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
                  variant="secondary"
                  size="md"
                  href={personalInfo.github}
                  isExternal
                  icon={<GithubIcon className="w-4 h-4 text-gray-300" />}
                >
                  GitHub
                </Button>
              </div>

              {/* Copy Email Box */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-elevated border border-surface-border w-fit max-w-full">
                <Mail className="w-4 h-4 text-muted shrink-0 ml-1.5" />
                <span className="text-xs sm:text-sm font-mono text-gray-200 select-all truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-surface hover:bg-surface-border text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono shrink-0 ml-2 border border-surface-border"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Card / Meta Info */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-surface-elevated/80 border border-surface-border p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted">
                    AVAILABILITY STATUS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN FOR ROLES
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white">Location</div>
                      <div className="text-xs text-muted">Mumbai, India (Open to In-Office, Hybrid & Remote)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-white">Timezone & Response</div>
                      <div className="text-xs text-muted">IST (UTC +5:30) · Fast email turnaround</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border">
                  <div className="text-xs text-muted leading-relaxed">
                    Have an internship opportunity, project feedback, or want to discuss full-stack & AI architecture? Feel free to reach out.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
