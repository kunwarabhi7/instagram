import { getProviders, signIn } from "next-auth/react"
import Header from '../../components/Header'
import ig from '../../public/images/ig.png'

const signin = ({providers}) => {
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <img src={ig} alt="" />
<p className="text-4xl mt-8 font-bold italic">Build by Abhishek</p>
   <div className="mt-52">
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className="p-3 text-center  bg-cyan-700 text-white rounded-xl" onClick={() => signIn(provider.id ,{callbackUrl:'/'}) }>
          Sign in with {provider.name}
        </button>
      </div>
    ))}

   </div>
    </div>
  </>

  )
}

export default signin

export async function getServerSideProps() {
  
    const providers = await getProviders();
    
    return {
      props :{
        providers
      }
    }
  }