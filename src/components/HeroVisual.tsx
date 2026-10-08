import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Network,
  Server,
  Database,
  Cpu,
  Search,
  Sparkles,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Radio,
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const mainPipeline = [
    {
      id: 'frontend',
      label: 'Frontend',
      sub: 'React / Next.js',
      icon: Layout,
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      description: 'Responsive UI, state management, client-side routing',
    },
    {
      id: 'api',
      label: 'API Gateway',
      sub: 'REST Endpoints',
      icon: Network,
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      description: 'HTTP validation, rate limiting, JWT authentication',
    },
    {
      id: 'backend',
      label: 'Backend Service',
      sub: 'Node.js / Express / FastAPI',
      icon: Server,
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
      description: 'Domain logic, transaction boundaries, service orchestration',
    },
    {
      id: 'database',
      label: 'Database Layer',
      sub: 'PostgreSQL / Prisma',
      icon: Database,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      description: 'ACID transactions, relational schemas, indexing',
    },
  ];

  const aiPipeline = [
    {
      id: 'ai-service',
      label: 'AI Service',
      sub: 'Python / FastAPI',
      icon: Cpu,
      color: 'border-sky-500/40 text-sky-400 bg-sky-500/10',
      description: 'Async processing, LangChain prompt pipelines',
    },
    {
      id: 'retrieval',
      label: 'Retrieval Engine',
      sub: 'ChromaDB / RAG',
      icon: Search,
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      description: 'Vector similarity search & context indexing',
    },
    {
      id: 'ai-response',
      label: 'AI Response',
      sub: 'Synthesized Insights',
      icon: Sparkles,
      color: 'border-blue-400/50 text-blue-300 bg-blue-400/10',
      description: 'Skill-gap reports, context-aware analysis',
    },
  ];

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-accent/20 via-blue-500/10 to-indigo-500/20 rounded-2xl blur-xl opacity-75" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-surface border border-surface-border p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-muted font-medium">system-runtime.arch</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYNCHRONIZED
            </span>
          </div>
        </div>

        {/* Technical Architecture Graph */}
        <div className="space-y-4">
          {/* PRIMARY FLOW */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
              <span>Primary Application Pipeline</span>
              <span className="text-accent">Full-Stack Flow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 relative">
              {mainPipeline.map((node, index) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;

                return (
                  <div key={node.id} className="relative group">
                    <motion.div
                      whileHover={{ y: -2 }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`relative p-3 rounded-xl border transition-all duration-200 cursor-default bg-surface-elevated/70 ${
                        isHovered ? 'border-accent shadow-subtle-glow bg-surface-hover' : 'border-surface-border hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`p-1.5 rounded-lg border ${node.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white truncate">{node.label}</span>
                      </div>
                      <p className="text-[11px] font-mono text-muted truncate">{node.sub}</p>
                    </motion.div>

                    {/* Connecting arrows between items */}
                    {index < mainPipeline.length - 1 && (
                      <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                        <ArrowRight className="w-3 h-3 text-accent/60" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI BRANCH CONNECTOR */}
          <div className="relative py-2">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-surface-border" />
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-elevated border border-accent/30 text-[10px] font-mono text-accent">
                <GitBranch className="w-3 h-3" />
                <span>Backend Async AI Branch</span>
              </div>
              <div className="h-px flex-1 bg-surface-border" />
            </div>
          </div>

          {/* AI BRANCH FLOW */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-wider mb-1">
              <span>Retrieval & Analysis Pipeline</span>
              <span className="text-sky-400">RAG Workflow</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {aiPipeline.map((node, index) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;

                return (
                  <div key={node.id} className="relative group">
                    <motion.div
                      whileHover={{ y: -2 }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`relative p-3 rounded-xl border transition-all duration-200 cursor-default bg-surface-elevated/70 ${
                        isHovered ? 'border-sky-400 shadow-subtle-glow bg-surface-hover' : 'border-surface-border hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className={`p-1.5 rounded-lg border ${node.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-white truncate">{node.label}</span>
                      </div>
                      <p className="text-[11px] font-mono text-muted truncate">{node.sub}</p>
                    </motion.div>

                    {/* Connecting arrows between items */}
                    {index < aiPipeline.length - 1 && (
                      <div className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                        <ArrowRight className="w-3 h-3 text-sky-400/60" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Node Detail or Default Footer */}
        <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-muted truncate">
            <Radio className="w-3.5 h-3.5 text-accent animate-pulse shrink-0" />
            <span className="truncate">
              {activeNode
                ? [...mainPipeline, ...aiPipeline].find((n) => n.id === activeNode)?.description
                : 'Hover any node to inspect layer responsibility'}
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline-block shrink-0">
            SOLID · MODULAR
          </span>
        </div>
      </div>
    </div>
  );
};
