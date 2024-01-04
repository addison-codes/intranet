import { useRouter } from 'next/router'
import React from 'react';



import AnnouncementSection from '@/components/AnnouncementSection'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'
import StaffReferralBonus from '../StaffReferralBonus';

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const router = useRouter()


  if (router.pathname === '/') {
    return (
      <div className='container px-2 mx-auto sm:px-0'>
        {/* <div className="mx-auto mt-6">
          <Image src={'/homepage-banner.png'}  width={1200} height={300} alt={'Homepage banner'} />
        </div> */}
        <div className='container grid gap-8 pt-4 mx-auto md:grid-cols-4'>
          <AnnouncementSection />
          <div className='col-span-2 '>{children}</div>
          <Sidebar />
        </div>
      </div>
    )
  } else if (router.pathname === '/jobs') {
    return (
      <div className='container mx-auto'>
        <div className='container grid grid-cols-4 gap-6 pt-4 mx-auto'>
          <div className='col-span-4 sm:col-span-3'>{children}</div>
          <div className='w-full col-span-4 mx-auto sm:col-span-1'>
            <StaffReferralBonus />

            <Sidebar />
          </div>
        </div>
      </div>
    )
  } else if (router.pathname === '/connect') {
    return (
      <div className='container mx-auto'>
        <div className='container grid grid-cols-4 gap-6 pt-4 mx-auto'>
          <div className='col-span-4 sm:col-span-3'>{children}</div>
          <SocialFeed />
        </div>
      </div>
    )
  } else if (router.pathname === '/news') {
    return (
      <div className='container mx-auto'>
        <div className='container pt-4 mx-auto'>{children}</div>
      </div>
    )
  } else {
    return <div className='container mx-auto'>{children}</div>
  }
}
