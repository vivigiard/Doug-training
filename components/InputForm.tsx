import React, { useState } from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface InputFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-[6px_6px_0px_#0f172a] border-2 border-slate-900">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="dog-behavior" className="block text-lg font-semibold text-slate-700 mb-2">
          Quel comportement souhaitez-vous travailler ?
        </label>
        <textarea
          id="dog-behavior"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: aboiements, anxiété de séparation, rappel..."
          className="w-full h-28 p-4 text-base bg-sky-100 border-2 border-slate-400 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors duration-200 resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] hover:shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_#0f172a] disabled:active:translate-x-0 disabled:active:translate-y-0"
        >
          <SparklesIcon className="h-5 w-5" />
          <span>{isLoading ? 'Génération en cours...' : 'Obtenir des conseils'}</span>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
