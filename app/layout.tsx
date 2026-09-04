import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CESF Fabrication | Heavy Structural Steel & Metal Engineering Ghaziabad (U.P)',
  description:
    'CESF (City Engineering & Steel Fabrication) - BUILD • SHAPE • STRONGER. Leading manufacturers of heavy structural steel, industrial PEB sheds, CNC fiber laser cutting, architectural metalwork & pressure vessels in Ghaziabad (U.P).',
  icons: {
    icon: '/updated-logo-transparent.png',
    apple: '/updated-logo-transparent.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('cesf-theme');var d=document.documentElement;if(t==='dark'){d.classList.add('dark');d.classList.remove('light');d.style.colorScheme='dark';}else{d.classList.remove('dark');d.classList.add('light');d.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-brand-orange selection:text-white min-h-screen">
        <ThemeProvider defaultTheme="light">
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
