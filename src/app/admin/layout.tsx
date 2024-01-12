import type { Metadata } from 'next'
import './globals.css'

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
          <nav className="flex justify-between px-10  pb-2 border-b-2 border-gray-500 shadow-xl shadow-gray-900">
            <div className="text-2xl">
              CredNosso
            </div>
            <div>
              <ul className="flex gap-3 text-2xl">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Atm</a></li>
                <li><a href="#" className="hover:text-gray-300">Tesouraria</a></li>
              </ul>
            </div>
          </nav>
          <main className='mx-auto w-full max-w-3xl p-3'>{children}</main>
        </body>
    </html>
  )
}
