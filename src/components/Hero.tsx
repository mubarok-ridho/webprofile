import React from 'react';
import { personalInfo } from '../data/profileData';

const PHOTO_URL =
  'https://res.cloudinary.com/doafwrddd/image/upload/v1777464247/wmremove-transformed_4_qkvhin.jpg';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap');

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes pulseGlow { 0%,100% { box-shadow:0 0 6px rgba(92,184,112,.4) } 50% { box-shadow:0 0 12px rgba(92,184,112,.85) } }

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
    background: #e8e0d0; color: #0a0a0a;
    font-family: 'DM Mono', monospace; font-size: 12px;
    letter-spacing: .08em; text-decoration: none;
    transition: background .2s, transform .15s;
  }
  .cta-primary:hover { background: #f0e8d6; transform: translateY(-1px) }

  .cta-outline {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px; padding: 12px 28px;
    border: 1px solid rgba(255,255,255,.18); color: #a8a090;
    font-family: 'DM Mono', monospace; font-size: 12px;
    letter-spacing: .08em; text-decoration: none;
    transition: border-color .2s, color .2s, transform .15s;
  }
  .cta-outline:hover { border-color: rgba(255,255,255,.4); color: #d4cfc6; transform: translateY(-1px) }

  /* ── stat block ── */
  .stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: 28px; color: #f0ece4; line-height: 1;
  }
  .stat-label {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: .15em; color: #5a5650;
    text-transform: uppercase; margin-top: 4px;
  }
  .stat-divider {
    width: 1px; background: rgba(255,255,255,.08);
    height: 40px; align-self: center; flex-shrink: 0;
  }

  /* ── role chips ── */
  .role-chip {
    display: inline-flex; align-items: center; gap: 6px;
    border: 1px solid rgba(255,255,255,.1); padding: 5px 12px;
    font-family: 'DM Mono', monospace; font-size: 11px;
    letter-spacing: .1em; color: #6a6460;
  }
  .role-chip-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: #c8a96e; flex-shrink: 0;
  }

  /* ── scroll indicator ── */
  .scroll-line {
    width: 1px; height: 56px;
    background: linear-gradient(to bottom, transparent, #4a4540, transparent);
    animation: fadeIn 1s ease 1.2s both;
  }

  /* ── photo hover (desktop) ── */
  .img-wrap:hover img { filter: grayscale(0%) brightness(1.04); transform: scale(1.02) }
  img { transition: filter .8s ease, transform .8s ease }

  /* ── corner brackets (desktop) ── */
  .grid-corner {
    position: absolute; width: 16px; height: 16px;
    border-color: rgba(200,169,110,.4); border-style: solid;
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
  }

  /* ════════════════════════════════════════════════════════════
     MOBILE ≤ 768px  —  FOTO FULL-HEIGHT BACKGROUND
     Foto mengisi seluruh layar sebagai background,
     fade dari transparan ke hitam mulai dari tengah ke bawah,
     konten (chips+status di atas, nama+teks+stats+cta di bawah)
     melayang di atas foto.
  ════════════════════════════════════════════════════════════ */
  @media (max-width: 768px) {

    /* Sembunyikan semua desktop layout */
    .hero-main-layout    { display: none !important }
    .scroll-indicator    { display: none !important }

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
      filter: grayscale(25%) brightness(.72) contrast(1.1) !important;
      display: block !important;
    }

    /* Scanlines di atas foto */
    .m-scanlines {
      position: absolute !important;
      inset: 0 !important; z-index: 2 !important;
      pointer-events: none !important;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 2px,
        rgba(0,0,0,.055) 2px, rgba(0,0,0,.055) 4px
      ) !important;
    }

    /* Gradient fade: atas jernih → bawah hitam penuh */
    .m-fade {
      position: absolute !important;
      inset: 0 !important; z-index: 3 !important;
      pointer-events: none !important;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 32%,
        rgba(12,11,9,.5)  50%,
        rgba(12,11,9,.88) 63%,
        #0c0b09           76%
      ) !important;
    }

    /* Grid texture */
    .m-grid {
      position: absolute !important;
      inset: 0 !important; z-index: 4 !important;
      pointer-events: none !important;
      background-image:
        linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px) !important;
      background-size: 40px 40px !important;
    }

    /* Accent bar kiri */
    .m-accent-left {
      position: absolute !important;
      left: 0 !important; top: 0 !important; height: 58% !important;
      width: 3px !important; z-index: 5 !important;
      background: linear-gradient(
        to bottom, transparent 8%, #c8a96e 45%, #c8a96e 55%, transparent 92%
      ) !important;
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

    /* ── Atas: chips + status ── */
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
      border: 1px solid rgba(255,255,255,.14) !important;
      padding: 4px 10px !important;
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; letter-spacing: .1em !important; color: #7a7268 !important;
      background: rgba(12,11,9,.25) !important;
    }
    .m-chip-dot { width: 4px !important; height: 4px !important; border-radius: 50% !important; flex-shrink: 0 !important; }

    .m-status {
      display: flex !important; align-items: center !important; gap: 7px !important;
    }
    .m-sdot {
      width: 6px !important; height: 6px !important; border-radius: 50% !important;
      background: #5cb870 !important; flex-shrink: 0 !important; display: block !important;
      animation: pulseGlow 2s ease-in-out infinite !important;
    }
    .m-status p { margin: 0 !important; font-family: 'DM Mono', monospace !important; letter-spacing: .05em !important; line-height: 1.4 !important; }
    .m-s-avail  { font-size: 9.5px !important; color: #b0a898 !important }
    .m-s-open   { font-size: 8px !important;   color: #5a5650 !important }

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
      color: #f4f0e8 !important; font-weight: 400 !important;
    }
    .m-name h1 span { color: #c8a96e !important; display: block !important }

    .m-tagline {
      padding: 0 22px !important;
      animation: fadeUp .6s ease .22s both !important;
    }
    .m-tagline p {
      font-family: 'Outfit', sans-serif !important;
      font-size: 13px !important; line-height: 1.75 !important;
      color: #5a5650 !important; margin: 0 0 0 !important; font-weight: 300 !important;
    }

    /* Stats: scroll horizontal */
    .m-stats {
      display: flex !important; align-items: center !important;
      overflow-x: auto !important; -webkit-overflow-scrolling: touch !important;
      scrollbar-width: none !important; gap: 0 !important;
      padding: 16px 22px !important;
      border-top: 1px solid rgba(255,255,255,.07) !important;
      border-bottom: 1px solid rgba(255,255,255,.07) !important;
      margin: 20px 0 22px !important;
      animation: fadeUp .6s ease .28s both !important;
    }
    .m-stats::-webkit-scrollbar { display: none !important }
    .m-stat { flex: 0 0 auto !important; padding-right: 18px !important }
    .m-stat-n {
      font-family: 'DM Serif Display', serif !important;
      font-size: 22px !important; color: #f0ece4 !important; line-height: 1 !important;
    }
    .m-stat-n span { font-size: 15px !important; color: #c8a96e !important }
    .m-stat-l {
      font-family: 'DM Mono', monospace !important;
      font-size: 7.5px !important; letter-spacing: .1em !important;
      color: #3e3c38 !important; text-transform: uppercase !important;
      margin-top: 3px !important; white-space: nowrap !important;
    }
    .m-sdiv {
      width: 1px !important; background: rgba(255,255,255,.08) !important;
      height: 28px !important; flex-shrink: 0 !important;
      margin: 0 18px !important; align-self: center !important;
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
      background: #e8e0d0 !important; color: #0a0a0a !important;
      font-family: 'DM Mono', monospace !important; font-size: 11px !important;
      letter-spacing: .07em !important; text-decoration: none !important;
    }
    .m-btn-o {
      flex: 1 !important; display: inline-flex !important;
      align-items: center !important; justify-content: center !important;
      padding: 13px 14px !important;
      border: 1px solid rgba(255,255,255,.15) !important; color: #7a7268 !important;
      font-family: 'DM Mono', monospace !important; font-size: 11px !important;
      letter-spacing: .07em !important; text-decoration: none !important;
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
`;

const Hero: React.FC = () => {
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName  = nameParts.slice(1).join(' ');

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

        {/* ══════════════════════════════════
            DESKTOP LAYOUT (> 768px)
        ══════════════════════════════════ */}

        {/* ── grid texture ── */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px' }}
        />

        {/* ── warm radial glow ── */}
        <div style={{ position:'absolute', left:'-10%', top:'50%', transform:'translateY(-50%)',
          width:'600px', height:'600px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(200,140,60,.07) 0%, transparent 70%)',
          pointerEvents:'none' }}
        />

        {/* ── decorative circle rings ── */}
        <div style={{ position:'absolute', right:'-80px', top:'50%', transform:'translateY(-50%)',
          width:'420px', height:'420px', borderRadius:'50%',
          border:'1px solid rgba(255,255,255,.04)', pointerEvents:'none' }}
        />
        <div style={{ position:'absolute', right:'20px', top:'50%', transform:'translateY(-50%)',
          width:'280px', height:'280px', borderRadius:'50%',
          border:'1px solid rgba(255,255,255,.05)', pointerEvents:'none' }}
        />

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
                <span className="role-chip-dot" />
                AI Engineer
              </span>
              <span className="role-chip">
                <span className="role-chip-dot" style={{ background:'#7090c8' }} />
                Backend Developer
              </span>
            </div>

            <div className="hero-name" style={{ marginBottom:'28px' }}>
              <h1 style={{
                fontFamily:"'DM Serif Display', serif",
                fontSize:'clamp(52px, 7vw, 88px)', lineHeight:.95,
                margin:0, color:'#f4f0e8', fontWeight:400,
              }}>
                {firstName}<br />
                <span style={{ color:'#c8a96e' }}>{lastName}</span>
              </h1>
            </div>

            <div className="hero-sub">
              <p style={{
                fontSize:'15px', lineHeight:1.8, color:'#6a6460',
                maxWidth:'420px', margin:'0 0 40px', fontWeight:300,
              }}>
                Building AI-powered systems and scalable backend solutions —
                from model development to production deployment. Precision at every layer.
              </p>
            </div>

            <div className="hero-stats" style={{
              display:'flex', alignItems:'center', gap:'28px',
              marginBottom:'44px', padding:'24px 0',
              borderTop:'1px solid rgba(255,255,255,.06)',
              borderBottom:'1px solid rgba(255,255,255,.06)',
            }}>
              <div>
                <p className="stat-num">10<span style={{ fontSize:'18px', color:'#c8a96e' }}>+</span></p>
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
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#about" className="cta-outline">Get in Touch</a>
            </div>

          </div>

          {/* RIGHT COLUMN — foto desktop */}
          <div className="hero-img" style={{ flex:'0 0 auto', position:'relative', alignSelf:'center' }}>
            <div style={{ position:'absolute', inset:'-20px',
              border:'1px solid rgba(200,169,110,.12)', borderRadius:'2px' }} />
            <div className="grid-corner" style={{ top:-4, left:-4,   borderWidth:'1px 0 0 1px' }} />
            <div className="grid-corner" style={{ top:-4, right:-4,  borderWidth:'1px 1px 0 0' }} />
            <div className="grid-corner" style={{ bottom:-4, left:-4,  borderWidth:'0 0 1px 1px' }} />
            <div className="grid-corner" style={{ bottom:-4, right:-4, borderWidth:'0 1px 1px 0' }} />
            <div className="img-wrap" style={{
              width:'300px', height:'380px', position:'relative',
              overflow:'hidden', background:'#1a1814',
            }}>
              <div style={{
                position:'absolute', inset:0, zIndex:2, pointerEvents:'none',
                background:'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.04) 2px, rgba(0,0,0,.04) 4px)',
              }} />
              <img src={PHOTO_URL} alt={personalInfo.name} style={{
                width:'100%', height:'100%', objectFit:'cover',
                filter:'grayscale(30%) brightness(.9) contrast(1.05)', display:'block',
              }} />
            </div>
            <div style={{
              position:'absolute', bottom:'-16px', left:'-16px',
              background:'#141210', border:'1px solid rgba(255,255,255,.1)',
              padding:'10px 16px', display:'flex', alignItems:'center', gap:'10px',
            }}>
              <span style={{ width:'7px', height:'7px', borderRadius:'50%',
                background:'#5cb870', boxShadow:'0 0 8px rgba(92,184,112,.6)',
                flexShrink:0, display:'block' }} />
              <div>
                <p style={{ fontFamily:"'DM Mono', monospace", fontSize:'11px',
                  color:'#c8c0b4', margin:0, letterSpacing:'.06em' }}>
                  Available for work
                </p>
                <p style={{ fontFamily:"'DM Mono', monospace", fontSize:'10px',
                  color:'#4a4640', margin:0, letterSpacing:'.04em' }}>
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
          <span style={{ fontFamily:"'DM Mono', monospace", fontSize:'9px',
            letterSpacing:'.2em', color:'#2e2c28', textTransform:'uppercase' }}>
            Scroll
          </span>
          <div className="scroll-line" />
        </div>

        {/* ══════════════════════════════════
            MOBILE LAYOUT (≤ 768px)
            Foto full-height background,
            fade ke hitam di area nama.
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

          {/* Konten di atas foto */}
          <div className="m-content">

            {/* Atas: chips + status */}
            <div className="m-top">
              <div className="m-chips">
                <span className="m-chip">
                  <span className="m-chip-dot" style={{ background:'#c8a96e' }} />
                  AI Engineer
                </span>
                <span className="m-chip">
                  <span className="m-chip-dot" style={{ background:'#7090c8' }} />
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
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
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