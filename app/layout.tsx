import { GeistSans } from 'geist/font'
import './globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Alliance PTP Intranet',
  description: 'Intranet for communication and collaboration within Alliance PTP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </head>
      <body className="bg-background text-foreground m-0">
        <Header />
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        <APTQI />
      </body>
    </html>
  )
}
