'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import AppLayout from './components/AppLayout';
import TriviaGame from './components/TriviaGame';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const initMiniApp = async () => {
      try {
        await sdk.actions.ready();
        const context = await sdk.context;
        setUser(context?.user);
        setIsReady(true);
      } catch (error) {
        console.error('Failed to initialize MiniApp:', error);
        // Fallback for development
        setUser({
          fid: 0,
          username: 'guest',
          displayName: 'Guest User'
        });
        setIsReady(true);
      }
    };

    initMiniApp();
  }, []);

  const userFid = user?.fid ?? 0;
  const username = user?.username ?? 'guest';
  const pfpUrl = user?.pfpUrl;
  const displayName = user?.displayName ?? username;

  if (!isReady) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-64">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-lg text-gray-700">Loading...</div>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
          <div className="flex items-center gap-3">
            {pfpUrl && <img src={pfpUrl} alt={displayName} className="h-10 w-10 rounded-full border-2 border-white" />}
            <h1 className="text-xl font-bold">{displayName}</h1>
          </div>
          <div className="text-sm opacity-90">Social Trivia</div>
        </div>
        <div className="flex-1">
          <TriviaGame userFid={userFid} username={username} />
        </div>
      </div>
    </AppLayout>
  );
}