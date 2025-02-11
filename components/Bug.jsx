import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const Bug = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    var profile = await supabase.from('profiles').select().eq('id', session.user.id);
  }


  return (
    <div className="flex flex-wrap justify-center mx-auto mt-20">
      <div className="flex flex-col content-center mt-4">
        <button
          type="button"
          className="text-white bg-aptpred border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/pages/109'>Expense Report</a>
        </button>
        <button
          type="button"
          className="text-white bg-aptpred border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/documents'>Documents</a>
        </button>
        {profile !== undefined && profile.data[0].role === 'admin' ? (
          <button
            type="button"
            className="text-white bg-aptpred border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
          >
            <a href='/new-page'>New Page</a>
          </button>
        ) : ''
        }
        <button
          type="button"
          className="text-white bg-aptpred border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/comment'>Submit a Bug Report</a>
        </button>
        <button
          type="button"
          className="text-white bg-aptpred border-none hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >   
          <a href='/page-request'>Request a Page or Document to be Added</a>
        </button>
      </div>

    </div>
  );
};

export default Bug;