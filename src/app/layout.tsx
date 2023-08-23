import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers'
import { Toaster as NewYorkToaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import InteractiveBackground from '@/components/interactive-bg/interactive-bg'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="relative">
            <InteractiveBackground />
            <div className='absolute top-0 left-0 z-20 min-h-screen w-full'>
              {children}
            </div>
          </div>
        </ThemeProvider>
        <NewYorkToaster />
      </body>
    </html>
  )
}
