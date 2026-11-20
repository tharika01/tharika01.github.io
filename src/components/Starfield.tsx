import React, { useMemo } from 'react';

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  blue: boolean;
}

interface StarfieldProps {
  count?: number;
}

const Starfield: React.FC<StarfieldProps> = ({ count = 180 }) => {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 0.7,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2.5,
        blue: Math.random() < 0.22,
      })),
    [count]
  );

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.blue ? '#85b6ff' : '#ffffff',
            boxShadow: star.blue
              ? '0 0 4px rgba(133,182,255,0.8)'
              : '0 0 3px rgba(255,255,255,0.6)',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
