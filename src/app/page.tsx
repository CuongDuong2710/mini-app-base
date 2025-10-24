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
        await sdk.ready();
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
          <div className="text-lg">Loading...</div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {pfpUrl && <img src={pfpUrl} alt={displayName} className="h-10 w-10 rounded-full" />}
            <h1 className="text-xl font-bold">{displayName}</h1>
          </div>
        </div>
        <div className="flex-1">
          <TriviaGame userFid={userFid} username={username} />
        </div>
      </div>
    </AppLayout>
  );
}