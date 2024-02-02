import React from 'react';
import AnnouncementForm from '@/components/AnnoucementForm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Announcements() {
    const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const profile = await supabase.from('profiles').select().eq('id', session.user.id);

  if (profile.data[0].role !== 'admin') {
    redirect(`/`)
  }

  if (session.user.email !== undefined) {
    const user = session.user.email.split('@')
    const name = user[0].split('.')


  return (
    <div>
      <main className="max-w-4xl p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700">
        <h1 className="mb-4 text-2xl text-red-800">New Announcement</h1>
        <AnnouncementForm />
      </main>
    </div>);
  }
}
