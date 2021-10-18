import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <main className="xl:relative grid grid-cols-1 xl:grid-cols-5 h-full" style={{ backgroundColor: "#F6F6F6" }}>
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
        <div className="relative hidden xl:block">
          <Image
            src="/home.jpg"
            alt="Delsco Enterprises Performance Logo"
            layout="fill"
            objectFit="cover"
          />
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
    </>
  )
}

export default Home
