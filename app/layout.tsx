import type { Metadata, Viewport } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sora = Sora({ subsets: ["latin"], variable: '--font-sora' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains-mono' });

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Aryan Chaudhary - Full Stack Developer',
  description: 'Full-stack developer building modern web experiences. React, Node.js, and everything in between.',
  generator: 'v0.app',
  creator: 'Aryan Chaudhary',
  keywords: ['developer', 'full-stack', 'react', 'node.js', 'web development'],
  openGraph: {
    title: 'Aryan Chaudhary - Full Stack Developer',
    description: 'Full-stack developer building modern web experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Chaudhary - Full Stack Developer',
    description: 'Full-stack developer building modern web experiences.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-950" style={{ colorScheme: 'dark' }}>
      <body className={`${sora.variable} ${jetbrainsMono.variable} font-sora antialiased bg-slate-950 text-slate-100`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
