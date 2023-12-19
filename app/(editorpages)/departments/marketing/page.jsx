import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Head from 'next/head';
import EditorPage from '@/app/editor-edit-instance';
import Image from 'next/image';
import Table from '@/components/Table';

export const dynamic = 'force-dynamic';


export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from('pages').select().eq('id', 38);
  const page = data[0];


  return (
    <div className="">
          <Head>
        <title>{page?.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <h1 className='mb-4 text-4xl font-bold font-universHeading'>{page?.title}</h1> */}
      <div className="flex justify-around mt">
        <Image src={'/banners/Marketing.png'} width={1200} height={300} style={{objectFit: "cover"}} alt='Marketing Banner' />
      </div>
        <EditorPage id={38} initBlocks={page?.blocks} edit={false} />
        {/* <Table /> */}
    </div>
  );

}