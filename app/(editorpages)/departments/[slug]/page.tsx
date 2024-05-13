import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import EditorPage from '@/app/editor-edit-instance';
import Image from 'next/image';
import Table from '@/components/Table';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';


export default async function Page({ params }: { params: any }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const { data } = await supabase.from('departments').select('*, main_page, main_page(id, blocks)').eq('slug', params.slug);

  if (!data) return <div>Loading...</div>
  const dep = data[0];

    if (!session) {
    redirect('/login')
  }

  const profile = await supabase.from('profiles').select().eq('id', session.user.id);


  return (
    <div className="">
      <div className="flex justify-around mt-8">
        <Image src={dep.banner_img} width={1200} height={300} style={{}} className='object-scale-down w-full md:cover' alt='Workers Compensation Banner' />
      </div>
        <EditorPage id={dep.main_page} initBlocks={dep.main_page.blocks} edit={false} />
        <Table deptId={dep.id} printable={false} range />
        {profile.data && profile.data[0].role === 'admin' ? (
          <div className="mt-8">
            <a className='text-white mt-8 bg-aptpblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800' href={`/pages/${dep.main_page.id}/edit`}>Edit Page</a>
          </div>
        ) : ''
        }
    </div>
  );

}