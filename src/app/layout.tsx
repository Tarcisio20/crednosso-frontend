import type { Metadata } from 'next'
import './globals.css'
import NextAuthSessionProvider from './providers/sessionProvider'

export const metadata: Metadata = {
  title: 'CredNosso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-950 text-gray-100">
        <NextAuthSessionProvider>
        {children}
        </NextAuthSessionProvider>    
        </body>
    </html>
  )
}
