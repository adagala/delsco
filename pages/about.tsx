import type { NextPage } from 'next'
import Image from 'next/image'
import { ShieldCheckIcon } from '@heroicons/react/solid'

const aboutList: string[] = [
    'Established in Kenya in 2002',
    'Has served several industries in Kenya and other countries in Eastern, Central and Western Africa',
    'Solutions mapping onto the performance value chain',
    'Leadership practices for healthy performance management',
    'New cloud-based performance management tool that enables unique performer-supervisor engagement and incentives management'
]

const About: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-5 xl:flex-row xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5">
                <div>
                    <div className="text-3xl xl:text-4xl">
                        <div className="font-work-sans text-red-900">
                            Delsco is in the business of
                        </div>
                        <div className="mt-2 font-bold font-work-sans text-red-900">
                            &lsquo;Enabling Performance&rsquo;
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            aboutList.map((list) => (
                                <div key={list} className="text-lg flex py-1">
                                    <ShieldCheckIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                    <div className="ml-3">
                                        {list}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/5 h-80 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(25, 69%, 55%, 0.3)" }}>
                <div className="flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(25, 69%, 55%, 1)" }}>
                    <Image
                        src="/about.jpg"
                        alt="Performance Key Image"
                        width={290}
                        height={174}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default About