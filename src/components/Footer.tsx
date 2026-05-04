import React from 'react';
import { personalInfo } from '../data/profileData';

// SVG Icons
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 inline">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0c0b09' }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #c8a96e, transparent)' }}
      />

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

      <div className="container mx-auto px-6 max-w-5xl relative z-10 py-12">
        {/* Get in Touch Section */}
        <div className="text-center mb-8">
          <p
            className="text-sm tracking-widest uppercase mb-3"
            style={{ color: '#8a8580', fontFamily: "'Montserrat', monospace" }}
          >
            Let's Connect
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: '#f0ece4',
              fontWeight: 400,
            }}
          >
            Get in Touch
          </h3>
          <div
            className="w-12 h-px mx-auto rounded-full"
            style={{ background: '#c8a96e' }}
          />
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 transition-all duration-200"
            style={{ color: '#a8a090' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; }}
          >
            <IconMail />
            <span className="text-sm font-mono tracking-wide">Email</span>
          </a>
          
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-all duration-200"
              style={{ color: '#a8a090' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; }}
            >
              <IconGithub />
              <span className="text-sm font-mono tracking-wide">GitHub</span>
            </a>
          )}
          
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-all duration-200"
              style={{ color: '#a8a090' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8a96e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a8a090'; }}
            >
              <IconLinkedin />
              <span className="text-sm font-mono tracking-wide">LinkedIn</span>
            </a>
          )}
        </div>

        {/* Divider */}
        <div
          className="h-px w-full max-w-md mx-auto mb-6"
          style={{ background: 'rgba(200, 169, 110, 0.15)' }}
        />

        {/* Copyright */}
        <p
          className="text-xs text-center font-mono tracking-wide"
          style={{ color: '#5a5650' }}
        >
          © {currentYear} {personalInfo.name}. Crafted with{' '}
          <IconHeart />
          {' '}using React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;