'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

export default function MsButton() {
  const supabase = createClientComponentClient<Database>()
  const handleSignIn = async () => {
  console.log(await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: `${location.origin}/auth/callback`
    }
  })
)}
return (
  <button type="button" onClick={handleSignIn} className='p-8 hover:bg-gray-800 rounded-xl'>
    <h1 className="text-xl">Sign In</h1>
    {/* <Image src='/github-mark-white.png' alt="github logo" width={100} height={100} /> */}
  </button>
)
}