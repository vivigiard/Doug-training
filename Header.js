
import React from 'react';
import DogIcon from './icons/DogIcon.js';

const Header = () => {
  return React.createElement(
    "header",
    { className: "text-center" },
    React.createElement(
      "div",
      { className: "flex flex-col items-center justify-center gap-2" },
      React.createElement(DogIcon, { className: "h-20 w-20" }),
      React.createElement(
        "h1",
        { className: "text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight" },
        "Doug Training"
      )
    ),
    React.createElement(
      "p",
      { className: "mt-3 text-lg text-slate-600 max-w-2xl mx-auto" },
      "Votre guide bienveillant pour une relation harmonieuse avec votre chien."
    )
  );
};

export default Header;