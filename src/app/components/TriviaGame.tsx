'use client';

import { useState } from 'react';
import ResultsScreen from './ResultsScreen';

interface TriviaGameProps {
  userFid: number;
  username: string;
}

const questions = [
  {
    question: 'What is Base?',
    options: ['A Layer-1 blockchain', 'A Layer-2 on Ethereum', 'A DeFi protocol', 'A wallet'],
    correct: 1, // Index of correct option
  },
  {
    question: 'Who created Farcaster?',
    options: ['Vitalik Buterin', 'Dan Romero', 'Jesse Pollak', 'Elon Musk'],
    correct: 1,
  },
  {
    question: 'What is a Mini App?',
    options: ['A full mobile app', 'A web app in Farcaster/Base', 'A smart contract', 'An NFT'],
    correct: 1,
  },
];

export default function TriviaGame({ userFid, username }: TriviaGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    const newSelected = [...selectedOptions];
    newSelected[currentQuestion] = index;
    setSelectedOptions(newSelected);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let totalScore = 0;
      selectedOptions.forEach((selected, idx) => {
        if (selected === questions[idx].correct) totalScore += 1;
      });
      setScore(totalScore * (100 / questions.length)); // Percentage
    }
  };

  if (score !== null) {
    return <ResultsScreen score={score} userFid={userFid} username={username} />;
  }

  const q = questions[currentQuestion];

  return (
    <div className="p-4 flex-1 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">{q.question}</h2>
      {q.options.map((opt, idx) => (
        <div key={idx} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              checked={selectedOptions[currentQuestion] === idx}
              onChange={() => handleSelect(idx)}
              className="mr-2"
            />
            {opt}
          </label>
        </div>
      ))}
      <button
        onClick={handleNext}
        disabled={selectedOptions[currentQuestion] === undefined}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}