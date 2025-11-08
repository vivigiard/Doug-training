import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LoadingSpinner from './LoadingSpinner';

interface ResultsDisplayProps {
  advice: string;
  isLoading: boolean;
  error: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ advice, isLoading, error }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
        <p className="font-bold">Oups !</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!advice) {
    return (
      <div className="bg-sky-100 text-center p-8 rounded-2xl border-2 border-dashed border-sky-300">
        <p className="text-slate-800 text-lg">
          Décrivez le comportement de votre chien pour recevoir des conseils personnalisés et bienveillants !
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[6px_6px_0px_#0f172a] border-2 border-slate-900 prose prose-slate max-w-none prose-h2:text-slate-800 prose-h2:font-extrabold prose-h3:text-slate-700 prose-strong:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 border-b-2 border-sky-200 pb-2 mb-4" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-slate-700 mt-6 mb-3" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-none p-0 space-y-2" {...props} />,
          li: ({ node, children, ...props }) => (
            <li className="flex items-start" {...props}>
              <span className="text-blue-500 font-bold mr-3 mt-1">🐾</span>
              <span className="flex-1">{children}</span>
            </li>
          ),
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-3" {...props} />,
          p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />,
        }}
      >
        {advice}
      </ReactMarkdown>
    </div>
  );
};

export default ResultsDisplay;
