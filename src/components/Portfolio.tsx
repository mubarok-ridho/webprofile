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

  const getLogoSize = (title: string, isDoubleLogo: boolean) => {
    if (title === 'MODU' || title === 'CLAIRE') {
      return 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20';
    }
    if (title === 'Corporate Web Profiles') {
      return 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16';
    }
    return isDoubleLogo ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14' : 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16';
  };

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section
      id="portfolio"
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
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-3"
            style={{ color: '#8a8580', fontFamily: "'DM Mono', monospace" }}
          >
            My Work
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: '#f0ece4',
              fontWeight: 400,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {portfolios.map((item) => {
            const statusStyle = getStatusStyle(item.status);
            const isDoubleLogo = Array.isArray(item.logo);
            const isExpanded = expandedCard === item.id;
            const hasLinks = item.links && item.links.length > 0;

            return (
              <div
                key={item.id}
                className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(20, 18, 16, 0.8)',
                  border: '1px solid rgba(200, 169, 110, 0.12)',
                }}
              >
                {/* Dekorasi garis di kiri card */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:w-1"
                  style={{ background: '#c8a96e', opacity: 0.6 }}
                />

                {/* Image preview */}
                <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden bg-[#1a1814]">
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(15%) brightness(0.85)' }}
                  />

                  {/* Status badge */}
                  <div
                    className="absolute top-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[8px] sm:text-[9px] md:text-[10px] font-mono font-semibold uppercase tracking-wider"
                    style={{
                      background: `${statusStyle.bg}cc`,
                      color: '#ffffff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {item.statusText}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Logo - tetap PNG */}
                  <div className="mb-3 sm:mb-4 md:mb-5">
                    {isDoubleLogo ? (
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        {(item.logo as string[]).map((logo, idx) => (
                          <img
                            key={idx}
                            src={logo}
                            alt={`Company logo ${idx + 1}`}
                            className={`${getLogoSize(item.title, true)} object-contain`}
                            style={{ background: 'transparent' }}
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={item.logo as string}
                        alt={`${item.title} logo`}
                        className={`${getLogoSize(item.title, false)} object-contain`}
                        style={{ background: 'transparent' }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: '#f0ece4',
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Dekorasi garis bawah title */}
                  <div
                    className="w-8 h-px mb-3 sm:mb-4 transition-all duration-300 group-hover:w-12"
                    style={{ background: '#c8a96e', opacity: 0.5 }}
                  />

                  {/* Description */}
                  <p
                    className="text-[11px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4"
                    style={{ color: '#a8a090', lineHeight: 1.6 }}
                  >
                    {item.description.length > 100 && window.innerWidth < 640
                      ? `${item.description.substring(0, 100)}...`
                      : item.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                    {item.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[7px] sm:text-[8px] md:text-[9px] rounded font-mono"
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
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[7px] sm:text-[8px] md:text-[9px] rounded font-mono"
                        style={{
                          background: 'rgba(200, 169, 110, 0.08)',
                          color: '#6a6560',
                        }}
                      >
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  {item.link && !hasLinks && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono transition-all duration-200"
                      style={{ color: '#c8a96e' }}
                    >
                      <span>View Project</span>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </a>
                  )}

                  {hasLinks && (
                    <div className="w-full">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono transition-colors duration-200"
                        style={{ color: '#c8a96e' }}
                      >
                        {isExpanded ? 'Hide Options' : 'View Options'}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div
                          className="mt-2 rounded-md overflow-hidden"
                          style={{
                            background: '#141210',
                            border: '1px solid rgba(200, 169, 110, 0.15)',
                          }}
                        >
                          {item.links?.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 text-[10px] sm:text-xs font-mono transition-all duration-200 border-b last:border-b-0"
                              style={{
                                color: '#a8a090',
                                borderColor: 'rgba(200, 169, 110, 0.08)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#c8a96e';
                                e.currentTarget.style.background = 'rgba(200, 169, 110, 0.05)';
                                e.currentTarget.style.paddingLeft = '16px';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#a8a090';
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.paddingLeft = '12px';
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
    </section>
  );
};

export default Portfolio;