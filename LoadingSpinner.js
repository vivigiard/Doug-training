
import React from 'react';

const LoadingSpinner = () => {
  return React.createElement(
    "div",
    { className: "flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-[6px_6px_0px_#0f172a] border-2 border-slate-900" },
    React.createElement("div", { className: "w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin" }),
    React.createElement(
      "p",
      { className: "mt-4 text-lg text-blue-700 font-semibold" },
      "Un instant, notre expert prépare ses meilleurs conseils..."
    )
  );
};

export default LoadingSpinner;