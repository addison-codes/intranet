import React from 'react';
import FOCForm from '@/components/FOCForm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function FOC() {
    const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  // if (!session) {
  //   redirect('/login')
  // }

  // if (session.user.email !== undefined) {
  //   const user = session.user.email.split('@')
  //   const name = user[0].split('.')


  return (
    <div>
      <main className="max-w-4xl p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700">
        <h1 className="mb-4 text-2xl text-red-800">Latest FOC of the Month</h1>
        <Image height={600} width={450} src={'/foc/NOV2023.png'} />
      </main>
    </div>);
  }
