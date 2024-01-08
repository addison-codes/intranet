import { GeistSans } from 'geist/font'
import '../globals.css'
import Header from '@/components/Header'
import APTQI from '@/components/APTQI'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export const metadata = {
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
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes='any' />
      </head>
      <body className="m-0 bg-background text-foreground">
        <Header noimg={true} />
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
}
