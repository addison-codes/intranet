import { GeistSans } from 'geist/font'
import '../globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import ClinicOfMonth from '@/components/ClinicOfMonth'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import DailyQuote from '@/components/DailyQuote'
import Footer from '@/components/Footer'
import ReviewCarousel from '@/components/Carousel'
import Script from 'next/script'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Alliance PTP Intranet',
  description: 'Intranet for communication and collaboration within Alliance PTP',
}
export default async function RootLayout({
  children,
}) {

    const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  if (session.user.email !== undefined) {
    const user = session.user.email.split('@')
    const name = user[0].split('.')

  return (
    <html lang="en" className={`${GeistSans.className} w-full md:w-screen`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </head>
      <body className="w-full m-0 bg-background text-foreground">
        <Header />
          <div className='grid grid-cols-1 pt-4 mx-auto md:gap-8 md:grid-cols-5'>
            <div className="flex-col hidden sm:flex">
              <DailyQuote />
              <SocialFeed />
              {/* <ClinicOfMonth /> */}
            </div>
            <div className='col-span-3 '>
              {children}
            </div>
            <Sidebar />
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
}