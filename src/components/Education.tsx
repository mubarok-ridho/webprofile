import React from 'react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
  gpa?: string;
  logo?: string;
}

interface ResearchItem {
  id: number;
  title: string;
  funder: string;
  year: string;
  descriptions: string[];
  logos: string[];
}

const Education: React.FC = () => {
  const educations: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Informatics - Cumlaude',
      institution: 'Universitas Amikom Purwokerto',
      year: '2021 - 2026',
      gpa: '3.80/4.00',
      description: 'Focus on AI development, Machine Learning, and Backend Engineering.',
      logo: 'https://sistem.lldikti6.id/data/logo/061054.jpg',
    },
  ];

  const researchStudies: ResearchItem[] = [
    {
      id: 1,
      title: 'Adaptive Examination Model Based on Salmon Salar Optimization and Reinforcement Learning',
      funder: 'Research and Community Service (BIMA) - Ministry of Higher Education',
      year: '2025',
      descriptions: [
        'Built and experimented with Diagnostic Cognitive Models (EduCDM), including CDM and LTM approaches',
        'Processed and engineered educational datasets (ASSISTments), including feature selection and Q/R matrix construction',
        'Conducted model training, evaluation, and comparison using AUC and loss metrics',
        'Applied Reinforcement Learning with a POMDP framework to optimize adaptive question sequencing',
      ],
      logos: [
        'https://www.unsulbarnews.com/wp-content/uploads/2025/05/image-43.png',
        'https://www.polsri.ac.id/files/2025/09/Primary_Horizontal-Logo.png',
      ],
    },
    {
      id: 2,
      title: 'Application of IoT in Water Distribution Through ESP-32-Based Pipes Using LoRa as a Means of Data Communication',
      funder: 'Fundamental Research - Ministry of Education, Culture, Research & Technology',
      year: '2025',
      descriptions: [
        'Built an IoT system using ESP32, Arduino, and Wemos for water flow monitoring and valve control',
        'Implemented LoRa-based communication and data handling across distributed nodes',
        'Conducted system testing, validation, and technical documentation for experimental setups',
      ],
      logos: ['https://www.polsri.ac.id/files/2025/09/Primary_Horizontal-Logo.png'],
    },
    {
      id: 3,
      title: 'Framework for Learning Style Detection Based on Felder-Silverman and Deep Neural Networks in E-Learning',
      funder: 'Fundamental Research - Ministry of Education, Culture, Research & Technology',
      year: '2024',
      descriptions: [
        'Developed machine learning models using KNN, Random Forest, SVM, ANN, and Linear Regression',
        'Processed and preprocessed educational datasets (OULAD) from e-learning systems',
        'Performed model training, tuning, and performance evaluation',
      ],
      logos: ['https://www.um-surabaya.ac.id/uploads/home/education/mbkm/foto_akreditasi-admin-QTwgrG.webp'],
    },
    {
      id: 4,
      title: 'Preparing Artificial Intelligence Talent for Indonesian Future',
      funder: 'Artificial Intelligence Bootcamp Independent Study Program at Artificial Intelligence Center Indonesia',
      year: '2024',
      descriptions: [
        'Developing AI models across Computer Vision, NLP, and Machine Learning',
        'Building and managing PostgreSQL databases for AI-driven applications',
        'Backend development using Python (Flask) for AI pipelines and Go for scalable system integration',
      ],
      logos: [
        'https://hi.ub.ac.id/wp-content/uploads/2024/10/mbkm-137.png',
        'https://aici-umg.com/wp-content/uploads/2024/03/artificial-intelligence-center-indonesia.webp',
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{ background: 'var(--bg)', transition: 'background-color .3s ease' }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Education Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-3"
            style={{ color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace", transition: 'color .3s ease' }}
          >
            My Academic Background
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: 'var(--text-primary)',
              fontWeight: 400,
              transition: 'color .3s ease',
            }}
          >
            Education
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: 'var(--accent)', transition: 'background-color .3s ease' }}
          />
        </div>

        {/* Education Card - Layout lebih rapi untuk mobile */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                transition: 'background-color .3s ease, border-color .3s ease, transform .3s ease',
              }}
            >
              <div className="p-5 sm:p-6 md:p-7">
                {/* Baris 1: Logo + Degree */}
                <div className="flex items-center gap-4 sm:gap-5 mb-4">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-lg flex-shrink-0"
                    style={{ background: 'transparent' }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base sm:text-lg md:text-xl font-semibold mb-1"
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        transition: 'color .3s ease',
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-mono tracking-wide"
                      style={{
                        color: 'var(--accent)',
                        fontFamily: "'DM Mono', monospace",
                        transition: 'color .3s ease',
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Baris 2: Year + GPA */}
                <div className="flex flex-row items-center justify-between gap-3 mb-4">
                  <span
                    className="inline-block px-2 py-1 rounded text-[9px] sm:text-[10px] font-mono tracking-wider"
                    style={{
                      background: 'var(--accent-soft)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      transition: 'background-color .3s ease, color .3s ease, border-color .3s ease',
                    }}
                  >
                    {edu.year}
                  </span>

                  {edu.gpa && (
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[8px] sm:text-[9px] font-mono tracking-wider"
                        style={{ color: 'var(--text-tertiary)', transition: 'color .3s ease' }}
                      >
                        GPA
                      </span>
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold"
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          color: 'var(--accent)',
                          lineHeight: 1,
                          transition: 'color .3s ease',
                        }}
                      >
                        {edu.gpa}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className="h-px w-full my-3"
                  style={{ background: 'var(--border)', transition: 'background-color .3s ease' }}
                />

                {edu.description && (
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)', lineHeight: 1.6, transition: 'color .3s ease' }}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Research & Study Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <p
            className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-3"
            style={{ color: 'var(--text-secondary)', fontFamily: "'DM Mono', monospace", transition: 'color .3s ease' }}
          >
            My Contributions
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: 'var(--text-primary)',
              fontWeight: 400,
              transition: 'color .3s ease',
            }}
          >
            Research & Study
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: 'var(--accent)', transition: 'background-color .3s ease' }}
          />
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
          {researchStudies.map((research) => (
            <div
              key={research.id}
              className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                transition: 'background-color .3s ease, border-color .3s ease, transform .3s ease',
              }}
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-wrap">
                  {research.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                      style={{ 
                        background: 'transparent',
                        maxWidth: '80px',
                      }}
                    />
                  ))}
                </div>

                <h3
                  className="text-sm sm:text-base md:text-lg font-semibold mb-2 leading-relaxed"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    transition: 'color .3s ease',
                  }}
                >
                  {research.title}
                </h3>

                <div
                  className="w-8 h-px mb-3 transition-all duration-300 group-hover:w-12"
                  style={{ background: 'var(--accent)', opacity: 0.4 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <p
                    className="text-[10px] sm:text-[11px] md:text-xs font-mono tracking-wide"
                    style={{ color: 'var(--accent)', fontFamily: "'DM Mono', monospace", transition: 'color .3s ease' }}
                  >
                    {research.funder.length > 60 ? `${research.funder.substring(0, 60)}...` : research.funder}
                  </p>
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono self-start sm:self-auto"
                    style={{
                      background: 'var(--accent-soft)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                      transition: 'background-color .3s ease, color .3s ease, border-color .3s ease',
                    }}
                  >
                    {research.year}
                  </span>
                </div>

                <ul className="space-y-2 sm:space-y-2.5">
                  {research.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-[10px] sm:text-xs leading-relaxed flex items-start gap-2"
                      style={{ color: 'var(--text-secondary)', lineHeight: 1.6, transition: 'color .3s ease' }}
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: 'var(--accent)', transition: 'background-color .3s ease' }}
                      />
                      <span className="flex-1">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;