import React, { useState, useEffect } from 'react';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled 
          ? 'rgba(12, 11, 9, 0.95)'
          : 'rgba(12, 11, 9, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200, 169, 110, 0.12)',
      }}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl transition-colors"
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: '#f0ece4',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#c8a96e' }}>M</span>R
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-all duration-200 relative group"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#8a8580',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8580'; }}
            >
              {item}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-200 group-hover:w-full"
                style={{ background: '#c8a96e' }}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block text-xs py-2 px-5 rounded-sm transition-all duration-200 hover:opacity-80"
          style={{
            fontFamily: "'Poppins', monospace",
            background: '#000000',
            color: '#0a0a0a',
            letterSpacing: '0.08em',
          }}
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: '#f0ece4' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="md:hidden mt-2 py-3 rounded-lg mx-4"
          style={{
            background: 'rgba(20, 18, 16, 0.98)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(200, 169, 110, 0.12)',
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-5 py-3 text-sm transition-colors"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#a8a090',
                letterSpacing: '0.08em',
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; e.currentTarget.style.background = 'rgba(200, 169, 110, 0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; e.currentTarget.style.background = 'transparent'; }}
            >
              {item}
            </a>
          ))}
          <div className="h-px my-2" style={{ background: 'rgba(200, 169, 110, 0.08)' }} />
          <a
            href="#contact"
            className="block mx-4 mt-2 text-center text-xs py-2.5 rounded-sm transition-all"
            style={{
              fontFamily: "'Poppins', monospace",
              background: '#705d08',
              color: '#000000',
              letterSpacing: '0.08em',
            }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;