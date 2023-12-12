import { User, createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"

export const dynamic = 'force-dynamic'

export default async function NewPage({ user }: { user: User}) {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('departments').select('*')

const addPage = async (formData: FormData) => {
  'use server'
  console.log(formData.get('document'))
  const title = String(formData.get('title'))
  const departments = Number(formData.get('departments'))
  const document = Boolean((formData.get('document') == null ? false : true))
  console.log(document)
  const supabase = createServerActionClient<Database>({ cookies })
    console.log(await supabase.from('pages').insert({ title, departments, document  }))
}
return (
  <form className="border border-gray-800" action={addPage}>
    <div className="container flex flex-wrap gap-8 px-4 py-8 mx-auto">
      <div className="w-full">
        <input placeholder='New Page' name='title' className="w-full px-2 ml-2 text-2xl leading-loose placeholder-gray-500 bg-inherit" />
      </div>
      <div className="w-full">
        <label className="relative inline-flex items-center cursor-pointer">
          <input name='document' type="checkbox" id='document' defaultValue="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          <span className="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300">
            Document
          </span>
        </label>
      </div>
      <div className="w-full">
  <label
    htmlFor="departments"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select a department
  </label>
  <select
    id="departments" name='departments'
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected={true}>Choose a department</option>
    {data?.map((dept: any) => (
      <option value={dept.id}>{dept.department_name}</option>
    )
    )}
  </select>
</div>
    </div>
    <input type="submit" value="Create Page" />

  </form>
)
}