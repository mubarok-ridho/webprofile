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
        'Developed and deployed full-stack web (React Typescript) microservices backends using Go.',
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
      location: 'Purwokerto, Central Java',
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
      className="py-20 relative overflow-hidden"
      style={{ background: '#0c0b09' }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            Professional Journey
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#f0ece4',
              fontWeight: 600,
            }}
          >
            Work Experience
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Experience Cards - Grid layout untuk side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              style={{
                background: 'rgba(20, 18, 16, 0.8)',
                border: '1px solid rgba(200, 169, 110, 0.15)',
              }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Header with logo and company info */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-14 h-14 md:w-16 md:h-16 object-contain"
                    />
                  </div>

                  {/* Position and Company */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base md:text-lg font-semibold mb-1 line-clamp-2"
                      style={{
                        fontFamily: "'Poppins', serif",
                        color: '#f0ece4',
                      }}
                    >
                      {exp.position}
                    </h3>
                    <p
                      className="text-xs md:text-sm font-mono tracking-wide truncate"
                      style={{
                        color: '#c8a96e',
                        fontFamily: "'Poppins', monospace",
                      }}
                    >
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p
                        className="text-[10px] md:text-xs font-mono mt-0.5 truncate"
                        style={{
                          color: '#6a6560',
                          fontFamily: "'Poppins', monospace",
                        }}
                      >
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Period badge */}
                <div className="mb-4">
                  <span
                    className="inline-block px-2 py-0.5 rounded-sm text-[9px] md:text-[10px] font-mono tracking-wider"
                    style={{
                      background: 'rgba(200, 169, 110, 0.15)',
                      color: '#c8c0b4',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Description list */}
                <ul className="space-y-2 flex-1">
                  {exp.description.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs md:text-sm leading-relaxed flex items-start gap-2"
                      style={{ color: '#a8a090', lineHeight: 1.5 }}
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: '#c8a96e' }}
                      />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;