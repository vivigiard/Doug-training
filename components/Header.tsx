import React from 'react';
import DogIcon from './icons/DogIcon';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <DogIcon className="h-20 w-20" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
          Doug Training
        </h1>
      </div>
      <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
        Votre guide bienveillant pour une relation harmonieuse avec votre chien.
      </p>
    </header>
  );
};

export default Header;
