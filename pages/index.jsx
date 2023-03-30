import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { getSession } from "next-auth/react";
import Modal from "../components/Modal";

const Home = () => {

  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
};

export default Home;


export async function getServerSideProps(context) {
const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}