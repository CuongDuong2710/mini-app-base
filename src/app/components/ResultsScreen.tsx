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
      <h2 className="text-3xl font-bold mb-4">Your Score: {score}%</h2>
      <button
        onClick={handleShare}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Share on Farcaster
      </button>
    </div>
  );
}