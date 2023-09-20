import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar'

export async function getServerSideProps(context: NextPageContext) {
  // This is on the client
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  // Always have to return something for serverside props
  return {
    props: {}
  }
}

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  )
}
