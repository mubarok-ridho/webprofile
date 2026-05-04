import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  logo: string | string[];
  previewImage: string;
  link?: string;
  links?: { name: string; url: string }[];
  status: 'deployed' | 'development' | 'completed' | 'research';
  statusText: string;
}

const Portfolio: React.FC = () => {
  const [showLinkOptions, setShowLinkOptions] = useState<number | null>(null);

  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      title: 'MODU',
      description: 'Cashier and F&B web management using Go microservices backend, React TypeScript frontend.',
      techStack: ['Go', 'Microservices', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
      logo: 'https://res.cloudinary.com/doafwrddd/image/upload/v1772867278/MODU_jdtl6j.png',
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1777656149/69a11174-3f6b-4425-b60e-27c9d8a94c35.png',
      link: 'https://modu-management.vercel.app',
      status: 'deployed',
      statusText: 'Deployed',
    },
    {
      id: 2,
      title: 'FaiExpress',
      description: 'Mobile app for shipping goods, food, and passenger services operating in Pulau Burung, Riau Islands.',
      techStack: ['Flutter', 'Go', 'REST API', 'PostgreSQL', 'Mobile', 'Play Store'],
      logo: 'https://res.cloudinary.com/doafwrddd/image/upload/v1777648958/Logo_xokymk.png',
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1765690293/FaiExpress_lb9v2x.png',
      link: 'https://play.google.com/store/apps/details?id=com.fai.express&pcampaignid=web_share',
      status: 'deployed',
      statusText: 'Deployed',
    },
    {
      id: 3,
      title: 'CLAIRE',
      description: 'Integrated project using IoT, AI NLP, and web monitoring. Listens to classroom conversations and evaluates lecturer performance.',
      techStack: ['IoT', 'AI/NLP', 'Python', 'Web Monitoring', 'ESP32', 'TensorFlow'],
      logo: 'https://res.cloudinary.com/doafwrddd/image/upload/v1777650044/image_12_hkm3ih.png',
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1765690292/CLAIRE_xm154s.png',
      status: 'development',
      statusText: 'In Development',
    },
    {
      id: 4,
      title: 'Amiflow IoT Waterflow',
      description: 'IoT pipeline management system using waterflow sensors, BMP, ESP32, and LoRa for frequency-based node communication.',
      techStack: ['IoT', 'ESP32', 'LoRa', 'C++', 'Waterflow Sensor', 'MQTT'],
      logo: 'https://fik.amikompurwokerto.ac.id/wp-content/uploads/2022/06/Logo-FIK.png',
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1765690292/Amiflow_o7yrwr.png',
      link: 'https://drive.google.com/file/d/1U5xxdyuoLn-DSs9FjCBDwZ1ye3PMjEai/view',
      status: 'completed',
      statusText: 'Completed',
    },
    {
      id: 5,
      title: 'EduCDM Model Comparison',
      description: 'Comparing optimal algorithms for adaptive testing models using POMDP RL with belief updates from EduCDM models.',
      techStack: ['Python', 'POMDP', 'Reinforcement Learning', 'EduCDM', 'Research', 'Journal'],
      logo: 'https://res.cloudinary.com/doafwrddd/image/upload/v1773399059/logos/vqwlkkreofmjidaqtqmj.png',
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1773399059/logos/vqwlkkreofmjidaqtqmj.png',
      link: 'https://drive.google.com/file/d/1nScbKIj28QKG-z_384T8v7ySItwQyloR/view',
      status: 'research',
      statusText: 'Research',
    },
    {
      id: 6,
      title: 'Corporate Web Profiles',
      description: 'Landing pages and company profiles for PT. Nutanics and Javatech IT Service.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Responsive'],
      logo: [
        'https://res.cloudinary.com/doafwrddd/image/upload/v1766936388/Screenshot_2025-12-28_223621-removebg-preview_fjetbl.png',
        'https://res.cloudinary.com/doafwrddd/image/upload/v1765690293/WhiteJavatech_r6cluw.png',
      ],
      previewImage: 'https://res.cloudinary.com/doafwrddd/image/upload/v1777651894/image_13_kx8ahr.png',
      links: [
        { name: 'PT. Nutanics', url: 'https://nutanics.co.id' },
        { name: 'Javatech IT Service', url: 'https://javatech-id.vercel.app' },
      ],
      status: 'deployed',
      statusText: 'Deployed',
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'deployed':
        return { bg: '#5cb870', border: '#5cb870' };
      case 'development':
        return { bg: '#c8a96e', border: '#c8a96e' };
      case 'completed':
        return { bg: '#50a0c8', border: '#50a0c8' };
      case 'research':
        return { bg: '#a078c8', border: '#a078c8' };
      default:
        return { bg: '#c8a96e', border: '#c8a96e' };
    }
  };

  const getLogoSize = (title: string, isDoubleLogo: boolean, idx?: number) => {
    // Special sizing for specific logos
    if (title === 'MODU') {
      return 'w-28 h-28';
    }
    if (title === 'CLAIRE') {
      return 'w-28 h-28';
    }
    if (title === 'Corporate Web Profiles') {
      // Nutanics and Javatech logos
      return 'w-24 h-24';
    }
    // Default sizes
    return isDoubleLogo ? 'w-16 h-16' : 'w-20 h-20';
  };

  return (
    <section
      id="portfolio"
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            My Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#f0ece4',
              fontWeight: 600,
            }}
          >
            Portfolio
          </h2>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item) => {
            const statusStyle = getStatusStyle(item.status);
            const isDoubleLogo = Array.isArray(item.logo);

            return (
              <div
                key={item.id}
                className="group rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(20, 18, 16, 0.8)',
                  border: '1px solid rgba(200, 169, 110, 0.15)',
                }}
              >
                {/* Image preview */}
                <div className="relative w-full h-56 overflow-hidden bg-[#1a1814]">
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(15%) brightness(0.85)' }}
                  />

                  {/* Status badge */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-wider font-semibold"
                    style={{
                      background: statusStyle.bg,
                      color: '#ffffff',
                      border: `1px solid ${statusStyle.border}`,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {item.statusText}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Logo section - No white frame, larger size with special sizing */}
                  <div className="mb-5">
                    {isDoubleLogo ? (
                      <div className="flex items-center gap-5">
                        {item.logo.map((logo, idx) => {
                          const logoSize = getLogoSize(item.title, isDoubleLogo, idx);
                          return (
                            <img
                              key={idx}
                              src={logo}
                              alt={`Company logo ${idx + 1}`}
                              className={`${logoSize} object-contain`}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <img
                        src={item.logo as string}
                        alt={`${item.title} logo`}
                        className={`${getLogoSize(item.title, false)} object-contain`}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      fontFamily: "'Montserrat', serif",
                      color: '#f0ece4',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#a8a090', lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.techStack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-[10px] rounded-sm font-mono tracking-wide"
                        style={{
                          background: 'rgba(200, 169, 110, 0.1)',
                          color: '#c8c0b4',
                          border: '1px solid rgba(200, 169, 110, 0.15)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 5 && (
                      <span
                        className="px-2 py-1 text-[10px] rounded-sm font-mono"
                        style={{
                          background: 'rgba(200, 169, 110, 0.08)',
                          color: '#6a6560',
                        }}
                      >
                        +{item.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-200"
                      style={{ color: '#c8a96e' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#e0c88e'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
                    >
                      View Project →
                    </a>
                  )}

                  {/* Links - improved dropdown that stays open while hovering */}
                  {item.links && (
                    <div
                      className="relative inline-block"
                      onMouseEnter={() => setShowLinkOptions(item.id)}
                      onMouseLeave={() => setShowLinkOptions(null)}
                    >
                      <button
                        className="inline-flex items-center gap-1.5 text-sm font-mono transition-colors duration-200"
                        style={{ color: '#c8a96e' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#e0c88e'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
                      >
                        View Project Options ↓
                      </button>

                      {showLinkOptions === item.id && (
                        <div
                          className="absolute left-0 mt-2 rounded-md shadow-lg z-20 min-w-[200px]"
                          style={{
                            background: '#141210',
                            border: '1px solid rgba(200, 169, 110, 0.2)',
                            backdropFilter: 'blur(8px)',
                          }}
                          onMouseEnter={() => setShowLinkOptions(item.id)}
                          onMouseLeave={() => setShowLinkOptions(null)}
                        >
                          {item.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-sm font-mono transition-colors duration-200"
                              style={{ color: '#a8a090' }}
                              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; e.currentTarget.style.background = 'rgba(200, 169, 110, 0.08)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; e.currentTarget.style.background = 'transparent'; }}
                            >
                              {link.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;