import { NextPage } from "next"
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { List } from "../models/List"
import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'

const developmentLists: List[] = [
    {
        title: 'Foundations of performance culture',
        header: ' – It’s about thoughts, feelings, environments and systems'
    },
    {
        title: 'Performance management practices for supervisor roles in the performance management',
        header: ' – Designed and packaged under ‘Managing My Triangle’ to anchor foundations of healthy performance'
    },
    {
        title: 'Project Management',
        header: ' – Transferring (localising) knowledge and skills for implementing in-house projects managing changes in the workplace'
    },
    {
        title: 'Customer Service',
        header: '  – The foundation for client interaction roles'
    },
    {
        title: 'Teller Services',
        header: ' – Comprehensive, encompassing the processes & procedures, cash handling, risk management and code of ethics'
    },
    {
        title: <span>Sales executives <span className="font-normal">for frontline sales roles</span></span>,
        header: ''
    }
]

const Development: NextPage = () => {
    return (
        <Layout title="Learning and Skills Development">
            <main>
                <section className="flex flex-col-reverse px-2 xl:flex-row-reverse xl:h-full">
                    <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-100">
                        <div>
                            <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                                <div className="font-bold">
                                    Learning and Skills Development
                                </div>
                                <div className="mt-1 text-2xl xl:text-3xl font-semibold">
                                    Train, Coach and Support to achieve Great Performance
                                </div>
                            </div>

                            <div className="mt-5 font-lato">
                                {
                                    developmentLists.map((list) => (
                                        <div key={list.title} className="text-lg flex py-1">
                                            <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                            <div className="ml-3">
                                                <span className="font-bold">{list.title}</span> <span className="italic">{list.header}</span> <span className="text-red-900 italic">{list.description}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/5 h-72 xl:h-auto mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(205, 40%, 23%, 0.3)" }}>
                        <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(205, 40%, 23%, 1)" }}>
                            <Image
                                src="/development.png"
                                alt="Person hand writing"
                                width={400}
                                height={240}
                            ></Image>
                        </div>
                        <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(205, 40%, 23%, 1)" }}>
                            <Image
                                src="/development.png"
                                alt="Person hand writing"
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

export default Development