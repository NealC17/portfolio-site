export type ProjectCategory =
  | "Early & Foundational"
  | "Machine Learning"
  | "Embedded & Hardware"
  | "Compilers & Math"
  | "Research";

export interface Project {
  type: "project";
  slug: string;
  title: string;
  dateLabel: string;
  year: number;
  category: ProjectCategory;
  stack: string;
  skills: string[];
  url?: string;
  overview: string;
  whatIBuilt: string;
  architecture?: string;
  technologies: string[];
  technicalChallenges?: string;
  results?: string;
  relevantMath?: string;
  lessonsLearned?: string;
}

export interface Experience {
  type: "experience";
  slug: string;
  role: string;
  company: string;
  dateLabel: string;
  year: number;
  location: string;
  skills: string[];
  overview: string;
  whatIWorkedOn: string;
  technologies: string[];
  results?: string;
  lessonsLearned?: string;
}

export type TimelineItem = Project | Experience;
