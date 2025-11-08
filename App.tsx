import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import { generateDogTrainingAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [generatedAdvice, setGeneratedAdvice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (prompt: string) => {
    if (!prompt.trim()) {
      setError("Veuillez entrer une question ou un mot-clé.");
      return;
    }

    setIsLoading(true);
    setGeneratedAdvice('');
    setError(null);

    try {
      const advice = await generateDogTrainingAdvice(prompt);
      setGeneratedAdvice(advice);
    } catch (err) {
      console.error(err);
      setError("Désolé, une erreur est survenue. Le modèle n'a pas pu répondre. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-sky-50 min-h-screen text-slate-800">
      <main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <Header />
        <div className="mt-8">
          <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        <div className="mt-8">
          <ResultsDisplay
            advice={generatedAdvice}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-slate-500">
        <p>Propulsé par l'IA - Doug Training</p>
      </footer>
    </div>
  );
};

export default App;
