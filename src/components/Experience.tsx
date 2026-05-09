import React from 'react';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: 'Software Developer | Research and Development',
      company: 'PT Teknologi Nasional Indonesia Siber (TNIS)',
      location: 'East Jakarta, DKI Jakarta (On-Site)',
      period: 'May 2026 - Present',
      description: [
        'Conduct research and development of AI-based solutions, focusing on Machine Learning, Natural Language Processing (NLP), and Computer Vision.',
        'Design, train, and optimize models to solve real-world problems and improve system performance.',
        'Implement AI technologies in security domains, including applications related to Security Operations (SOC) and threat analysis.',
      ],
      logo: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/c539a165223044e127da7faccc03feff.png',
    },
    {
      id: 2,
      position: 'Fullstack Developer',
      company: 'PT Javan Cipta Solusi',
      location: 'Sleman, Yogyakarta (On-Site)',
      period: 'Jan 2026 - Mar 2026',
      description: [
        'Developed and deployed full-stack web (React TypeScript) microservices backends using Go.',
        'Designed and managed PostgreSQL databases for production-ready applications.',
        'Resolving minor bugs, and enhance the selected features.',
      ],
      logo: 'https://citcom.id/storage/member/logo-only-blue.png',
    },
    {
      id: 3,
      position: 'Software Developer',
      company: 'PT Numerik Talenta Teknologi (Nutanics)',
      location: 'Medan, North Sumatera (Remote)',
      period: 'Jul 2025 - Dec 2025',
      description: [
        'Developed and deployed full-stack web (React Vite) and flutter mobile applications with scalable backends using Go and Python (Flask).',
        'Designed and managed PostgreSQL databases for production-ready applications.',
        'Deployed web applications to hosting environments and published mobile apps to the Google Play Store.',
      ],
      logo: 'https://res.cloudinary.com/doafwrddd/image/upload/v1766039070/Nutanicsss_tdslfm.png',
    },
    {
      id: 4,
      position: 'Research Assistant',
      company: 'Universitas Amikom Purwokerto',
      location: 'Purwokerto, Central Java (On-Site)',
      period: 'Sep 2023 – Dec 2025',
      description: [
        'Handling courses in the field of programming, such as web programming, mobile programming, object oriented programming, data structure and algorithm, distributed systems, database systems, machine learning, and computer vision.',
        'Guiding students in course practicum sessions, with a total of 500+ meetings.',
      ],
      logo: 'https://sistem.lldikti6.id/data/logo/061054.jpg',
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{ background: '#0c0b09' }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Warm radial glow */}
      <div
        style={{
          position: 'absolute',
          right: '-20%',
          top: '20%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,140,60,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-3"
            style={{ color: '#8a8580', fontFamily: "'DM Mono', monospace" }}
          >
            Professional Journey
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: '#f0ece4',
              fontWeight: 400,
            }}
          >
            Work Experience
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Experience Cards - PC: 1 kolom, Mobile: 1 kolom dengan spacing rapi */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full"
              style={{
                background: 'rgba(20, 18, 16, 0.85)',
                border: '1px solid rgba(200, 169, 110, 0.15)',
                backdropFilter: 'blur(0px)',
              }}
            >
              <div className="p-5 md:p-7 lg:p-8">
                {/* Header: Logo + Company Info - Responsive layout */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 md:gap-6 mb-5 md:mb-6">
                  {/* Company Logo - Tetap PNG */}
                  <div className="flex-shrink-0 self-start">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-lg"
                      style={{ background: 'transparent' }}
                    />
                  </div>

                  {/* Position and Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg md:text-xl lg:text-2xl font-semibold mb-2"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        color: '#f0ece4',
                        fontWeight: 500,
                      }}
                    >
                      {exp.position}
                    </h3>
                    <p
                      className="text-sm md:text-base lg:text-lg font-medium mb-1"
                      style={{
                        color: '#c8a96e',
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: '0.02em',
                      }}
                    >
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p
                        className="text-xs md:text-sm mb-2"
                        style={{
                          color: '#6a6560',
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {exp.location}
                      </p>
                    )}
                    
                    {/* Period badge */}
                    <div className="mt-2">
                      <span
                        className="inline-block px-3 py-1.5 rounded-md text-[10px] md:text-xs lg:text-sm font-mono tracking-wider"
                        style={{
                          background: 'rgba(200, 169, 110, 0.12)',
                          color: '#c8c0b4',
                          border: '1px solid rgba(200, 169, 110, 0.25)',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                <div className="mt-4 md:mt-5">
                  <ul className="space-y-2.5 md:space-y-3">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs md:text-sm lg:text-base leading-relaxed flex items-start gap-3"
                        style={{ color: '#a8a090', lineHeight: 1.6 }}
                      >
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: '#c8a96e' }}
                        />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Smooth transitions */
        .group {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Logo image tetap PNG - no filters */
        img {
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  );
};

export default Experience;