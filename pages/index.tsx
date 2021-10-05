import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <main className="grid grid-cols-1 xl:grid-cols-5 h-full" style={{ backgroundColor: "#F6F6F6" }}>
        <div className="px-5 flex items-center col-span-2">
          <div className="w-full grid grid-cols-1 place-items-center text-4xl">
            <div className="text-center">
              <div>
                Welcome to the
              </div>
              <div>
                home of
              </div>
            </div>
            <div className="mt-10 text-center font-extrabold">
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
            <div className="text-center">
              Think
            </div>
            <div className="mt-10 text-center font-extrabold">
              &#39;Healthy Performance Management&#39;
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
