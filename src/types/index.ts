export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
}

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'database' | 'tools';
}