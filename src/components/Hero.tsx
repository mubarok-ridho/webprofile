import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/profileData';

const PHOTO_URL =
  'https://res.cloudinary.com/doafwrddd/image/upload/v1777464247/wmremove-transformed_4_qkvhin.jpg';

/* ─── tiny keyframe injector ─── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap');

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 }                             to { opacity:1 } }
  @keyframes scanline { 0%,100% { transform:translateY(-100%) } 50% { transform:translateY(100%) } }
  @keyframes blink    { 0%,100% { opacity:1 } 50% { opacity:0 } }
  @keyframes orbit    { from { transform:rotate(0deg) translateX(140px) rotate(0deg) }
                        to   { transform:rotate(360deg) translateX(140px) rotate(-360deg) } }

  .hero-tag  { animation: fadeUp .6s ease both }
  .hero-name { animation: fadeUp .7s ease .1s both }
  .hero-sub  { animation: fadeUp .7s ease .22s both }
  .hero-stats{ animation: fadeUp .7s ease .34s both }
  .hero-cta  { animation: fadeUp .7s ease .44s both }
  .hero-img  { animation: fadeIn .9s ease .3s both }

  .cta-primary {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px; background:#e8e0d0; color:#0a0a0a;
    font-family:'DM Mono',monospace; font-size:12px; letter-spacing:.08em;
    text-decoration:none; transition:background .2s,transform .15s;
  }
  .cta-primary:hover { background:#f0e8d6; transform:translateY(-1px) }

  .cta-outline {
    display:inline-flex; align-items:center; gap:8px;
    padding:12px 28px; border:1px solid rgba(255,255,255,.18); color:#a8a090;
    font-family:'DM Mono',monospace; font-size:12px; letter-spacing:.08em;
    text-decoration:none; transition:border-color .2s,color .2s,transform .15s;
  }
  .cta-outline:hover { border-color:rgba(255,255,255,.4); color:#d4cfc6; transform:translateY(-1px) }

  .stat-num {
    font-family:'DM Serif Display',serif;
    font-size:28px; color:#f0ece4; line-height:1;
  }
  .stat-label {
    font-family:'DM Mono',monospace;
    font-size:10px; letter-spacing:.15em; color:#5a5650; text-transform:uppercase; margin-top:4px;
  }
  .stat-divider { width:1px; background:rgba(255,255,255,.08); height:40px; align-self:center }

  .role-chip {
    display:inline-flex; align-items:center; gap:6px;
    border:1px solid rgba(255,255,255,.1); padding:5px 12px;
    font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.1em; color:#6a6460;
  }
  .role-chip-dot { width:5px; height:5px; border-radius:50%; background:#c8a96e; flex-shrink:0 }

  .scroll-line {
    width:1px; height:56px; background:linear-gradient(to bottom, transparent, #4a4540, transparent);
    animation:fadeIn 1s ease 1.2s both;
  }

  .img-wrap:hover img { filter:grayscale(0%) brightness(1.04); transform:scale(1.02) }
  img { transition:filter .8s ease, transform .8s ease }

  .grid-corner {
    position:absolute; width:16px; height:16px;
    border-color:rgba(200,169,110,.4);
    border-style:solid;
  }

  /* ========== MOBILE RESPONSIVE - FOTO TETAP DI SAMPING ========== */
  @media (max-width: 968px) {
    .hero-main-layout {
      gap: 40px !important;
      padding: 60px 32px !important;
    }
    .stat-num {
      font-size: 24px !important;
    }
    .stat-label {
      font-size: 9px !important;
    }
    .stat-divider {
      height: 32px !important;
    }
  }

  @media (max-width: 768px) {
    .hero-main-layout {
      gap: 30px !important;
      padding: 40px 24px !important;
    }
    .hero-left-col {
      flex: 1 !important;
    }
    .hero-name h1 {
      font-size: clamp(38px, 6vw, 88px) !important;
    }
    .hero-sub p {
      font-size: 13px !important;
      max-width: 100% !important;
      margin-bottom: 30px !important;
    }
    .role-chip {
      padding: 4px 10px !important;
      font-size: 10px !important;
    }
    .hero-tag {
      margin-bottom: 28px !important;
    }
    .hero-name {
      margin-bottom: 20px !important;
    }
    .hero-stats {
      gap: 18px !important;
      margin-bottom: 36px !important;
      padding: 16px 0 !important;
    }
    .stat-num {
      font-size: 20px !important;
    }
    .stat-num span {
      font-size: 14px !important;
    }
    .stat-label {
      font-size: 8px !important;
    }
    .stat-divider {
      height: 28px !important;
    }
    .cta-primary, .cta-outline {
      padding: 10px 22px !important;
      font-size: 11px !important;
    }
    /* Foto tetap di samping - ukuran lebih kecil */
    .hero-img .img-wrap {
      width: 220px !important;
      height: 290px !important;
    }
    .grid-corner {
      width: 12px !important;
      height: 12px !important;
    }
    .hero-img .grid-corner {
      border-width: 1px !important;
    }
    .status-badge {
      padding: 7px 12px !important;
      gap: 8px !important;
      bottom: -12px !important;
      left: -12px !important;
    }
    .status-badge span {
      width: 6px !important;
      height: 6px !important;
    }
    .status-badge p:first-child {
      font-size: 10px !important;
    }
    .status-badge p:last-child {
      font-size: 9px !important;
    }
    /* Outer ring */
    .hero-img > div:first-child {
      inset: -15px !important;
    }
  }

  @media (max-width: 600px) {
    .hero-main-layout {
      gap: 24px !important;
      padding: 32px 20px !important;
    }
    .hero-name h1 {
      font-size: clamp(32px, 5.5vw, 72px) !important;
    }
    .hero-sub p {
      font-size: 12px !important;
      margin-bottom: 24px !important;
    }
    .hero-stats {
      gap: 14px !important;
      margin-bottom: 30px !important;
      padding: 12px 0 !important;
    }
    .stat-num {
      font-size: 18px !important;
    }
    .stat-label {
      font-size: 7px !important;
      letter-spacing: 0.1em !important;
    }
    .stat-divider {
      height: 24px !important;
    }
    .cta-primary, .cta-outline {
      padding: 8px 16px !important;
      font-size: 10px !important;
    }
    .cta-primary svg, .cta-outline svg {
      width: 12px !important;
      height: 12px !important;
    }
    /* Foto lebih kecil lagi di hp, tetap di samping */
    .hero-img .img-wrap {
      width: 180px !important;
      height: 240px !important;
    }
    .status-badge {
      padding: 5px 10px !important;
      bottom: -10px !important;
      left: -10px !important;
    }
    .status-badge p:first-child {
      font-size: 9px !important;
    }
    .status-badge p:last-child {
      font-size: 8px !important;
    }
    .hero-img > div:first-child {
      inset: -12px !important;
    }
    .scroll-line {
      height: 40px !important;
    }
    .scroll-indicator span {
      font-size: 8px !important;
    }
  }

  @media (max-width: 480px) {
    .hero-main-layout {
      gap: 20px !important;
    }
    .hero-img .img-wrap {
      width: 160px !important;
      height: 210px !important;
    }
    .stat-num {
      font-size: 16px !important;
    }
    .stat-label {
      font-size: 6px !important;
    }
    .role-chip {
      padding: 3px 8px !important;
      font-size: 9px !important;
    }
    .cta-primary, .cta-outline {
      padding: 6px 14px !important;
      font-size: 9px !important;
    }
  }
