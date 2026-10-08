import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { CaseStudy } from '../components/CaseStudy';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CaseStudyPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Support both slug & id match
  const project = projects.find(
    (p) => p.slug === projectId || p.id === projectId
  );

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-3">Case Study Not Found</h1>
        <p className="text-muted text-sm mb-6">
          The requested project documentation could not be located.
        </p>
        <Link to="/#projects">
          <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Return to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return <CaseStudy project={project} />;
};
