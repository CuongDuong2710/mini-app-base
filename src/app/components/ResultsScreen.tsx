'use client';

import { sdk } from '@farcaster/miniapp-sdk';

interface ResultsScreenProps {
  score: number;
  userFid: number;
  username: string;
}

export default function ResultsScreen({ score, userFid, username }: ResultsScreenProps) {
  // Debug: Log props to console
  console.log('ResultsScreen props:', { score, userFid, username });
  console.log('NEXT_PUBLIC_URL:', process.env.NEXT_PUBLIC_URL);

  const handleShare = async () => {
    console.log('Share button clicked!');
    
    try {
      // Create share text with score and challenge
      const shareText = `🎯 I just scored ${score}% on Social Trivia!\n\n` +
        `Test your Base & Farcaster knowledge - can you beat my score?\n\n` +
        `Try it now: ${process.env.NEXT_PUBLIC_URL}\n\n` +
        `#BaseTrivia #Farcaster #Web3Quiz`;

      // Primary method: Direct URL with Warpcast compose
      const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(shareText)}`;
      
      console.log('Generated Warpcast URL:', warpcastUrl);
      
      // Try to open in the same window if in mobile/webview
      if (window.parent !== window) {
        // We're in an iframe/webview, try parent window
        console.log('Opening in parent window');
        window.parent.open(warpcastUrl, '_blank');
      } else {
        // Regular browser window
        console.log('Opening in new window');
        window.open(warpcastUrl, '_blank');
      }
      
    } catch (error) {
      console.error('Share failed:', error);
      
      // Fallback: Copy to clipboard
      try {
        const fallbackText = `🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`;
        await navigator.clipboard.writeText(fallbackText);
        alert('Share text copied to clipboard! Open Warpcast and paste it to share your score.');
      } catch (clipboardError) {
        console.error('Clipboard failed:', clipboardError);
        // Show manual sharing instructions
        alert(`Copy this text and share on Warpcast:\n\n🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`);
      }
    }
  };

  // Get score message based on performance
  const getScoreMessage = (score: number): string => {
    if (score >= 90) return "🏆 Outstanding! You're a Base & Farcaster expert!";
    if (score >= 80) return "🥇 Excellent! You know your stuff!";
    if (score >= 70) return "🥈 Great job! Solid knowledge!";
    if (score >= 60) return "🥉 Good work! Keep learning!";
    return "📚 Keep studying! You'll get better!";
  };

  return (
    <div className="p-4 flex-1 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-4 text-center max-w-md">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎉</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
          <p className="text-lg text-gray-600 mb-2">Your Score:</p>
          <div className="text-5xl font-bold text-green-600 mb-4">{score}%</div>
          <p className="text-sm text-gray-600 mb-4">{getScoreMessage(score)}</p>
        </div>
        
        <button
          onClick={handleShare}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full mb-4"
        >
          🚀 Share on Farcaster
        </button>
        
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full"
        >
          🔄 Play Again
        </button>
        
        <p className="text-sm text-gray-500 mt-4">
          Challenge your friends to beat your score!
        </p>
      </div>
    </div>
  );
}