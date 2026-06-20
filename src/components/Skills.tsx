import React from 'react';

interface SkillItem {
  name: string;
  category: string;
  level: number;
  logo?: string;
}

const IconFrontend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 7l-2 2 2 2" />
    <path d="M17 7l2 2-2 2" />
  </svg>
);

const IconBackend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="8" y1="11" x2="16" y2="11" />
  </svg>
);

const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 6v6l4 2" />
    <path d="M16 21.66a10 10 0 0 1-4 0" />
    <path d="M21 12a9 9 0 0 0-9-9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const IconTools = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const Skills: React.FC = () => {
  const skills: SkillItem[] = [
    { name: 'Go', category: 'backend', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Python', category: 'backend', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', category: 'backend', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Java', category: 'backend', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', category: 'frontend', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', category: 'frontend', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Machine Learning', category: 'ai', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'NLP', category: 'ai', level: 87, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Computer Vision', category: 'ai', level: 83, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'PostgreSQL', category: 'database', level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', category: 'database', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', category: 'tools', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', category: 'tools', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const getFrameworkLogo = (name: string) => {
    if (name === 'PHP') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg';
    if (name === 'Java') return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg';
    return null;
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'frontend': return 'Frontend Development';
      case 'backend': return 'Backend & Languages';
      case 'ai': return 'AI & Machine Learning';
      case 'database': return 'Database';
      case 'tools': return 'Tools & Technologies';
      default: return category;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend': return <IconFrontend />;
      case 'backend': return <IconBackend />;
      case 'ai': return <IconAI />;
      case 'database': return <IconDatabase />;
      case 'tools': return <IconTools />;
      default: return null;
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getLevelColor = (level: number) => {
    if (level >= 85) return '#0cc4c4';
    if (level >= 80) return '#5cb870';
    if (level >= 70) return '#c8a96e';
    if (level >= 60) return '#c55025';

    return '#50a0c8';
  };

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{ background: 'var(--bg)', transition: 'background-color .3s ease' }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: 'var(--text-secondary)', fontFamily: "'Montserrat', monospace", transition: 'color .3s ease' }}
          >
            My Expertise
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: 'var(--text-primary)',
              fontWeight: 600,
              transition: 'color .3s ease',
            }}
          >
            Technical Skills
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: 'var(--accent)', transition: 'background-color .3s ease' }}
          />
        </div>

        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="rounded-lg overflow-hidden"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                transition: 'background-color .3s ease, border-color .3s ease',
              }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: 'var(--border)', transition: 'border-color .3s ease' }}
              >
                <h3
                  className="text-lg font-semibold flex items-center gap-2"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: 'var(--text-primary)',
                    transition: 'color .3s ease',
                  }}
                >
                  <span style={{ color: 'var(--accent)', transition: 'color .3s ease' }}>
                    {getCategoryIcon(category)}
                  </span>
                  {getCategoryName(category)}
                </h3>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => {
                    const frameworkLogo = getFrameworkLogo(skill.name);
                    const logoToUse = frameworkLogo || skill.logo;
                    const levelColor = getLevelColor(skill.level);

                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {logoToUse && (
                              <img
                                src={logoToUse}
                                alt={skill.name}
                                className="w-6 h-6 object-contain"
                                style={{ filter: 'brightness(0.9)' }}
                              />
                            )}
                            <span
                              className="text-sm font-medium"
                              style={{ color: 'var(--text-primary)', transition: 'color .3s ease' }}
                            >
                              {skill.name}
                            </span>
                            {frameworkLogo && (
                              <span
                                className="text-[9px] px-1.5 py-0.5 rounded-sm"
                                style={{
                                  background: 'var(--accent-soft)',
                                  color: 'var(--accent)',
                                  transition: 'background-color .3s ease, color .3s ease',
                                }}
                              >
                                {skill.name === 'PHP' ? 'Laravel' : 'Spring Boot'}
                              </span>
                            )}
                          </div>
                          <span
                            className="text-xs font-mono"
                            style={{ color: levelColor }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="w-full rounded-full h-1.5"
                          style={{ background: 'var(--border)', transition: 'background-color .3s ease' }}
                        >
                          <div
                            className="rounded-full h-1.5 transition-all duration-500"
                            style={{
                              width: `${skill.level}%`,
                              background: levelColor,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;