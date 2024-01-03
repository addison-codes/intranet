import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head';
import Image from 'next/image';
import Table from '@/components/Table';

export const dynamic = 'force-dynamic';


export default async function Page({ params }: { params: any }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from('pages').select('*').eq('printable', params.clinic);

  if (!data) return <div>Loading...</div>
  const dep = data[0];


  return (
    <div className="">
        <Table printable={'all'} />
    </div>
  );

}