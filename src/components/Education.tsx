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
      year: '2021 - 2025',
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
      className="py-20 relative overflow-hidden"
      style={{ background: '#0c0b09' }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Education Section Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            My Academic Background
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Poppins', serif",
              color: '#f0ece4',
              fontWeight: 600,
            }}
          >
            Education
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Education Card - GPA on the right side */}
        <div className="mb-16">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="rounded-lg overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(20, 18, 16, 0.8)',
                border: '1px solid rgba(200, 169, 110, 0.15)',
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  {/* Left side - Logo and details */}
                  <div className="flex items-center gap-5 flex-1">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3
                        className="text-xl font-semibold mb-1"
                        style={{
                          fontFamily: "'Montserrat', serif",
                          color: '#f0ece4',
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-sm font-mono tracking-wide mb-2"
                        style={{
                          color: '#c8a96e',
                          fontFamily: "'Poppins', monospace",
                        }}
                      >
                        {edu.institution}
                      </p>
                      <span
                        className="px-2 py-0.5 rounded-sm text-[10px] font-mono tracking-wider"
                        style={{
                          background: 'rgba(200, 169, 110, 0.15)',
                          color: '#c8c0b4',
                          fontFamily: "'Poppins', monospace",
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Right side - GPA */}
                  {edu.gpa && (
                    <div className="text-right">
                      <p
                        className="text-[9px] font-mono tracking-wider mb-1"
                        style={{ color: '#6a6560' }}
                      >
                        GPA
                      </p>
                      <p
                        className="text-3xl font-bold"
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          color: '#c8a96e',
                          lineHeight: 1,
                          fontSize: '2.25rem',
                        }}
                      >
                        {edu.gpa}
                      </p>
                    </div>
                  )}
                </div>

                {edu.description && (
                  <p
                    className="text-sm leading-relaxed mt-4"
                    style={{ color: '#a8a090', lineHeight: 1.6 }}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Research & Study Section */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            My Contributions
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Poppins, serif",
              color: '#f0ece4',
              fontWeight: 600,
            }}
          >
            Research & Study
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{
              background: '#c8a96e',
              fontFamily: "'Poppins', serif",
            }}
          />
        </div>

        {/* Research Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchStudies.map((research) => (
            <div
              key={research.id}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(20, 18, 16, 0.8)',
                border: '1px solid rgba(200, 169, 110, 0.15)',
              }}
            >
              <div className="p-6">
                {/* Logos - No frame, larger size */}
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  {research.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="h-12 w-auto object-contain"
                      style={{ maxWidth: '100px' }}
                    />
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-semibold mb-2 leading-relaxed"
                  style={{
                    fontFamily: "'Poppins', serif",
                    color: '#f0ece4',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                  }}
                >
                  {research.title}
                </h3>

                {/* Funder & Year */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <p
                    className="text-[11px] font-mono tracking-wide"
                    style={{ color: '#c8a96e', fontFamily: "'Poppins', monospace" }}
                  >
                    {research.funder}
                  </p>
                  <span
                    className="px-2 py-0.5 rounded-sm text-[9px] font-mono"
                    style={{
                      background: 'rgba(200, 169, 110, 0.1)',
                      color: '#8a8580',
                      fontFamily: "'Poppins', monospace",
                    }}
                  >
                    {research.year}
                  </span>
                </div>

                {/* Descriptions */}
                <ul className="space-y-2">
                  {research.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-xs leading-relaxed flex items-start gap-2"
                      style={{ color: '#a8a090', lineHeight: 1.5, fontFamily: "'Poppins', monospace" }}
                    >
                      <span
                        className="inline-block w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          background: '#c8a96e',
                          fontFamily: "'Poppins', monospace",
                        }}
                      />
                      <span>{desc}</span>
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