import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/modal'

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context)
//   if (!session){
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/auth/signin"
//       }
//     }
//   }
// }
