
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LoadingSpinner from './LoadingSpinner.js';

const ResultsDisplay = ({ advice, isLoading, error }) => {
  if (isLoading) {
    return React.createElement(LoadingSpinner, null);
  }

  if (error) {
    return React.createElement(
      "div",
      { className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg", role: "alert" },
      React.createElement("p", { className: "font-bold" }, "Oups !"),
      React.createElement("p", null, error)
    );
  }

  if (!advice) {
    return React.createElement(
      "div",
      { className: "bg-sky-100 text-center p-8 rounded-2xl border-2 border-dashed border-sky-300" },
      React.createElement(
        "p",
        { className: "text-slate-800 text-lg" },
        "Décrivez le comportement de votre chien pour recevoir des conseils personnalisés et bienveillants !"
      )
    );
  }

  return React.createElement(
    "div",
    { className: "bg-white p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_#0f172a] border-2 border-slate-900 prose prose-slate max-w-none prose-h2:text-slate-800 prose-h2:font-extrabold prose-h3:text-slate-700 prose-strong:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-700" },
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [remarkGfm],
        components: {
          h2: ({ ...props }) => React.createElement("h2", { className: "text-2xl md:text-3xl font-extrabold text-slate-800 border-b-2 border-sky-200 pb-2 mb-4", ...props }),
          h3: ({ ...props }) => React.createElement("h3", { className: "text-xl font-bold text-slate-700 mt-6 mb-3", ...props }),
          ul: ({ ...props }) => React.createElement("ul", { className: "list-none p-0 space-y-2", ...props }),
          li: ({ children }) => React.createElement(
            "li",
            { className: "flex items-start" },
            React.createElement("span", { className: "text-blue-500 font-bold mr-3 mt-1" }, "🐾"),
            React.createElement("span", { className: "flex-1" }, children)
          ),
          ol: ({ ...props }) => React.createElement("ol", { className: "list-decimal list-inside space-y-3", ...props }),
          p: ({ ...props }) => React.createElement("p", { className: "leading-relaxed", ...props })
        },
        children: advice
      }
    )
  );
};

export default ResultsDisplay;