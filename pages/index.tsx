import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
const Home = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
<Feed />
    
    </div>
  )
}

export default Home
