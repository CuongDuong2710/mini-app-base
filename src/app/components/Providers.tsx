'use client'

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'viem/chains';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_CDP_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'auto',
        },
      }}
    >
      <MiniKitProvider>
        {children}
      </MiniKitProvider>
    </OnchainKitProvider>
  );
}