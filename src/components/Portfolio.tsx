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
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  const getLogoSize = (title: string, isDoubleLogo: boolean, _idx?: number) => {
    if (title === 'MODU') {
      return 'w-20 h-20 md:w-28 md:h-28';
    }
    if (title === 'CLAIRE') {
      return 'w-20 h-20 md:w-28 md:h-28';
    }
    if (title === 'Corporate Web Profiles') {
      return 'w-16 h-16 md:w-24 md:h-24';
    }
    return isDoubleLogo ? 'w-12 h-12 md:w-16 md:h-16' : 'w-14 h-14 md:w-20 md:h-20';
  };

  const toggleExpand = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
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

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p
            className="text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            My Work
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: '#f0ece4',
              fontWeight: 600,
            }}
          >
            Portfolio
          </h2>
          <div
            className="w-10 md:w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {portfolios.map((item) => {
            const statusStyle = getStatusStyle(item.status);
            const isDoubleLogo = Array.isArray(item.logo);
            const isExpanded = expandedCard === item.id;
            const hasLinks = item.links && item.links.length > 0;

            return (
              <div
                key={item.id}
                className={`group rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isExpanded ? 'ring-1 ring-[#c8a96e]/30' : ''
                }`}
                style={{
                  background: 'rgba(20, 18, 16, 0.8)',
                  border: '1px solid rgba(200, 169, 110, 0.15)',
                }}
              >
                {/* Image preview */}
                <div className="relative w-full h-36 md:h-56 overflow-hidden bg-[#1a1814]">
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(15%) brightness(0.85)' }}
                  />

                  {/* Status badge */}
                  <div
                    className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-sm text-[8px] md:text-[10px] font-mono tracking-wider font-semibold"
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
                <div className="p-3 md:p-6">
                  {/* Logo section */}
                  <div className="mb-2 md:mb-5">
                    {isDoubleLogo ? (
                      <div className="flex items-center gap-2 md:gap-5">
                        {(Array.isArray(item.logo) ? item.logo : [item.logo]).map((logo, idx) => {
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
                    className="text-sm md:text-xl font-semibold mb-1 md:mb-2 line-clamp-1"
                    style={{
                      fontFamily: "'Montserrat', serif",
                      color: '#f0ece4',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="hidden md:block text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: '#a8a090', lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                  
                  {/* Short description for mobile */}
                  <p
                    className="text-[10px] md:hidden leading-relaxed mb-2 line-clamp-2"
                    style={{ color: '#a8a090', lineHeight: 1.4 }}
                  >
                    {item.description.length > 80 ? item.description.substring(0, 80) + '...' : item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-5">
                    {item.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 md:px-2 md:py-1 text-[7px] md:text-[10px] rounded-sm font-mono tracking-wide"
                        style={{
                          background: 'rgba(200, 169, 110, 0.1)',
                          color: '#c8c0b4',
                          border: '1px solid rgba(200, 169, 110, 0.15)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span
                        className="px-1.5 py-0.5 md:px-2 md:py-1 text-[7px] md:text-[10px] rounded-sm font-mono"
                        style={{
                          background: 'rgba(200, 169, 110, 0.08)',
                          color: '#6a6560',
                        }}
                      >
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links - Special handling for Corporate Web Profiles with expandable dropdown */}
                  {item.link && !hasLinks && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 md:gap-1.5 text-[10px] md:text-sm font-mono transition-colors duration-200"
                      style={{ color: '#c8a96e' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#e0c88e'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
                    >
                      View Project →
                    </a>
                  )}

                  {/* Expandable dropdown for Corporate Web Profiles */}
                  {hasLinks && (
                    <div className="w-full">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1 md:gap-1.5 text-[10px] md:text-sm font-mono transition-colors duration-200"
                        style={{ color: '#c8a96e' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#e0c88e'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
                      >
                        {isExpanded ? 'Hide Options ↑' : 'View Options ↓'}
                      </button>

                      {/* Expandable dropdown menu */}
                      {isExpanded && (
                        <div
                          className="mt-2 md:mt-3 rounded-md shadow-lg w-full overflow-hidden transition-all duration-300"
                          style={{
                            background: '#141210',
                            border: '1px solid rgba(200, 169, 110, 0.2)',
                          }}
                        >
                          {item.links?.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 md:px-4 md:py-3 text-[10px] md:text-sm font-mono transition-colors duration-200 border-b last:border-b-0"
                              style={{ 
                                color: '#a8a090',
                                borderColor: 'rgba(200, 169, 110, 0.1)'
                              }}
                              onMouseEnter={(e) => { 
                                e.currentTarget.style.color = '#c8a96e'; 
                                e.currentTarget.style.background = 'rgba(200, 169, 110, 0.08)'; 
                              }}
                              onMouseLeave={(e) => { 
                                e.currentTarget.style.color = '#a8a090'; 
                                e.currentTarget.style.background = 'transparent'; 
                              }}
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

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;