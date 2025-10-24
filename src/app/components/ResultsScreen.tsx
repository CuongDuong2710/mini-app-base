'use client';

import { useComposeCast } from '@coinbase/onchainkit/minikit';

interface ResultsScreenProps {
  score: number;
  userFid: number;
  username: string;
}

export default function ResultsScreen({ score, userFid, username }: ResultsScreenProps) {
  const { composeCast } = useComposeCast();

  const handleShare = () => {
    const shareUrl = `${process.env.NEXT_PUBLIC_URL}/share?score=${score}&user=${username}`;
    composeCast({
      text: `I scored ${score}% on Social Trivia! Can you beat me? @${username} FID: ${userFid}`,
      embeds: [shareUrl],
    });
  };

  // Optional: Save score on-chain (implement with wagmi)
  // useWriteContract({ address: process.env.CONTRACT_ADDRESS, ... });

  return (
    <div className="p-4 flex-1 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-4 text-center max-w-md">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎉</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
          <p className="text-lg text-gray-600 mb-4">Your Score:</p>
          <div className="text-5xl font-bold text-green-600 mb-4">{score}%</div>
        </div>
        
        <button
          onClick={handleShare}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
        >
          🚀 Share on Farcaster
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          Challenge your friends to beat your score!
        </p>
      </div>
    </div>
  );
}