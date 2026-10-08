import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { WhatIBuild } from '../components/WhatIBuild';
import { ProjectsSection } from '../components/ProjectsSection';
import { CollaborativeProject } from '../components/CollaborativeProject';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { HowIBuild } from '../components/HowIBuild';
import { BuildJourney } from '../components/BuildJourney';
import { Contact } from '../components/Contact';
import { ResumeModal } from '../components/ResumeModal';

export const HomePage: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative">
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <WhatIBuild />
      <ProjectsSection />
      
      {/* Collaborative Project Section within max width container */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CollaborativeProject />
        </div>
      </section>

      <About />
      <Skills />
      <HowIBuild />
      <BuildJourney />
      <Contact />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
};
