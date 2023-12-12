import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import { cookies } from 'next/headers'
import DeptIcon from '@/components/DeptIcon'
import ReviewCarousel from '@/components/Carousel'
import Calendar from '@/components/Calendar'
import { useEffect } from 'react'
import AnnouncementSection from '@/components/AnnouncementSection'
import SearchNew from '@/components/SearchNew'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'


export const dynamic = 'force-dynamic'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  console.log(await supabase.auth.getSession())

  console.log('test', session)

  // if (!session) {
  //   redirect('/login')
  // }


  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      {/* <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav> */}

      <div className="flex flex-col w-full px-3 opacity-0 animate-in">
        <main className="flex flex-col flex-1 gap-6 pt-8 mb-8">
          {/* <h2 className="mb-4 text-4xl font-bold text-center">Welcome, {user?.toString() ?? 'APTP User'}!</h2> */}
          <SearchNew />
          {/* <p>user: {user?.toString() ?? 'No user found'}</p>
          <p>session: {session?.toString() ?? 'No session found'}</p> */}
          {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
        <div className='flex flex-row'>
          <div className="w-1/2">
            <AnnouncementSection />

          </div>
        <div className="w-1/2">
          <Calendar />
        </div>
        </div>
        <div className='mt-6'>
          <ReviewCarousel />
          {/* <p className='mt-6'>
            Welcome to the Alliance Physical Therapy Partners intranet, a place
            where we stand united as one, Stronger Together. At the core of our
            mission lies a profound commitment to enhancing the lives of our
            patients and partners with unwavering care and compassion. This intranet
            serves as a digital sanctuary, nurturing our values{' '}
            <span className='font-bold'>
              of putting people first, leading with integrity, treating with
              boundless compassion, and building lasting relationships.
            </span>
            <br />
            <br />
            Here, we celebrate the incredible impact of every individual in our
            organization. Our collective strength lies in our unity, diverse
            expertise, and shared dedication to making a positive difference. As we
            navigate this platform, we create a tapestry of knowledge,
            collaboration, and innovation that propels us forward on our journey.
            This intranet embodies our belief in the power of connection and
            empathy, enabling us to provide the highest quality of care to those who
            entrust us with their well-being.
            <br />
            <br />
            As we grow and evolve, let us remember that{' '}
            <span className='font-bold'>
              our actions today shape the future of healthcare tomorrow.
            </span>{' '}
            We are more than a healthcare organization; we are a beacon of hope, a
            place of healing, and a testament to the incredible strength of unity.
          </p> */}
        </div>

      </div>
    </div>
  )
}
