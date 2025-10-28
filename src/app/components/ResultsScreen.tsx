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

      // Try to use Farcaster SDK for in-app sharing first
      if (typeof window !== 'undefined' && window.parent !== window) {
        // We're likely in Farcaster webview
        try {
          // Use postMessage to communicate with parent frame
          window.parent.postMessage({
            type: 'fc_frame',
            method: 'share',
            params: {
              text: shareText
            }
          }, '*');
          
          console.log('Attempted Farcaster frame sharing');
          return; // Exit early if successful
        } catch (frameError) {
          console.log('Frame sharing failed, trying SDK:', frameError);
        }
      }

      // Fallback: Try SDK actions
      try {
        await sdk.actions.ready();
        
        // Try to use Farcaster SDK compose cast
        if (sdk.actions.openUrl) {
          const farcasterUrl = `farcaster://compose?text=${encodeURIComponent(shareText)}`;
          await sdk.actions.openUrl(farcasterUrl);
          console.log('Used Farcaster deep link');
          return;
        }
      } catch (sdkError) {
        console.log('SDK sharing failed:', sdkError);
      }

      // Final fallback: Copy to clipboard with better UX
      try {
        const fallbackText = `🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`;
        await navigator.clipboard.writeText(fallbackText);
        
        // Show a better message for Farcaster users
        if (confirm('Share text copied to clipboard!\n\nTap OK to go back and paste it in a new cast, or Cancel to stay here.')) {
          // Try to go back in Farcaster
          if (window.history.length > 1) {
            window.history.back();
          }
        }
      } catch (clipboardError) {
        console.error('Clipboard failed:', clipboardError);
        // Show manual sharing instructions
        alert(`Copy this text and share on Farcaster:\n\n🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`);
      }
      
    } catch (error) {
      console.error('Share failed:', error);
      
      // Ultimate fallback
      const fallbackText = `🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`;
      alert(`Copy this text and share on Farcaster:\n\n${fallbackText}`);
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

  // Simple copy to clipboard method for Farcaster
  const handleSimpleShare = async () => {
    const shareText = `🎯 I scored ${score}% on Social Trivia! Can you beat me? ${process.env.NEXT_PUBLIC_URL}`;
    
    try {
      await navigator.clipboard.writeText(shareText);
      alert('✅ Score copied!\n\nGo to Farcaster app and paste it in a new cast to share your score!');
    } catch (error) {
      alert(`Copy this text to share on Farcaster:\n\n${shareText}`);
    }
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
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full mb-2"
        >
          🚀 Share on Farcaster
        </button>
        
        <button
          onClick={handleSimpleShare}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full mb-4"
        >
          📋 Copy Score to Share
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