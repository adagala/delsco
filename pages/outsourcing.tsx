import { NextPage } from "next"
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/solid'

const outsourcingLists = [
    {
        name: 'Frontline Customer Service staff – Financial Service Tellers; Call Centre Operations',
        description: ' – (Development, maintenance of ready pool, performance monitoring & risk management for tellers)'
    },
    {
        name: 'Back-office customer service support staff',
        description: ' – (Develop, maintain ready pool & performance monitoring)'
    },
    {
        name: 'Sales staff',
        description: ' – (Develop, maintain ready pool & performance monitoring)'
    }
]

const Outsourcing: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-5 xl:flex-row-reverse xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5">
                <div>
                    <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                        <div className="font-bold">
                            Staff Outsourcing
                        </div>
                        <div className="mt-1 text-2xl xl:text-3xl">
                            for Capacity Management and Seamless Quality of Service
                        </div>
                    </div>

                    <div className="mt-5 text-xl font-lato">
                        <div className="font-bold">
                            One phone call maintains your customers satisfaction
                        </div>
                        <div className="">
                            during peak periods and staff absenteeism; AND frees you from staff management and administration.
                        </div>
                    </div>

                    <div className="mt-5 font-lato">
                        {
                            outsourcingLists.map((list) => (
                                <div key={list.name} className="text-lg flex py-1">
                                    <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                    <div className="ml-3">
                                        {list.name} <span className="text-red-900 italic">{list.description}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/5 h-80 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(201, 59%, 52%, 0.3)" }}>
                <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(201, 59%, 52%, 1)" }}>
                    <Image
                        src="/outsourcing.png"
                        alt="Text reading outsourcing"
                        width={350}
                        height={210}
                    ></Image>
                </div>
                <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(201, 59%, 52%, 1)" }}>
                    <Image
                        src="/outsourcing.png"
                        alt="Text reading outsourcing"
                        width={290}
                        height={174}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default Outsourcing