`;

const Hero: React.FC = () => {
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <>
      <style>{STYLES}</style>

      <section
        style={{
          minHeight: '100vh',
          background: '#0c0b09',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* ── grid texture ── */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* ── warm radial glow (left-center) ── */}
        <div
          style={{
            position: 'absolute', left: '-10%', top: '50%', transform: 'translateY(-50%)',
            width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,140,60,.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── decorative circle ring (right) ── */}
        <div
          style={{
            position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)',
            width: '420px', height: '420px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.04)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
            width: '280px', height: '280px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.05)',
            pointerEvents: 'none',
          }}
        />

        {/* ── main layout ── */}
        <div
          className="hero-main-layout"
          style={{
            position: 'relative', zIndex: 10,
            width: '100%', maxWidth: '1200px',
            margin: '0 auto', padding: '80px 48px',
            display: 'flex', alignItems: 'center',
            gap: '80px', flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >

          {/* ══ LEFT COLUMN ══ */}
          <div className="hero-left-col" style={{ flex: '1 1 440px', minWidth: 0 }}>

            {/* role chips */}
            <div className="hero-tag" style={{ display: 'flex', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
              <span className="role-chip">
                <span className="role-chip-dot" />
                AI Engineer
              </span>
              <span className="role-chip">
                <span className="role-chip-dot" style={{ background: '#7090c8' }} />
                Backend Developer
              </span>
            </div>

            {/* name */}
            <div className="hero-name" style={{ marginBottom: '28px' }}>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(52px, 7vw, 88px)',
                  lineHeight: .95,
                  margin: 0,
                  color: '#f4f0e8',
                  fontWeight: 400,
                }}
              >
                {firstName}
                <br />
                <span style={{ color: '#c8a96e' }}>{lastName}</span>
              </h1>
            </div>

            {/* tagline */}
            <div className="hero-sub">
              <p
                style={{
                  fontSize: '15px', lineHeight: 1.8,
                  color: '#6a6460', maxWidth: '420px',
                  margin: '0 0 40px',
                  fontWeight: 300,
                }}
              >
                Building AI-powered systems and scalable backend solutions —
                from model development to production deployment. Precision at every layer.
              </p>
            </div>

            {/* stats */}
            <div
              className="hero-stats"
              style={{
                display: 'flex', alignItems: 'center', gap: '28px',
                marginBottom: '44px', padding: '24px 0',
                borderTop: '1px solid rgba(255,255,255,.06)',
                borderBottom: '1px solid rgba(255,255,255,.06)',
              }}
            >
              <div>
                <p className="stat-num">10<span style={{ fontSize: '18px', color: '#c8a96e' }}>+</span></p>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num">AI</p>
                <p className="stat-label">Enthusiast</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num" style={{ fontSize: '22px' }}>Backend</p>
                <p className="stat-label">Developer | Engineer</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num" style={{ fontSize: '22px' }}>Software</p>
                <p className="stat-label">Developer | Engineer</p>
              </div>
            </div>

            {/* CTA */}
            <div className="hero-cta" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#portfolio" className="cta-primary">
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#about" className="cta-outline">
                Get in Touch
              </a>
            </div>

          </div>

          {/* ══ RIGHT COLUMN — Photo ══ */}
          <div
            className="hero-img"
            style={{ flex: '0 0 auto', position: 'relative' }}
          >

            {/* outer accent ring */}
            <div
              style={{
                position: 'absolute', inset: '-20px',
                border: '1px solid rgba(200,169,110,.12)',
                borderRadius: '2px',
              }}
            />

            {/* corner brackets */}
            <div className="grid-corner" style={{ top: -4, left: -4, borderWidth: '1px 0 0 1px' }} />
            <div className="grid-corner" style={{ top: -4, right: -4, borderWidth: '1px 1px 0 0' }} />
            <div className="grid-corner" style={{ bottom: -4, left: -4, borderWidth: '0 0 1px 1px' }} />
            <div className="grid-corner" style={{ bottom: -4, right: -4, borderWidth: '0 1px 1px 0' }} />

            {/* photo frame */}
            <div
              className="img-wrap"
              style={{
                width: '300px', height: '380px',
                position: 'relative', overflow: 'hidden',
                background: '#1a1814',
              }}
            >
              {/* scanline effect */}
              <div
                style={{
                  position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
                  background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.04) 2px,rgba(0,0,0,.04) 4px)',
                }}
              />

              <img
                src={PHOTO_URL}
                alt={personalInfo.name}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(30%) brightness(.9) contrast(1.05)',
                  display: 'block',
                }}
              />
            </div>

            {/* status badge */}
            <div
              className="status-badge"
              style={{
                position: 'absolute', bottom: '-16px', left: '-16px',
                background: '#141210',
                border: '1px solid rgba(255,255,255,.1)',
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}
            >
              <span
                style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#5cb870',
                  boxShadow: '0 0 8px rgba(92,184,112,.6)',
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: '11px', color: '#c8c0b4',
                    margin: 0, letterSpacing: '.06em',
                  }}
                >
                  Available for work
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: '10px', color: '#4a4640',
                    margin: 0, letterSpacing: '.04em',
                  }}
                >
                  Open to roles & freelance
                </p>
              </div>
            </div>

            {/* index label */}
            <div
              style={{
                position: 'absolute', top: '12px', right: '-40px',
                fontFamily: "'DM Mono',monospace",
                fontSize: '10px', color: '#2e2c28',
                letterSpacing: '.12em',
                writingMode: 'vertical-rl', textTransform: 'uppercase',
              }}
            >
              
            </div>

          </div>

        </div>

        {/* ── scroll indicator ── */}
        <div
          className="scroll-indicator"
          style={{
            position: 'absolute', bottom: '32px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: '9px', letterSpacing: '.2em',
              color: '#2e2c28', textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <div className="scroll-line" />
        </div>

      </section>
    </>
  );
};

export default Hero;