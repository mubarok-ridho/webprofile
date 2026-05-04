import type { Education, Experience, Portfolio, Skill } from '../types';

export const personalInfo = {
  name: 'MOHAMAD RIDHO MUBAROK',
  title: 'AI & Backend Engineer | Informatics Graduate',
  email: 'dhxo.pyprogram@gmail.com',
  phone: '+62 896-3732-2588',
  location: 'Indonesia',
  github: 'https://github.com/mubarok-ridho',
  linkedin: 'https://www.linkedin.com/in/m-ridho-mubarok-4387a126b',
  bio: 'Informatics graduate with hands-on experience in AI development (ML, NLP, Computer Vision) and backend engineering. Proven ability to build scalable systems and deploy production-ready solutions with solid SDLC understanding.'
};

export const educations: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science (S.Kom)',
    institution: 'Universitas Amikom Purwokerto',
    year: '2021 - 2025',
    description: 'Focus on AI, backend systems, and full-stack development.'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    position: 'Software Developer',
    company: 'PT. Teknologi Nasional Indonesia Siber (TNIS)',
    location: 'Jakarta, Indonesia',
    period: 'May 2026 - Present',
    description: [
      'R&D for AI solutions: Machine Learning, NLP, and Computer Vision',
      'Design, train, and optimize models for real-world applications',
      'Implement AI in security domains (SOC and threat analysis)'
    ]
  },
  {
    id: 2,
    position: 'Fullstack Developer',
    company: 'PT. Javan Cipta Solusi',
    location: 'Yogyakarta, Indonesia',
    period: 'Jan 2026 - Mar 2026',
    description: [
      'Full-stack web development with React TypeScript and Go microservices',
      'PostgreSQL database design and management',
      'Bug fixing and feature enhancements'
    ]
  },
  {
    id: 3,
    position: 'Software Developer Intern',
    company: 'PT. Numerik Talenta Teknologi (Nutanics)',
    location: 'Medan, Indonesia',
    period: 'Jul 2025 - Dec 2025',
    description: [
      'Full-stack web (React Vite) and Flutter mobile development',
      'Scalable backends with Go and Python (Flask)',
      'PostgreSQL database design',
      'Deployed to hosting and Google Play Store'
    ]
  },
  {
    id: 4,
    position: 'AI Development Participant',
    company: 'PT. Artifisial Intelegensia Indonesia (AICI)',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2024 - Dec 2024',
    description: [
      'End-to-end AI development with Python',
      'Models for Computer Vision, NLP, and Machine Learning',
      'Backend development with Python (Flask) and Go'
    ]
  },
  {
    id: 5,
    position: 'Practicum/Lecturer Assistant',
    company: 'Universitas Amikom Purwokerto',
    location: 'Central Java, Indonesia',
    period: 'Sep 2023 - Dec 2025',
    description: [
      'Coordinated practicum assistants activities',
      'Courses: Web, Mobile, OOP, Data Structures, Distributed Systems, ML, Computer Vision',
      'Guided 500+ practicum sessions'
    ]
  }
];

export const portfolios: Portfolio[] = [
  {
    id: 1,
    title: 'AI Security System',
    description: 'AI-based threat detection for SOC applications',
    image: '', // Kosongkan dulu
    techStack: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
    link: 'https://github.com/mubarok-ridho/ai-security'
  },
  {
    id: 2,
    title: 'Microservices Backend',
    description: 'Scalable Go microservices with PostgreSQL',
    image: '',
    techStack: ['Go', 'PostgreSQL', 'Docker', 'REST API'],
    link: 'https://github.com/mubarok-ridho/go-microservices'
  },
  {
    id: 3,
    title: 'Full-stack E-commerce',
    description: 'React TypeScript frontend with Go backend',
    image: '',
    techStack: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Tailwind'],
    link: 'https://github.com/mubarok-ridho/ecommerce-fullstack'
  }
];

export const skills: Skill[] = [
  { name: 'Go', level: 88, category: 'backend' },
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'TypeScript', level: 85, category: 'backend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Flutter', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Machine Learning', level: 85, category: 'ai' },
  { name: 'NLP', level: 82, category: 'ai' },
  { name: 'Computer Vision', level: 80, category: 'ai' },
  { name: 'TensorFlow', level: 78, category: 'ai' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Git', level: 88, category: 'tools' }
];