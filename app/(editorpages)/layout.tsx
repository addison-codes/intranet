import { GeistSans } from 'geist/font'
import '../globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
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
      <body className="m-0 bg-background text-foreground">
        <Header />
              <div className='container px-2 mx-auto sm:px-0'>
          <div className=''>{children}</div>
      </div>
        <Footer />
        <APTQI />
        <Script
          src='https://unpkg.com/flowbite@2.2.0/dist/flowbite.js'
          strategy='beforeInteractive'
        />
      </body>
    </html>
  )
}
