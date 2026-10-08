export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  roles?: string[];
  workflows?: string[];
  aiFeatures?: string[];
  githubUrl: string;
  caseStudyUrl: string;
  architectureNodes: {
    primary: { label: string; desc: string; icon?: string }[];
    branch?: { label: string; desc: string; icon?: string }[];
  };
  caseStudy: {
    overview: string;
    problem: string;
    whatIBuilt: string[];
    architectureExplanation: string;
    implementation: {
      title: string;
      details: string[];
    }[];
    workflowSteps: {
      step: string;
      title: string;
      description: string;
    }[];
    techStackExplanation: {
      tech: string;
      usage: string;
    }[];
    whatILearned: string[];
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface BuildJourneyItem {
  period?: string;
  title: string;
  description: string;
  badge?: string;
}

export interface BuildProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  tasks: string[];
}
