import '../../globals.css'
import SocialFeed from '@/components/SocialFeed'


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
        <div className='container px-2 mx-auto sm:px-0'>
          <div className='container grid gap-8 pt-4 mx-auto md:grid-cols-5'>
            <div className='col-span-4 '>
              {children}
            </div>
              <SocialFeed />
          </div>
        </div>

  )
}
