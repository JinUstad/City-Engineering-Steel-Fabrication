import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CESF Fabrication | Heavy Structural Steel & Metal Engineering New Delhi',
  description:
    'CESF (City Engineering & Steel Fabrication) - BUILD • SHAPE • STRONGER. Leading manufacturers of heavy structural steel, industrial PEB sheds, CNC fiber laser cutting, architectural metalwork & pressure vessels in New Delhi.',
  icons: {
    icon: '/cesf-logo.webp',
    apple: '/cesf-logo.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090d16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
