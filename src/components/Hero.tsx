import React from 'react';
import { personalInfo } from '../data/profileData';
// import ThemeToggle from './ThemeToggle';

const PHOTO_URL =
  'https://res.cloudinary.com/doafwrddd/image/upload/v1777464247/wmremove-transformed_4_qkvhin.jpg';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap');

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes pulseGlow { 0%,100% { box-shadow:0 0 6px var(--status-glow) } 50% { box-shadow:0 0 12px var(--status-glow) } }

  .hero-section {
    background: var(--bg);
    transition: background-color .4s ease;
  }

  /* ── entry animations ── */
  .hero-tag   { animation: fadeUp .6s ease both }
  .hero-name  { animation: fadeUp .7s ease .10s both }
  .hero-sub   { animation: fadeUp .7s ease .22s both }
  .hero-stats { animation: fadeUp .7s ease .34s both }
  .hero-cta   { animation: fadeUp .7s ease .44s both }
  .hero-img   { animation: fadeIn .9s ease .30s both }

  /* ── buttons (desktop) ── */
  .cta-primary {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px; padding: 12px 28px;
    background: var(--cta-primary-bg); color: var(--cta-primary-text);
    font-family: 'DM Mono', monospace; font-size: 12px;
    letter-spacing: .08em; text-decoration: none;
    transition: filter .2s, transform .15s, background-color .3s, color .3s;
  }
  .cta-primary:hover { filter: brightness(1.1); transform: translateY(-1px) }
  .cta-primary:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px }

  .cta-outline {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px; padding: 12px 28px;
    border: 1px solid var(--border-strong); color: var(--text-secondary);
    font-family: 'DM Mono', monospace; font-size: 12px;
    letter-spacing: .08em; text-decoration: none;
    transition: border-color .2s, color .2s, transform .15s;
  }
  .cta-outline:hover { border-color: var(--accent); color: var(--text-primary); transform: translateY(-1px) }
  .cta-outline:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px }

  /* ── stat block ── */
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 28px; color: var(--text-primary); line-height: 1;
    transition: color .3s ease;
  }
  .stat-label {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: .15em; color: var(--text-tertiary);
    text-transform: uppercase; margin-top: 4px;
    transition: color .3s ease;
  }
  .stat-divider {
    width: 1px; background: var(--border);
    height: 40px; align-self: center; flex-shrink: 0;
    transition: background-color .3s ease;
  }

  /* ── role chips ── */
  .role-chip {
    display: inline-flex; align-items: center; gap: 6px;
    border: 1px solid var(--border); padding: 5px 12px;
    font-family: 'DM Mono', monospace; font-size: 11px;
    letter-spacing: .1em; color: var(--text-secondary);
    transition: border-color .3s ease, color .3s ease;
  }
  .role-chip-dot {
    width: 5px; height: 5px; border-radius: 50%;
    flex-shrink: 0;
  }

  // /* ── desktop toggle slot ── */
  // .desktop-toggle-slot {
  //   position: absolute; top: 32px; right: 48px; z-index: 20;
  // }

  /* ── scroll indicator ── */
  .scroll-line {
    width: 1px; height: 56px;
    background: linear-gradient(to bottom, transparent, var(--border-strong), transparent);
    animation: fadeIn 1s ease 1.2s both;
  }
  .scroll-label { color: var(--text-tertiary); transition: color .3s ease; }

  /* ── photo hover (desktop) ── */
  .img-wrap:hover img { filter: grayscale(0%) brightness(1.04); transform: scale(1.02) }
  img { transition: filter .8s ease, transform .8s ease }

  /* ── corner brackets (desktop) ── */
  .grid-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: var(--accent-translucent); border-style: solid;
    transition: border-color .3s ease;
  }

  /* Mobile elements hidden by default */
  .hero-mobile-section { display: none }

  /* ════════════════════════════════
     TABLET ≤ 968px
  ════════════════════════════════ */
  @media (max-width: 968px) {
    .hero-main-layout { gap: 40px !important; padding: 60px 32px !important }
    .stat-num         { font-size: 24px !important }
    .stat-label       { font-size: 9px !important }
    .stat-divider     { height: 32px !important }
    .desktop-toggle-slot { top: 24px !important; right: 32px !important }
  }

  /* ════════════════════════════════════════════════════════════
     MOBILE ≤ 768px  —  FOTO FULL-HEIGHT BACKGROUND
     Foto mengisi seluruh layar sebagai background,
     fade dari transparan ke warna bg tema mulai dari tengah ke bawah,
     konten (chips+toggle+status di atas, nama+teks+stats+cta di bawah)
     melayang di atas foto.
  ════════════════════════════════════════════════════════════ */
  @media (max-width: 768px) {

    /* Sembunyikan semua desktop layout */
    .hero-main-layout    { display: none !important }
    .scroll-indicator    { display: none !important }
    .desktop-toggle-slot { display: none !important }

    /* Tampilkan section mobile */
    .hero-mobile-section {
      display: flex !important;
      flex-direction: column !important;
      position: relative !important;
      min-height: 100vh !important;
      overflow: hidden !important;
    }

    /* ── Foto: absolute full cover ── */
    .m-photo-bg {
      position: absolute !important;
      inset: 0 !important;
      z-index: 1 !important;
    }
    .m-photo-bg img {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      object-position: center 20% !important;
      filter: var(--photo-filter) !important;
      display: block !important;
    }

    /* Scanlines di atas foto */
    .m-scanlines {
      position: absolute !important;
      inset: 0 !important; z-index: 2 !important;
      pointer-events: none !important;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 2px,
        rgba(0,0,0,.06) 2px, rgba(0,0,0,.06) 4px
      ) !important;
    }

    /* Gradient fade: atas jernih → bawah penuh warna bg tema */
    .m-fade {
      position: absolute !important;
      inset: 0 !important; z-index: 3 !important;
      pointer-events: none !important;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 32%,
        rgba(var(--fade-rgb), .55)  50%,
        rgba(var(--fade-rgb), .9)   63%,
        rgb(var(--fade-rgb))        76%
      ) !important;
      transition: background-color .3s ease !important;
    }

    /* Grid texture */
    .m-grid {
      position: absolute !important;
      inset: 0 !important; z-index: 4 !important;
      pointer-events: none !important;
      background-image:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px) !important;
      background-size: 40px 40px !important;
    }

    /* Accent bar kiri */
    .m-accent-left {
      position: absolute !important;
      left: 0 !important; top: 0 !important; height: 58% !important;
      width: 3px !important; z-index: 5 !important;
      background: linear-gradient(
        to bottom, transparent 8%, var(--accent) 45%, var(--accent) 55%, transparent 92%
      ) !important;
      transition: background .3s ease !important;
    }

    /* Konten melayang di atas */
    .m-content {
      position: relative !important;
      z-index: 10 !important;
      display: flex !important;
      flex-direction: column !important;
      min-height: 100vh !important;
      padding-bottom: 36px !important;
    }

    /* ── Atas: chips + toggle + status ── */
    .m-top {
      padding: 36px 22px 0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      animation: fadeUp .55s ease both !important;
    }
    .m-chips {
      display: flex !important; gap: 8px !important; flex-wrap: wrap !important;
    }
    .m-chip {
      display: inline-flex !important; align-items: center !important; gap: 5px !important;
      border: 1px solid var(--border-strong) !important;
      padding: 4px 10px !important;
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; letter-spacing: .1em !important; color: var(--text-secondary) !important;
      background: rgba(var(--fade-rgb), .35) !important;
      transition: border-color .3s ease, color .3s ease, background-color .3s ease !important;
    }
    .m-chip-dot { width: 4px !important; height: 4px !important; border-radius: 50% !important; flex-shrink: 0 !important; }

    .m-status {
      display: flex !important; align-items: center !important; gap: 7px !important;
    }
    .m-sdot {
      width: 6px !important; height: 6px !important; border-radius: 50% !important;
      background: var(--status) !important; flex-shrink: 0 !important; display: block !important;
      animation: pulseGlow 2s ease-in-out infinite !important;
    }
    .m-status p { margin: 0 !important; font-family: 'DM Mono', monospace !important; letter-spacing: .05em !important; line-height: 1.4 !important; }
    .m-s-avail  { font-size: 9.5px !important; color: var(--text-secondary) !important; transition: color .3s ease !important; }
    .m-s-open   { font-size: 8px !important;   color: var(--text-tertiary) !important; transition: color .3s ease !important; }

    /* Spacer dorong konten bawah ke bottom */
    .m-spacer { flex: 1 !important; min-height: 80px !important }

    /* ── Bawah: nama, tagline, stats, cta ── */
    .m-name {
      padding: 0 22px 10px !important;
      animation: fadeUp .6s ease .15s both !important;
    }
    .m-name h1 {
      font-family: 'DM Serif Display', serif !important;
      font-size: clamp(48px, 13vw, 72px) !important;
      line-height: .9 !important; margin: 0 !important;
      color: var(--text-primary) !important; font-weight: 400 !important;
      transition: color .3s ease !important;
    }
    .m-name h1 span { color: var(--accent) !important; display: block !important; transition: color .3s ease !important; }

    .m-tagline {
      padding: 0 22px !important;
      animation: fadeUp .6s ease .22s both !important;
    }
    .m-tagline p {
      font-family: 'Outfit', sans-serif !important;
      font-size: 13px !important; line-height: 1.75 !important;
      color: var(--text-secondary) !important; margin: 0 0 0 !important; font-weight: 300 !important;
      transition: color .3s ease !important;
    }

    /* Stats: scroll horizontal */
    .m-stats {
      display: flex !important; align-items: center !important;
      overflow-x: auto !important; -webkit-overflow-scrolling: touch !important;
      scrollbar-width: none !important; gap: 0 !important;
      padding: 16px 22px !important;
      border-top: 1px solid var(--border) !important;
      border-bottom: 1px solid var(--border) !important;
      margin: 20px 0 22px !important;
      animation: fadeUp .6s ease .28s both !important;
      transition: border-color .3s ease !important;
    }
    .m-stats::-webkit-scrollbar { display: none !important }
    .m-stat { flex: 0 0 auto !important; padding-right: 18px !important }
    .m-stat-n {
      font-family: 'DM Serif Display', serif !important;
      font-size: 22px !important; color: var(--text-primary) !important; line-height: 1 !important;
      transition: color .3s ease !important;
    }
    .m-stat-n span { font-size: 15px !important; color: var(--accent) !important; transition: color .3s ease !important; }
    .m-stat-l {
      font-family: 'DM Mono', monospace !important;
      font-size: 7.5px !important; letter-spacing: .1em !important;
      color: var(--text-tertiary) !important; text-transform: uppercase !important;
      margin-top: 3px !important; white-space: nowrap !important;
      transition: color .3s ease !important;
    }
    .m-sdiv {
      width: 1px !important; background: var(--border) !important;
      height: 28px !important; flex-shrink: 0 !important;
      margin: 0 18px !important; align-self: center !important;
      transition: background-color .3s ease !important;
    }

    /* CTA */
    .m-cta {
      padding: 0 22px !important; display: flex !important; gap: 10px !important;
      animation: fadeUp .6s ease .34s both !important;
    }
    .m-btn-p {
      flex: 1 !important; display: inline-flex !important;
      align-items: center !important; justify-content: center !important;
      gap: 6px !important; padding: 13px 14px !important;
      background: var(--cta-primary-bg) !important; color: var(--cta-primary-text) !important;
      font-family: 'DM Mono', monospace !important; font-size: 11px !important;
      letter-spacing: .07em !important; text-decoration: none !important;
      transition: background-color .3s ease, color .3s ease !important;
    }
    .m-btn-o {
      flex: 1 !important; display: inline-flex !important;
      align-items: center !important; justify-content: center !important;
      padding: 13px 14px !important;
      border: 1px solid var(--border-strong) !important; color: var(--text-secondary) !important;
      font-family: 'DM Mono', monospace !important; font-size: 11px !important;
      letter-spacing: .07em !important; text-decoration: none !important;
      transition: border-color .3s ease, color .3s ease !important;
    }

    /* Toggle floats independently in the top-right corner so it never
       fights with the chip row for space (this was the messy part) */
    .mobile-toggle-slot {
      position: absolute !important;
      top: 20px !important;
      right: 18px !important;
      z-index: 20 !important;
    }
    .mobile-toggle-slot .theme-toggle-switch {
      background: rgba(var(--fade-rgb), .5) !important;
    }
  }

  /* ════════════════════════════════
     SMALL MOBILE ≤ 480px
  ════════════════════════════════ */
  @media (max-width: 480px) {
    .m-name h1  { font-size: clamp(40px, 11.5vw, 58px) !important }
    .m-tagline p { font-size: 12px !important }
    .m-stat-n    { font-size: 19px !important }
    .m-stat-l    { font-size: 7px !important }
    .m-btn-p, .m-btn-o { padding: 11px 12px !important; font-size: 10.5px !important }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-tag, .hero-name, .hero-sub, .hero-stats, .hero-cta, .hero-img,
    .m-top, .m-name, .m-tagline, .m-stats, .m-cta, .scroll-line, .m-sdot {
      animation: none !important;
    }
  }
