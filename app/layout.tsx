import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Quote Machine',
  description: 'This page generates a random quote.',
}

export const runtime = 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='mx-auto p-12 bg-black min-h-screen text-white'>
          {children}
        </main>
      </body>
    </html>
  )
}
