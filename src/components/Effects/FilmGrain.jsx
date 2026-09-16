import React from 'react';

const FilmGrain = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay">
      <svg className="absolute inset-0 w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default FilmGrain;
