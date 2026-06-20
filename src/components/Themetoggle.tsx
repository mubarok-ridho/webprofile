import React from 'react';
import { useTheme } from '../context/Themecontext';

const TOGGLE_STYLES = `
  .theme-toggle-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 52px;
    height: 28px;
    padding: 0;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    background: var(--bg-sunken);
    cursor: pointer;
    flex-shrink: 0;
    -webkit-tap-highlight-color: transparent;
    transition: border-color .3s ease, background-color .3s ease, transform .15s ease;
  }
  .theme-toggle-switch:hover { border-color: var(--accent); transform: scale(1.05); }
  .theme-toggle-switch:active { transform: scale(.92); }
  .theme-toggle-switch:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

  .tts-thumb {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent);
    transform: translateX(0);
    transition: transform .45s cubic-bezier(.65,0,.35,1), background-color .4s ease;
  }
  .theme-toggle-switch[aria-checked="true"] .tts-thumb { transform: translateX(24px); }

  .tts-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--cta-primary-text);
    transition: opacity .3s ease, transform .45s cubic-bezier(.65,0,.35,1);
  }
  .tts-sun  { opacity: 1; transform: translate(-50%,-50%) rotate(0deg) scale(1); }
  .tts-moon { opacity: 0; transform: translate(-50%,-50%) rotate(-90deg) scale(.4); }
  .theme-toggle-switch[aria-checked="true"] .tts-sun  { opacity: 0; transform: translate(-50%,-50%) rotate(90deg) scale(.4); }
  .theme-toggle-switch[aria-checked="true"] .tts-moon { opacity: 1; transform: translate(-50%,-50%) rotate(0deg) scale(1); }
`;

interface ThemeToggleProps {
  className?: string;
  style?: React.CSSProperties;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, style }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <style>{TOGGLE_STYLES}</style>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'day' : 'night'} mode`}
        className={`theme-toggle-switch ${className ?? ''}`}
        style={style}
        onClick={toggleTheme}
      >
        <span className="tts-thumb">
          <svg
            className="tts-icon tts-sun"
            width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg
            className="tts-icon tts-moon"
            width="13" height="13" viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
          </svg>
        </span>
      </button>
    </>
  );
};

export default ThemeToggle;