import Link from 'next/link'

export const dynamic = 'force-dynamic';


export default async function NotFound() {

  return (
    <div>
      <h2>Not Found:</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}