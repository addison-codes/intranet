import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import { cookies } from 'next/headers'
import DeptIcon from '@/components/DeptIcon'
import ReviewCarousel from '@/components/Carousel'
import { useEffect } from 'react'



export default async function Index() {
  const cookieStore = cookies()

  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient(cookieStore)
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  const supabase = createClient(cookieStore)

  console.log(await supabase.auth.getSession());


  const {
    data: { user },
  } = await supabase.auth.getUser()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log('test', user);
  const isSupabaseConnected = true


  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          <p>user: {user?.toString() ?? 'No user found'}</p>
          <p>session: {session?.toString() ?? 'No session found'}</p>
          {/* {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        </main>
        <div className='mt-6'>
          {/* <ReviewCarousel /> */}
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
          <h3 className='mt-6 mb-6 text-4xl font-bold font-universSubheading'>
            Departments
          </h3>
          <div className='flex flex-wrap items-stretch sm:gap-8 place-content-between'>
            <DeptIcon
              name='Front Office Operations'
              link='02ddedf18c36408186e1e65e800ade10'
              image='frontofficeops' width={undefined} tab={undefined} />
            <DeptIcon
              name='Marketing'
              link='bd941b39-cf66-4714-9d15-a6e3acfbdec8'
              image='mktg' width={undefined} tab={undefined} />
            <DeptIcon
              name='Clinical Operations'
              link='a465a6ca-79d5-4213-8514-6eac0c5201a1'
              image='clinicalops' width={undefined} tab={undefined} />
            <DeptIcon
              name='Information Technology'
              link='e7a11eef95444dee989323c29b4176b0'
              image='it' width={undefined} tab={undefined} />
            <DeptIcon
              name='Workers Compensation'
              link='6a914851f53845f2a8f9f36477988b6b'
              image='workerscomp' width={undefined} tab={undefined} />
            <DeptIcon
              name='Human Resources'
              link='f4f28e1f-4c45-453d-8fad-c175fffb049a'
              image='hr' width={undefined} tab={undefined} />
            <DeptIcon
              name='Continuing Education'
              link='6665d94f9e3b41b096b88737af9b7a6a'
              image='contued' width={undefined} tab={undefined} />
            <DeptIcon
              name='Compliance'
              link='69ff00c706b347fdbdc7550348af998b'
              image='compliance' width={undefined} tab={undefined} />
            <DeptIcon
              name='Revenue Cycle'
              link='50c77c6b40ef448ba564f9df89c3d8b5'
              image='accounting' width={undefined} tab={undefined} />
          </div>
        </div>

      </div>
    </div>
  )
}
