// src/components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
      <div className="w-[5.5rem] h-[5.5rem] border-2 border-color-white rounded-full flex items-center justify-center ml-6 mt-6">
        <span className="uppercase font-medium tracking-[0.15em] text-sm pl-1">ENGNR.</span>
      </div>
  );
};

export default Logo;