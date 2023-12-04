import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: blocks } = await supabase.from('blocks').select()

  console.log('test', blocks);

  return <pre>{JSON.stringify(blocks)}</pre>
}