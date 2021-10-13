import { NextPage } from "next"
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { List } from "../models/List"

const outsourcingLists: List[] = [
    {
        title: 'Frontline Customer Service staff',
        header: ' – Financial Service Tellers; Call Centre Operations',
        description: ' – (Development, maintenance of ready pool, performance monitoring & risk management for tellers)'
    },
    {
        title: 'Back-office customer service support staff',
        description: ' – (Develop, maintain ready pool & performance monitoring)'
    },
    {
        title: 'Sales staff',
        description: ' – (Develop, maintain ready pool & performance monitoring)'
    }
]

const Outsourcing: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-2 xl:flex-row-reverse xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-50">
                <div>
                    <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                        <div className="font-bold">
                            Staff Outsourcing
                        </div>
                        <div className="mt-1 text-2xl xl:text-3xl font-semibold">
                            for Capacity Management and Seamless Quality of Service
                        </div>
                    </div>

                    <div className="mt-5 text-xl font-lato">
                        <div className="font-bold">
                            One phone call maintains your customers satisfaction
                        </div>
                        <div className="font-semibold">
                            during peak periods and staff absenteeism; AND frees you from staff management and administration.
                        </div>
                    </div>

                    <div className="mt-5 font-lato">
                        {
                            outsourcingLists.map((list) => (
                                <div key={list.title} className="text-lg flex py-1">
                                    <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                    <div className="ml-3">
                                        {list.title} <span className="italic">{list.header}</span> <span className="text-red-900 italic">{list.description}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/5 h-72 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(201, 59%, 52%, 0.3)" }}>
                <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(201, 59%, 52%, 1)" }}>
                    <Image
                        src="/outsourcing.png"
                        alt="Text reading outsourcing"
                        width={400}
                        height={240}
                    ></Image>
                </div>
                <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(201, 59%, 52%, 1)" }}>
                    <Image
                        src="/outsourcing.png"
                        alt="Text reading outsourcing"
                        width={350}
                        height={210}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default Outsourcing