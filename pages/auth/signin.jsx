import { getProviders, signIn as SignIntoProviders } from "next-auth/react"
import Image from 'next/image'
import Footer from "../../components/Footer"

const signIn = ({providers}) => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="flex flex-col max-w-screen-lg mx-auto bg-opacity-0 items-center h-full">
        <div className="h-5/6 flex">
          <div className="relative w-96 mr-4 hidden md:inline">
            <Image 
              src="/loginImage.png"
              alt="login"
              height={900}
              width={500}
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col space-y-4 w-1/2 flex-grow mt-10">
            <div className="flex flex-col bg-white border border-gray-300 px-12 p-5">              
              <Image 
                src="https://links.papareact.com/ocw"
                alt="login"
                height={70}
                width={150}
                objectFit="contain"
              />
              <form className="flex flex-col space-y-1 mt-6">
                <input 
                  type="email"
                  placeholder="email"
                />
                <input 
                  type="password"
                  placeholder="password"
                />
                <button className="block bg-blue-500 rounded-sm text-white py-1">Log in</button>
                <div className="relative w-full flex justify-center ">
                  <div className="absolute w-full z-10 h-[1px] bg-gray-300 inset-y-1/2"/>
                  <span className="px-4 py-2 z-20 bg-white text-gray-500 text-xs">OR</span>
                </div>
              </form>
              {/* onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}*/}
              {Object.values(providers).map((provider) =>(
                  <button 
                    className="px-2 py-1 text-blue-800 text-center rounded-sm"
                    onClick={() => SignIntoProviders(provider.id, {callbackUrl: '/'})}
                    key={provider.name}
                  >
                    Login with {provider.name}
                  </button>
              ))}
              <p className="text-sm font-light text-center mt-4">Forgotten your password?</p>
            </div>

            <div className="border border-gray-300 px-3 py-6 bg-white">
              <p className="text-center">Don't have an account? <span className="font-medium text-blue-500">Sign up</span></p>
            </div>

            <div className="flex flex-col items-center justify-center border border-gray-100">
              <p className="text-xs mb-4">Get the app.</p>
              <div className="flex space-x-8">
                <button>App store</button>
                <button>Google Play</button>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-8">
          <Footer size="big"/>        
        </div>
      </div>
    </div>
  )
}


export default signIn

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}