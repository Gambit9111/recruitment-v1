// src/components/Logo.tsx
import React from 'react';

const BigLogo: React.FC = () => {
  return (
      <div className="absolute right-[-1.5rem] top-36 w-48 h-48 border border-color-white/50 rounded-full flex items-center justify-center ml-6 mt-6">
        <span className="uppercase tracking-[0.15em] text-3xl font-light pl-1 text-color-white/50">ENGNR.</span>
      </div>
  );
};

export default BigLogo;