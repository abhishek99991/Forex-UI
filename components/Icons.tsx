
import React from 'react';

// UI Icons
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 7.973.659a.75.75 0 01.227.873l-.43 1.688A12 12 0 0112 6.75c-2.433 0-4.72.63-6.77 1.734a.75.75 0 01-.849-.228L3.03 6.63A.75.75 0 013.257 5.5l.43-1.688A12 12 0 0112 3zM3.75 7.5c0-1.036.84-1.875 1.875-1.875h12.75c1.035 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V7.5z" />
  </svg>
);


// Bottom Nav Icons
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const TradeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  </svg>
);

export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);


// Flag Icons
export const UsaFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#B22234" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/>
    <path fill="#FFF" d="M36 10H0v2h36v-2zm0 4H0v2h36v-2zm0 4H0v2h36v-2zm0 4H0v2h36v-2z"/>
    <path fill="#3C3B6E" d="M18 19H0V5h18v14z"/>
    <path fill="#FFF" d="M3 13.91l-1.33 1L2.21 13l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm4 0l-1.33 1L6.21 13l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm4 0l-1.33 1L10.21 13l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm-6-4l-1.33 1L4.21 9l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm4 0l-1.33 1L8.21 9l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm4 0l-1.33 1L12.21 9l-1.33-.09.81-1.21-.08-1.33 1.22.82 1.21-.81-.09 1.33.82 1.22-1.33.08zm2-1.09l.82 1.22-1.33.08L14.67 11l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zm-12 2l.82 1.22-1.33.08L2.67 11l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zm4 0l.82 1.22-1.33.08L6.67 11l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zm4 0l.82 1.22-1.33.08L10.67 11l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zM3 15.91l.82 1.22-1.33.08L2.67 17l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zm4 0l.82 1.22-1.33.08L6.67 17l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33zm4 0l.82 1.22-1.33.08L10.67 17l-.81-1.21.08-1.33 1.21.81 1.22-.82.08 1.33z"/>
  </svg>
);

export const BelgiumFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#F7D046" d="M24 5H12v26h12V5z"/>
    <path fill="#222" d="M12 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"/>
    <path fill="#CE2028" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
  </svg>
);

export const EUFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#005BBB" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <path fill="#FFD500" d="m18 7.6-1.2 3.6h-3.8l3 2.3-1.1 3.7L18 15l3.1 2.2-1.1-3.7 3-2.3h-3.8L18 7.6zm-6.5 12.1-1.1-3.7-3.1 2.3h3.8l1.2-3.6 1.2 3.6h3.8l-3.1-2.3-1.1 3.7-3.1-2.2zm13 0-1.1-3.7-3.1 2.3h3.8l1.2-3.6 1.2 3.6h3.8l-3.1-2.3-1.1 3.7-3.1-2.2z"/>
  </svg>
);

export const GBFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#00247D" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <path fill="#FFF" d="M36 9.25v-2.5L20.25 15h-4.5L0 6.75v2.5L13.5 17.25v1.5H12L0 27.25v2.5L15.75 21h4.5L36 29.25v-2.5L22.5 18.75v-1.5H24L36 9.25z"/>
    <path fill="#CF142B" d="m22.2 18 13.8 9.2V30l-13.8-9.2v-1.2zm-8.4 0L0 27.2V30l13.8-9.2v-1.2zM0 6.8V9l13.8 9.2v-1.2L0 6.8zm36 0V9L22.2 18.2v-1.2L36 6.8z"/>
    <path fill="#FFF" d="M21 5h-6v26h6V5zM0 15v6h36v-6H0z"/>
    <path fill="#CF142B" d="M20 5h-4v26h4V5zM0 16v4h36v-4H0z"/>
  </svg>
);

export const JPFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <circle fill="#BC002D" cx="18" cy="18" r="7"/>
  </svg>
);

export const AUFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#00247D" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <path fill="#FFF" d="M18 5v5.5L4.5 5H0v1.5L12 12H5v3h7l-12 7.5V24h4.5l13.5-8.5V21h3v-7h-3v-2h3V9h-3v3h-2L3 5h15z"/>
    <path fill="#CF142B" d="M17 5v4.5L6.5 5H4v1l8 5H5v2h7l-8 5v1h2.5l9.5-6V21h2v-5h-2v-2h2V9h-2v4h-1L1.5 5h15.5z"/>
    <path fill="#FFF" d="M10.1 27.5 9 24.3l-1.1 3.2h-3.3l2.7 2-1 3.3 2.7-2 2.7 2-1-3.3 2.7-2zM27 10.4l-.7-.1-1.3.4.4-1.3-.1-.7.9.9 1.2-.5-.5 1.2.9.9zm-6.2 14.2-2.1 1.2v-2.5l-2.1-1.2 2.1-1.2v-2.5l2.1 1.2 2.1-1.2v2.5l2.1 1.2-2.1 1.2v2.5z"/>
  </svg>
);

export const CHFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#DA291C" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <path fill="#FFF" d="M26 16h-6v-6h-4v6h-6v4h6v6h4v-6h6z"/>
  </svg>
);

export const NZFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#00247D" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"/>
    <path fill="#FFF" d="M18 5v5.5L4.5 5H0v1.5L12 12H5v3h7l-12 7.5V24h4.5l13.5-8.5V21h3v-7h-3v-2h3V9h-3v3h-2L3 5h15z"/>
    <path fill="#CF142B" d="M17 5v4.5L6.5 5H4v1l8 5H5v2h7l-8 5v1h2.5l9.5-6V21h2v-5h-2v-2h2V9h-2v4h-1L1.5 5h15.5z"/>
    <path fill="#CF142B" d="m27.3 12.3-1 .6v-1.3l-1-.6 1-.6v-1.2l1 .6 1-.6v1.2l-1 .6zm-2.1 6.8-1 .6v-1.2l-1-.6 1-.6v-1.3l1 .6 1-.6v1.3l-1 .6zm5.2-2.8-1 .6v-1.2l-1-.6 1-.6V11l1 .6 1-.6v1.2l-1 .6zM28.3 25l-1 .6V24.4l-1-.6 1-.6v-1.2l1 .6 1-.6v1.2l-1 .6z"/>
    <path fill="#FFF" d="m27 12.5-1.3.8v-1.6L24.4 11l1.3-.7v-1.6l1.3.8 1.3-.8v1.6l-1.3.7 1.3.8v1.6zm-1.8 6.8-1.3.8V24.5l-1.3-.7 1.3-.8v-1.6l1.3.8 1.3-.8v1.6l-1.3.7 1.3.8v1.6zm5-2.8-1.3.8v-1.6l-1.3-.7 1.3-.8v-1.6l1.3.8 1.3-.8v1.6l-1.3.7 1.3.8v1.6zM28 25.2l-1.3.8v-1.6l-1.3-.7 1.3-.8v-1.6l1.3.8 1.3-.8v1.6l-1.3.7 1.3.8v1.6z"/>
  </svg>
);

export const CAFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <path fill="#ED2939" d="M26 5H10v26h16V5z"/>
    <path fill="#FFF" d="M10 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h6V5zm16 26h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-6v26z"/>
    <path fill="#ED2939" d="M18 9.5 21 15l-3 1-2-4-2 4-3-1 3-5.5-3-2.5h3.5l1-4 1 4h3.5l-3 2.5zM22 17l-1 5-3-1.5L15 22l-1-5h-3l4 6v5h2v-5l4-6z"/>
  </svg>
);
