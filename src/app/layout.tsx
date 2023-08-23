import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers'
import { Toaster as NewYorkToaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar/navbar'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })
const DynamicInteractiveBackground = dynamic(
  () => import('@/components/interactive-bg/interactive-bg'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Carlos Rangel',
  description: 'Live portfolio.',
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
            <DynamicInteractiveBackground />
            <div className='absolute top-0 left-0 z-20 min-h-screen w-full'>
              <Navbar />
              {children}
            </div>
          </div>
        </ThemeProvider>
        <NewYorkToaster />
      </body>
    </html>
  )
}
