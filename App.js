
import React, { useState, useCallback } from 'react';
import Header from './components/Header.js';
import InputForm from './components/InputForm.js';
import ResultsDisplay from './components/ResultsDisplay.js';
import { generateDogTrainingAdvice } from './services/geminiService.js';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedAdvice, setGeneratedAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(async (prompt) => {
    if (!prompt.trim()) {
      setError("Veuillez entrer une question ou un mot-clé.");
      return;
    }

    setIsLoading(true);
    setGeneratedAdvice('');
    setError(null);
    setUserInput(prompt);

    try {
      const advice = await generateDogTrainingAdvice(prompt);
      setGeneratedAdvice(advice);
    } catch (err) {
      console.error(err);
      setError("Désolé, une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return React.createElement(
    "div",
    { className: "bg-sky-50 min-h-screen text-slate-800" },
    React.createElement(
      "main",
      { className: "container mx-auto max-w-4xl px-4 py-8 md:py-12" },
      React.createElement(Header, null),
      React.createElement(
        "div",
        { className: "mt-8" },
        React.createElement(InputForm, { onSubmit: handleSubmit, isLoading: isLoading })
      ),
      React.createElement(
        "div",
        { className: "mt-8" },
        React.createElement(ResultsDisplay, {
          advice: generatedAdvice,
          isLoading: isLoading,
          error: error
        })
      )
    ),
    React.createElement(
      "footer",
      { className: "text-center py-4 text-sm text-slate-500" },
      React.createElement("p", null, "Propulsé par l'IA - Doug Training")
    )
  );
};

export default App;