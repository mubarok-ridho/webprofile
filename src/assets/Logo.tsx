import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 hover:scale-105"
    >
      {/* HURUF M (Background Layer - Off-White) */}
      <path
        d="M13.5 27V11.2L18.7 18.5C18.9 18.8 19.3 18.8 19.5 18.5L24.7 11.2V27H27.5V5H23.2L19.1 11.1L15 5H10.7V27H13.5Z"
        fill="#f0ece4"
        opacity="0.95"
      />
      
      {/* HURUF R (Foreground Layer - Gold) */}
      {/* Bagian Tiang Utama dan Loop Atas R yang mengunci anggun kaki kiri M */}
      <path
        d="M6.5 27H9.3V14.8H13.2C16.8 14.8 19.2 13.1 19.2 9.9C19.2 6.7 16.8 5 13.2 5H6.5V27ZM9.3 12.2V7.6H13.1C15 7.6 16.3 8.2 16.3 9.9C16.3 11.6 15 12.2 13.1 12.2H9.3Z"
        fill="#c8a96e"
      />
      
      {/* Kaki Diagonal R yang memotong tajam melintasi tengah M */}
      <path
        d="M12.4 14.8L18.2 27H21.5L15.3 14.8H12.4Z"
        fill="#c8a96e"
      />
    </svg>
  );
};

export default Logo;