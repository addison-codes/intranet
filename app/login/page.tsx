'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const supabase = createClientComponentClient()

  const signInWithAzure = async () => {

    // const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        scopes: 'email',
      },
    })

    if (error) {
      console.error('Error signing in:', error.message)
    }
  }


  return (
    <div className="flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
      <button onClick={signInWithAzure} className="px-4 py-2 mb-2 bg-blue-500 rounded-md text-foreground">
        Sign In with Azure
      </button>
    </div>
  )
}
