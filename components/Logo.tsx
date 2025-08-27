import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'full' | 'icon' | 'name';
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 760, 
  height = 160, 
  variant = 'full',
  color = 'currentColor'
}) => {
  const aspectRatio = 760 / 160; // 4.75:1
  const calculatedHeight = width / aspectRatio;
  const finalHeight = height || calculatedHeight;

  const getViewBox = () => {
    switch (variant) {
      case 'icon':
        return '0 0 230 176'; // Just the icon portion
      case 'name':
        return '240 0 520 160'; // Just the name portion
      default:
        return '0 0 760 160'; // Full logo
    }
  };

  const style = {
    '--logo-fg': color,
    '--accent1': '#a855f7', // purple-500 to match project theme
    '--accent2': '#ec4899'  // pink-500 to match project theme
  } as React.CSSProperties;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox={getViewBox()}
      width={width}
      height={finalHeight}
      className={className}
      style={style}
      role="img" 
      aria-labelledby="logo-title logo-desc"
    >
      <title id="logo-title">Silambarasu Arunkumaravel — Full-Stack Web Developer & Nature Lover</title>
      <desc id="logo-desc">A logo with code brackets and a sprout icon beside the name and tagline.</desc>

      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent1, #a855f7)"/>
          <stop offset="100%" stopColor="var(--accent2, #ec4899)"/>
        </linearGradient>
        <style>{`
          .bracket{fill:none;stroke:var(--logo-fg, currentColor);stroke-width:14;stroke-linecap:round;stroke-linejoin:round}
          .stem{fill:none;stroke:var(--logo-fg, currentColor);stroke-width:12;stroke-linecap:round}
          .leaf{fill:url(#leafGrad)}
          .name{font:700 36px/1.2 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial}
          .tag {font:600 14px/1.4 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial; letter-spacing:1.5px}
        `}</style>
      </defs>

      {(variant === 'full' || variant === 'icon') && (
        <g transform="translate(8,8)">
          <path className="bracket" d="M86 24 L50 88 L86 152"/>
          <path className="bracket" d="M170 24 L206 88 L170 152"/>
          <path className="stem" d="M128 144 C128 126 128 108 128 88"/>
          <path className="leaf" d="M128 94 C110 86, 92 100, 96 120 C113 120, 124 110, 128 94 Z"/>
          <path className="leaf" d="M128 108 C146 100, 162 112, 160 130 C144 130, 134 120, 128 108 Z"/>
        </g>
      )}

      {(variant === 'full' || variant === 'name') && (
        <g transform="translate(240, 54)" fill="var(--logo-fg, currentColor)">
          <text className="name" x="0" y="0">Silambarasu Arunkumaravel</text>
          <text className="tag" x="0" y="28">FULL-STACK WEB DEVELOPER • NATURE LOVER</text>
        </g>
      )}
    </svg>
  );
};

export default Logo;