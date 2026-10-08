import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectShowcase } from './ProjectShowcase';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title="Engineered systems, real problem spaces."
          subtitle="A showcase of full-stack products, backend architectures, and AI microservices built with strict attention to data flow, decoupling, and production ergonomics."
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, idx) => (
            <ProjectShowcase key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
