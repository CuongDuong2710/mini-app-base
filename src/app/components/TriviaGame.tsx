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
    correct: 1,
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
  {
    question: 'What consensus mechanism does Base use?',
    options: ['Proof of Work', 'Proof of Stake', 'Delegated Proof of Stake', 'Optimistic Rollup'],
    correct: 3,
  },
  {
    question: 'Which company built Base?',
    options: ['Ethereum Foundation', 'Coinbase', 'ConsenSys', 'Polygon'],
    correct: 1,
  },
  {
    question: 'What is the native token of Base?',
    options: ['BASE', 'ETH', 'USDC', 'CBT'],
    correct: 1,
  },
  {
    question: 'Farcaster is primarily a:',
    options: ['DEX', 'Social protocol', 'Gaming platform', 'NFT marketplace'],
    correct: 1,
  },
  {
    question: 'What framework is used for Base Mini Apps?',
    options: ['React Native', 'Flutter', 'Next.js/React', 'Vue.js'],
    correct: 2,
  },
  {
    question: 'Base is compatible with:',
    options: ['Bitcoin scripts', 'Ethereum Virtual Machine', 'Solana runtime', 'Cardano plutus'],
    correct: 1,
  },
  {
    question: 'What is OnchainKit?',
    options: ['A wallet', 'A development toolkit by Coinbase', 'A DeFi protocol', 'An NFT standard'],
    correct: 1,
  },
  {
    question: 'Farcaster uses which data structure for social graphs?',
    options: ['Centralized database', 'IPFS', 'Hubs (decentralized)', 'Blockchain only'],
    correct: 2,
  },
  {
    question: 'Base transaction fees are paid in:',
    options: ['BASE tokens', 'ETH', 'USDC', 'Gas tokens'],
    correct: 1,
  },
  {
    question: 'What is a Farcaster Frame?',
    options: ['A photo filter', 'Interactive content in casts', 'A wallet interface', 'A smart contract'],
    correct: 1,
  },
  {
    question: 'Base mainnet launched in:',
    options: ['2022', '2023', '2024', '2025'],
    correct: 1,
  },
  {
    question: 'Mini Apps can interact with:',
    options: ['Only Farcaster', 'Only Base', 'Both Farcaster and Base', 'Neither'],
    correct: 2,
  },
  {
    question: 'What is the Base block time?',
    options: ['1 second', '2 seconds', '12 seconds', '15 seconds'],
    correct: 1,
  },
  {
    question: 'Farcaster usernames are called:',
    options: ['Handles', 'Fnames', 'Casts', 'Profiles'],
    correct: 1,
  },
  {
    question: 'Base uses which scaling solution?',
    options: ['State channels', 'Plasma', 'Optimistic rollups', 'zk-rollups'],
    correct: 2,
  },
  {
    question: 'What programming language is used for Base smart contracts?',
    options: ['Rust', 'Solidity', 'Move', 'Cairo'],
    correct: 1,
  },
  {
    question: 'Mini Apps are deployed on:',
    options: ['App stores only', 'Web platforms', 'Blockchain directly', 'IPFS only'],
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
    <div className="p-4 flex-1 flex flex-col justify-center bg-white rounded-lg shadow-lg mx-4 my-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{q.question}</h2>
      <div className="space-y-3">
        {q.options.map((opt, idx) => (
          <div key={idx} className="mb-2">
            <label className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
              <input
                type="radio"
                checked={selectedOptions[currentQuestion] === idx}
                onChange={() => handleSelect(idx)}
                className="mr-3 w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700 text-lg">{opt}</span>
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={selectedOptions[currentQuestion] === undefined}
        className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}