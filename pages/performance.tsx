import { NextPage } from "next"
import Image from 'next/image'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { List } from "../models/List"
import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'

const performanceLists: List[] = [
    {
        title: 'Setting up for performance management',
        children: [
            {
                title: 'Strategic plan review',
                description: ' - (Facilitation)'
            },
            {
                title: 'Operations and organisation models',
                description: ' - (Facilitation)'
            },
            {
                title: 'Job definitions – ',
                header: 'designed for healthy performance management',
                description: ' - (Facilitation)'
            }
        ]
    },
    {
        title: 'Performance management system',
        description: ' - (Customization, Installation, Training, Maintenance)',
        children: [
            {
                title: 'Quality assurance in planning, managing and appraising performance'
            },
            {
                title: 'Supervisor-Performer duo engagements for healthy working relationship'
            },
            {
                title: 'Web-based on cloud platform',
                header: ' - operate anywhere & anytime'
            },
            {
                title: 'Automates performance-based incentives'
            }
        ]
    },
    {
        title: 'Project management for implementing changes and infrastructures',
        description: ' - (Facilitation)',
        children: [
            {
                title: 'Enables cohesiveness and management of risks'
            },
            {
                title: 'Benefits from timely gains'
            }
        ]
    },
    {
        title: 'Compensation alignments',
        children: [
            {
                title: 'Job evaluation',
                description: ' - (Facilitation)'
            },
            {
                title: 'Salary structure review/development',
                description: ' - (Facilitation)'
            }
        ]
    }
]

const Performance: NextPage = () => {
    return (
        <Layout title="Healthy Performance Management">
            <main>
                <section className="flex flex-col-reverse px-2 xl:flex-row-reverse xl:h-full">
                    <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-100">
                        <div>
                            <div className="text-3xl xl:text-4xl font-work-sans text-delsco-500">
                                <div className="font-extrabold">
                                    Healthy Performance Management -
                                </div>
                                <div className="mt-1 text-2xl xl:text-3xl font-semibold">
                                    Comprehensive tailor-made solutions for the value chain
                                </div>
                            </div>

                            <div className="mt-5 font-lato">
                                {
                                    performanceLists.map((list, i) => (
                                        <div key={i} className="text-lg flex py-1">
                                            <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-delsco-500" aria-hidden="true" />
                                            <div className="ml-3">
                                                <span className="text-2xl font-bold">{list.title}</span> <span className="italic">{list.header}</span> <span className="text-delsco-500 italic">{list.description}</span>
                                                <div className="font-lato font-normal">
                                                    {
                                                        list.children && list.children?.map((subList, i) => (
                                                            <div key={i} className="text-lg flex py-1">
                                                                <BadgeCheckIcon className="flex-shrink-0 h-5 w-5 mt-1 text-delsco-500" aria-hidden="true" />
                                                                <div className="ml-3">
                                                                    {subList.title} <span className="italic">{subList.header}</span> <span className="text-delsco-500 italic">{subList.description}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 h-72 xl:h-auto mt-4 xl:mt-0 flex justify-center items-center bg-gray-50" style={{ backgroundColor: "hsla(0, 63%, 31%, 0.3)" }}>
                        <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(0, 63%, 31%, 1)" }}>
                            <Image
                                src="/performance.png"
                                alt="Golden Key"
                                width={400}
                                height={240}
                            ></Image>
                        </div>
                        <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(0, 63%, 31%, 1)" }}>
                            <Image
                                src="/performance.png"
                                alt="Golden Key"
                                width={350}
                                height={210}
                            ></Image>
                        </div>
                    </div>
                </section>
            </main>
            <ScrollToTop />
        </Layout>
    )
}

export default Performance