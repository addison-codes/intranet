import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head';
import EditorPage from '@/app/editor-edit-instance';
import Image from 'next/image';
import Table from '@/components/Table';

export const dynamic = 'force-dynamic';


export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  if (!data) return <div>Loading...</div>
  const dep = data[0];


  return (
    <div className="">
      <div className="flex justify-around mt-8">
      </div>
        <Table deptId={1} />

    </div>
  );

}