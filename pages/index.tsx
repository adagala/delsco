import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main className="hidden xl:flex h-full justify-center items-center bg-delsco-500">
        <div className="relative bg-gray-100" style={{ height: '495px', width: '900px' }}>
          <Image
            src="/home.jpg"
            alt="Delsco Enterprises Performance Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <div className="absolute h-8 -mt-4 z-10 top-1/2 w-1/3 flex items-center justify-center">
            <div className="w-full grid grid-cols-1 place-items-center text-4xl">
              <div className="text-center font-times-new-roman">
                The home of
              </div>
              <div className="text-center font-arial-black">
                Performance Management Solutions
              </div>
            </div>
          </div>
          <div className="absolute h-8 -mt-4 z-10 top-1/2 right-0 w-1/3 px-5 flex items-center justify-center text-delsco-500">
            <div className="w-full grid grid-cols-1 place-items-center text-4xl">
              <div className="text-center font-times-new-roman">
                Think
              </div>
              <div className="text-center font-arial-black">
                &lsquo;Healthy Performance Management&rsquo;
              </div>
            </div>
          </div>
          <div className="px-5 w-full text-3xl font-normal absolute bottom-8 text-center mb-2 font-times-new-roman">
            Welcome
          </div>
        </div>
      </main>
      <main className="xl:hidden grid grid-cols-1 h-full" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="px-5 flex items-center col-span-2">
          <div className="w-full grid grid-cols-1 place-items-center text-4xl">
            <div className="text-center font-times-new-roman">
              <div>
                Welcome to the
              </div>
              <div>
                home of
              </div>
            </div>
            <div className="text-center font-arial-black">
              Performance Management Solutions
            </div>
          </div>
        </div>
        <div className="px-5 flex items-center text-delsco-500 col-span-2">
          <div className="w-full grid grid-cols-1 place-items-center text-4xl">
            <div className="text-center font-times-new-roman">
              Think
            </div>
            <div className="text-center font-arial-black">
              &lsquo;Healthy Performance Management&rsquo;
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
