import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main className="hidden xl:flex h-full justify-center items-center bg-red-900">
        <div className="relative bg-gray-100" style={{ height: '500px', width: '900px' }}>
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
                <div>
                  Welcome to the
                </div>
                <div>
                  home of
                </div>
              </div>
              <div className="text-center font-black font-arial">
                Performance Management Solutions
              </div>
            </div>
          </div>
          <div className="absolute h-8 -mt-4 z-10 top-1/2 right-0 w-1/3 px-5 flex items-center justify-center text-red-900">
            <div className="w-full grid grid-cols-1 place-items-center text-4xl">
              <div className="text-center font-times-new-roman">
                Think
              </div>
              <div className="text-center font-black font-arial">
                &lsquo;Healthy Performance Management&rsquo;
              </div>
            </div>
          </div>
          <div className="px-5 w-full text-2xl xl:text-3xl font-normal mt-5 xl:absolute bottom-0 text-center xl:mt-0 xl:mb-2 font-lato">
            We lead people with <span className="font-extrabold text-3xl xl:text-4xl">thoughts</span> and <span className="font-extrabold text-3xl xl:text-4xl">feelings</span> just like us
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
            <div className="text-center font-black font-arial">
              Performance Management Solutions
            </div>
          </div>
        </div>
        <div className="px-5 flex items-center text-red-900 col-span-2">
          <div className="w-full grid grid-cols-1 place-items-center text-4xl">
            <div className="text-center font-times-new-roman">
              Think
            </div>
            <div className="text-center font-black font-arial">
              &lsquo;Healthy Performance Management&rsquo;
            </div>
          </div>
        </div>
        <div className="px-5 w-full text-2xl xl:text-3xl font-normal mt-5 xl:absolute bottom-0 text-center xl:mt-0 xl:mb-2 font-lato">
          We lead people with <span className="font-extrabold text-3xl xl:text-4xl">thoughts</span> and <span className="font-extrabold text-3xl xl:text-4xl">feelings</span> just like us
        </div>
      </main>
    </Layout>
  )
}

export default Home
