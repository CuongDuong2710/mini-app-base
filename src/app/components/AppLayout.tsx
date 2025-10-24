// app/components/AppLayout.tsx
'use client';

import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  // Use fallback values for development - can be enhanced later with MiniKit context
  const defaultSafeAreaInsets = {
    top: 20,
    bottom: 20,
  };

  const style = {
    paddingTop: `${defaultSafeAreaInsets.top}px`,
    paddingBottom: `${defaultSafeAreaInsets.bottom}px`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  };

  return (
    <main style={style} className="bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900">
      {children}
    </main>
  );
}