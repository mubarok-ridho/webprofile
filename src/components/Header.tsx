import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const LOGO_URL =
  'https://res.cloudinary.com/doafwrddd/image/upload/v1781981450/image_16_1_vfszlo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ['Home', 'About', 'Portfolio', 'Experience', 'Skills'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'py-7 backdrop-blur-sm'
      }`}
      style={{
        background: scrolled
          ? 'rgba(var(--fade-rgb), 0.92)'
          : 'rgba(var(--fade-rgb), 0.35)',
        borderBottom: scrolled 
          ? '1px solid var(--border)'
          : '1px solid transparent',
        transition: 'background-color .4s ease, border-color .4s ease, padding .5s ease',
      }}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="#"
          className="flex items-center justify-center focus:outline-none"
          aria-label="Home"
        >
          <img
            src={LOGO_URL}
            alt="Logo"
            style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs transition-all duration-300 relative py-1 tracking-widest uppercase block transform hover:-translate-y-[1px] group"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: 'var(--text-secondary)',
                transition: 'color .3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {item}
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[1.5px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' 
                }}
              />
            </a>
          ))}

          {/* Day/night toggle - desktop */}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />

          <button
            className="p-1 focus:outline-none relative w-6 h-6 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span 
              className={`h-[1.5px] w-5 transition-all duration-300 ease-out ${
                isOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
              style={{ background: 'var(--text-primary)', transition: 'background-color .3s ease, transform .3s ease' }}
            />
            <span 
              className={`h-[1.5px] w-5 transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
              style={{ background: 'var(--text-primary)', transition: 'background-color .3s ease, opacity .3s ease, transform .3s ease' }}
            />
            <span 
              className={`h-[1.5px] w-5 transition-all duration-300 ease-out ${
                isOpen ? '-rotate-45 translate-y-[-6.5px]' : ''
              }`}
              style={{ background: 'var(--text-primary)', transition: 'background-color .3s ease, transform .3s ease' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(var(--fade-rgb), 0.98)',
          borderBottom: isOpen ? '1px solid var(--border)' : 'none',
          transition: 'background-color .3s ease, border-color .3s ease, max-height .4s ease, opacity .4s ease',
        }}
      >
        <div className="px-8 py-6 flex flex-col gap-5">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs tracking-widest uppercase py-1 transition-all duration-300 transform ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                fontFamily: "'DM Mono', monospace",
                color: 'var(--text-secondary)',
                transitionDelay: `${index * 50}ms`,
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;