import AuthButton from '../../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
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
        <main className="flex flex-col flex-1 gap-6 mb-8">
          <h2 className="mb-4 text-6xl font-bold text-center font-universHeading">Welcome, APTP User!</h2>
          <SearchNew />
          {/* <p>user: {user?.toString() ?? 'No user found'}</p>
          <p>session: {session?.toString() ?? 'No session found'}</p> */}
          {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
        <div className='flex flex-wrap sm:flex-row'>
          <div className="w-full sm:w-1/2">
            <AnnouncementSection />
          </div>
          <div className="w-full sm:w-1/2">
            <Calendar />
          </div>
        </div>
        <div className='mt-6'>
          <ReviewCarousel />
        </div>

      </div>
    </div>
  )
}
