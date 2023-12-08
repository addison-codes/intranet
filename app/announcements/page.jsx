import React from 'react';
import AnnouncementForm from '@/components/AnnoucementForm'
// import EditorJS from '@editorjs/editorjs';
import dynamic from 'next/dynamic';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'





export default async function Announcements({
  searchParams,
}) {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: announcements } = await supabase.from('announcements').select()


  // const editor = new EditorJS();



  return (
    <div>
      <main className="max-w-4xl p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700">
        <h1 className="mb-4 text-2xl text-red-800">New Announcement</h1>
        <pre>{JSON.stringify(announcements, null, 2)}</pre>
        <AnnouncementForm />
      </main>
    </div>);
}
