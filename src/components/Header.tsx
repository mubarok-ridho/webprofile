import React, { useState, useEffect } from 'react';
// Import file logo dari lokasi aset kamu
import Logo from '../assets/Logo'; 

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
          : 'py-7 backdrop-blur-none'
      }`}
      style={{
        // Memperbaiki warna abu-abu: murni transparan saat di paling atas
        background: scrolled 
          ? 'rgba(12, 11, 9, 0.95)'
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid rgba(200, 169, 110, 0.1)'
          : '1px solid rgba(200, 169, 110, 0.0)',
      }}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="#"
          className="flex items-center justify-center focus:outline-none"
          aria-label="Home"
        >
          <Logo />
        </a>

        {/* Desktop Menu - Lebih Interaktif dengan Efek Lift-up & Gradasi Garis */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs transition-all duration-300 relative py-1 tracking-widest uppercase block transform hover:-translate-y-[1px] group"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: '#8a8580',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0ece4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#8a8580'; }}
            >
              {item}
              {/* Garis bawah tipis melebar dari tengah dengan gradasi */}
              <span
                className="absolute bottom-0 left-1/2 w-0 h-[1.5px] -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #c8a96e, transparent)' 
                }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Animasi Hamburger Berubah Jadi 'X' */}
        <button
          className="md:hidden p-1 focus:outline-none relative w-6 h-6 flex flex-col justify-center items-center gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span 
            className={`h-[1.5px] w-5 bg-[#f0ece4] transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span 
            className={`h-[1.5px] w-5 bg-[#f0ece4] transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`h-[1.5px] w-5 bg-[#f0ece4] transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 translate-y-[-6.5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown - Transisi Berurutan (Staggered Fade-in) */}
      <div
        className={`md:hidden absolute left-0 w-full overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(12, 11, 9, 0.98)',
          borderBottom: isOpen ? '1px solid rgba(200, 169, 110, 0.08)' : 'none',
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
                color: '#a8a090',
                transitionDelay: `${index * 50}ms` // Efek muncul satu per satu
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; }}
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