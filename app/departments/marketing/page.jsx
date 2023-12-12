import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import PreviewRenderer from '@/components/PreviewRenderer'
import NewPage from '@/app/new-page';

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.from('blocks').select()

  console.log('test', data);

  return (
  <div className="">
    <NewPage />
    <div className="p-16">{data && <PreviewRenderer data={data[0].content} />}</div>
  </div>
  )

}