`;

const Hero: React.FC = () => {
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName  = nameParts.slice(1).join(' ');

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="hero-section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Outfit', sans-serif",
        }}
      >

        {/* ══════════════════════════════════
            DESKTOP LAYOUT (> 768px)
        ══════════════════════════════════ */}

        {/* ── grid texture ── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px),' +
            'linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px' }}
        />

        {/* ── ambient glow (warm at night, cool by day) ── */}
        <div style={{ position:'absolute', left:'-10%', top:'50%', transform:'translateY(-50%)',
          width:'600px', height:'600px', borderRadius:'50%',
          background:'radial-gradient(circle, var(--accent-glow-bg) 0%, transparent 70%)',
          pointerEvents:'none' }}
        />

        {/* ── decorative circle rings ── */}
        <div style={{ position:'absolute', right:'-80px', top:'50%', transform:'translateY(-50%)',
          width:'420px', height:'420px', borderRadius:'50%',
          border:'1px solid var(--border)', pointerEvents:'none' }}
        />
        <div style={{ position:'absolute', right:'20px', top:'50%', transform:'translateY(-50%)',
          width:'280px', height:'280px', borderRadius:'50%',
          border:'1px solid var(--border)', pointerEvents:'none' }}
        />

        {/* ── day/night toggle (desktop) ──
        <div className="desktop-toggle-slot">
          <ThemeToggle />
        </div> */}

        {/* ══ DESKTOP MAIN LAYOUT ══ */}
        <div
          className="hero-main-layout"
          style={{
            position:'relative', zIndex:10, width:'100%', maxWidth:'1200px',
            margin:'0 auto', padding:'80px 48px',
            display:'flex', alignItems:'center', gap:'80px', flexDirection:'row',
          }}
        >
          {/* LEFT COLUMN */}
          <div style={{ flex:'1 1 440px', minWidth:0 }}>

            <div className="hero-tag"
              style={{ display:'flex', gap:'8px', marginBottom:'36px', flexWrap:'wrap' }}>
              <span className="role-chip">
                <span className="role-chip-dot" style={{ background:'var(--chip-gold)' }} />
                AI Engineer
              </span>
              <span className="role-chip">
                <span className="role-chip-dot" style={{ background:'var(--accent-secondary)' }} />
                Backend Developer
              </span>
            </div>

            <div className="hero-name" style={{ marginBottom:'28px' }}>
              <h1 style={{
                fontFamily:"'DM Serif Display', serif",
                fontSize:'clamp(52px, 7vw, 88px)', lineHeight:.95,
                margin:0, color:'var(--text-primary)', fontWeight:400,
                transition:'color .3s ease',
              }}>
                {firstName}<br />
                <span style={{ color:'var(--accent)', transition:'color .3s ease' }}>{lastName}</span>
              </h1>
            </div>

            <div className="hero-sub">
              <p style={{
                fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)',
                maxWidth:'420px', margin:'0 0 40px', fontWeight:300,
                transition:'color .3s ease',
              }}>
                Building AI-powered systems and scalable backend solutions —
                from model development to production deployment. Precision at every layer.
              </p>
            </div>

            <div className="hero-stats" style={{
              display:'flex', alignItems:'center', gap:'28px',
              marginBottom:'44px', padding:'24px 0',
              borderTop:'1px solid var(--border)',
              borderBottom:'1px solid var(--border)',
              transition:'border-color .3s ease',
            }}>
              <div>
                <p className="stat-num">10<span style={{ fontSize:'18px', color:'var(--accent)' }}>+</span></p>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num">AI</p>
                <p className="stat-label">Enthusiast</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num" style={{ fontSize:'22px' }}>Backend</p>
                <p className="stat-label">Developer | Engineer</p>
              </div>
              <div className="stat-divider" />
              <div>
                <p className="stat-num" style={{ fontSize:'22px' }}>Software</p>
                <p className="stat-label">Developer | Engineer</p>
              </div>
            </div>

            <div className="hero-cta" style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <a href="#portfolio" className="cta-primary">
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="var(--cta-primary-text)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#about" className="cta-outline">Get in Touch</a>
            </div>

          </div>

          {/* RIGHT COLUMN — foto desktop */}
          <div className="hero-img" style={{ flex:'0 0 auto', position:'relative', alignSelf:'center' }}>
            <div style={{ position:'absolute', inset:'-20px',
              border:'1px solid var(--accent-translucent)', borderRadius:'2px', transition:'border-color .3s ease' }} />
            <div className="grid-corner" style={{ top:-4, left:-4,   borderWidth:'1px 0 0 1px' }} />
            <div className="grid-corner" style={{ top:-4, right:-4,  borderWidth:'1px 1px 0 0' }} />
            <div className="grid-corner" style={{ bottom:-4, left:-4,  borderWidth:'0 0 1px 1px' }} />
            <div className="grid-corner" style={{ bottom:-4, right:-4, borderWidth:'0 1px 1px 0' }} />
            <div className="img-wrap" style={{
              width:'300px', height:'380px', position:'relative',
              overflow:'hidden', background:'var(--bg-sunken)',
            }}>
              <div style={{
                position:'absolute', inset:0, zIndex:2, pointerEvents:'none',
                background:'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.04) 2px, rgba(0,0,0,.04) 4px)',
              }} />
              <img src={PHOTO_URL} alt={personalInfo.name} style={{
                width:'100%', height:'100%', objectFit:'cover',
                filter:'var(--photo-filter)', display:'block',
              }} />
            </div>
            <div style={{
              position:'absolute', bottom:'-16px', left:'-16px',
              background:'var(--bg-elevated)', border:'1px solid var(--border)',
              padding:'10px 16px', display:'flex', alignItems:'center', gap:'10px',
              transition:'background-color .3s ease, border-color .3s ease',
            }}>
              <span style={{ width:'7px', height:'7px', borderRadius:'50%',
                background:'var(--status)', boxShadow:'0 0 8px var(--status-glow)',
                flexShrink:0, display:'block', transition:'background-color .3s ease' }} />
              <div>
                <p style={{ fontFamily:"'DM Mono', monospace", fontSize:'11px',
                  color:'var(--text-primary)', margin:0, letterSpacing:'.06em', transition:'color .3s ease' }}>
                  Available for work
                </p>
                <p style={{ fontFamily:"'DM Mono', monospace", fontSize:'10px',
                  color:'var(--text-tertiary)', margin:0, letterSpacing:'.04em', transition:'color .3s ease' }}>
                  Open to roles &amp; freelance
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── scroll indicator ── */}
        <div className="scroll-indicator" style={{
          position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
        }}>
          <span className="scroll-label" style={{ fontFamily:"'DM Mono', monospace", fontSize:'9px',
            letterSpacing:'.2em', textTransform:'uppercase' }}>
            Scroll
          </span>
          <div className="scroll-line" />
        </div>

        {/* ══════════════════════════════════
            MOBILE LAYOUT (≤ 768px)
            Foto full-height background,
            fade ke warna bg tema di area nama.
        ══════════════════════════════════ */}
        <div className="hero-mobile-section">

          {/* Foto background */}
          <div className="m-photo-bg">
            <img src={PHOTO_URL} alt={personalInfo.name} />
            <div className="m-scanlines" />
            <div className="m-fade" />
          </div>
          <div className="m-grid" />
          <div className="m-accent-left" />

          {/* Day/night toggle — fixed corner, independent of the chip row
          <div className="mobile-toggle-slot">
            <ThemeToggle />
          </div> */}

          {/* Konten di atas foto */}
          <div className="m-content">

            {/* Atas: chips + status */}
            <div className="m-top">
              <div className="m-chips">
                <span className="m-chip">
                  <span className="m-chip-dot" style={{ background:'var(--chip-gold)' }} />
                  AI Engineer
                </span>
                <span className="m-chip">
                  <span className="m-chip-dot" style={{ background:'var(--accent-secondary)' }} />
                  Backend Developer
                </span>
              </div>
              <div className="m-status">
                <span className="m-sdot" />
                <div>
                  <p className="m-s-avail">Available for work</p>
                  <p className="m-s-open">Open to roles &amp; freelance</p>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="m-spacer" />

            {/* Nama */}
            <div className="m-name">
              <h1>
                {firstName}
                <span>{lastName}</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="m-tagline">
              <p>
                Building AI-powered systems and scalable backend solutions —
                from model development to production deployment. Precision at every layer.
              </p>
            </div>

            {/* Stats */}
            <div className="m-stats">
              <div className="m-stat">
                <p className="m-stat-n">10<span>+</span></p>
                <p className="m-stat-l">Projects</p>
              </div>
              <div className="m-sdiv" />
              <div className="m-stat">
                <p className="m-stat-n">AI</p>
                <p className="m-stat-l">Enthusiast</p>
              </div>
              <div className="m-sdiv" />
              <div className="m-stat">
                <p className="m-stat-n" style={{ fontSize:'18px' }}>Backend</p>
                <p className="m-stat-l">Developer | Engineer</p>
              </div>
              <div className="m-sdiv" />
              <div className="m-stat">
                <p className="m-stat-n" style={{ fontSize:'18px' }}>Software</p>
                <p className="m-stat-l">Developer | Engineer</p>
              </div>
            </div>

            {/* CTA */}
            <div className="m-cta">
              <a href="#portfolio" className="m-btn-p">
                View Work
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="var(--cta-primary-text)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#about" className="m-btn-o">Get in Touch</a>
            </div>

          </div>
        </div>
        {/* ══ end MOBILE LAYOUT ══ */}

      </section>
    </>
  );
};

export default Hero;