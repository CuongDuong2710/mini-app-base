import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Trivia - Base & Farcaster Quiz",
  description: "Test your knowledge with 12 questions about Base blockchain and Farcaster protocol!",
  keywords: ["Base", "Farcaster", "Trivia", "Quiz", "Blockchain", "Web3", "Mini App"],
  authors: [{ name: "Social Trivia Team" }],
  creator: "Base Community",
  publisher: "Vercel",
  robots: "index, follow",
  openGraph: {
    title: "Social Trivia - Base & Farcaster Quiz",
    description: "Challenge yourself with 12 questions about Base and Farcaster!",
    url: process.env.NEXT_PUBLIC_URL || 'https://social-trivia-quiz.vercel.app',
    siteName: "Social Trivia",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL || 'https://social-trivia-quiz.vercel.app'}/og.png`,
        width: 1200,
        height: 630,
        alt: "Social Trivia Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Trivia - Base & Farcaster Quiz",
    description: "Test your Base and Farcaster knowledge!",
    images: [`${process.env.NEXT_PUBLIC_URL || 'https://social-trivia-quiz.vercel.app'}/og.png`],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  other: {
    // Farcaster Frame metadata
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_URL || 'https://social-trivia-quiz.vercel.app'}/og.png`,
    "fc:frame:button:1": "🎯 Start Quiz",
    "fc:frame:post_url": process.env.NEXT_PUBLIC_URL || 'https://social-trivia-quiz.vercel.app',
    "fc:frame:image:aspect_ratio": "1.91:1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}