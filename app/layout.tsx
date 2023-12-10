import { GeistSans } from 'geist/font'
import './globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import ClinicOfMonth from '@/components/ClinicOfMonth'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import DailyQuote from '@/components/DailyQuote'
import Footer from '@/components/Footer'
import ReviewCarousel from '@/components/Carousel'
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
      <body className="m-0 bg-background text-foreground">
        <Header />
              <div className='container px-2 mx-auto sm:px-0'>
        {/* <div className="mx-auto mt-6">
          <Image src={'/homepage-banner.png'}  width={1200} height={300} alt={'Homepage banner'} />
        </div> */}
        <div className='container grid gap-8 pt-4 mx-auto md:grid-cols-5'>
          <div className="flex flex-col">
            <DailyQuote />
            <SocialFeed />
            <ClinicOfMonth />
          </div>
          <div className='col-span-3 '>{children}</div>
          <Sidebar />
        </div>
      </div>

        {/* <main className="flex flex-col items-center min-h-screen">
          {children}
        </main> */}
        <Footer />
        <APTQI />
      </body>
    </html>
  )
}
