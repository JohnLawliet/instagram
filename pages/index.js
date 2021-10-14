import Head from 'next/head'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed />
    </div>
  )
}
