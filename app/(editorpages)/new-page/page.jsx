import NewPage from "../../new-page";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function NewPagePage() {
  const supabase = createServerComponentClient({ cookies }); 
  const { data: { session } } = await supabase.auth.getSession()
  const profile = await supabase.from('profiles').select().eq('id', session.user.id);

  if (profile.data[0].role !== 'admin') {
    redirect(`/`)
  }

  return (
    <div className="container mx-auto my-12 border border-gray-800 sm:w-1/2">
      <h1 className="text-xl">What is the name of your page?</h1>
      <NewPage />
    </div>
  );
}
