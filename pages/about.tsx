import type { NextPage } from 'next'
import Image from 'next/image'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'
import { List } from '../models/List'

const aboutList: List[] = [
    {
        description: 'Established in Kenya in 2002'
    },
    {
        description: 'Have served several industries in Kenya and other countries in Eastern, Central and Western Africa'
    },
    {
        description: 'New focus and developments',
        children: [
            {
                description: <span><span className="font-extrabold">Solutions</span> for the performance management value chain</span>
            },
            {
                description: <span><span className="font-extrabold">Performance</span> culture</span>
            },
            {
                description: <span>Cloud-based <span className="font-extrabold">performance management system</span> that enables unique performer-supervisor engagement and incentives management</span>
            }
        ]
    },
]

const About: NextPage = () => {
    return (
        <Layout>
            <main className="flex flex-col-reverse px-2 xl:flex-row xl:h-full">
                <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-50">
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
                                    <div key={list.description} >
                                        <div className="text-lg flex py-1">
                                            <ShieldCheckIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                            <div className="ml-3">
                                                {list.description}
                                            </div>
                                        </div>
                                        {
                                            list?.children && list?.children?.map((subList, i) => (
                                                <div key={i} className="text-lg flex py-1 ml-8">
                                                    <BadgeCheckIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                                    <div className="ml-3">
                                                        {subList.description}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/5 h-72 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(25, 69%, 55%, 0.3)" }}>
                    <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(25, 69%, 55%, 1)" }}>
                        <Image
                            src="/about.jpg"
                            alt="Performance Key Image"
                            width={400}
                            height={240}
                        ></Image>
                    </div>
                    <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(25, 69%, 55%, 1)" }}>
                        <Image
                            src="/about.jpg"
                            alt="Performance Key Image"
                            width={350}
                            height={210}
                        ></Image>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default About