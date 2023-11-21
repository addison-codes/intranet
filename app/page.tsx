import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import { cookies } from 'next/headers'
import DeptIcon from '@/components/DeptIcon'
import ReviewCarousel from '@/components/Carousel'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {/* <DeployButton /> */}
          {/* {isSupabaseConnected && <AuthButton />} */}
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        {/* <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main> */}
        <div className='mt-6'>
          {/* <ReviewCarousel /> */}
          <p className='mt-6'>
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
          </p>
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

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
