import { NextPage } from "next"
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/solid'

const outsourcingLists = [
    {
        name: 'Foundations of performance culture',
        description: ' – It’s about thoughts, feelings, environments and systems'
    },
    {
        name: 'Performance management practices for supervisor roles in the performance management',
        description: ' – Designed and packaged under ‘Managing My Triangle’ to anchor foundations of healthy performance'
    },
    {
        name: 'Project Management',
        description: ' – Transferring (localising) knowledge and skills for implementing in-house projects managing changes in the workplace'
    },
    {
        name: 'Customer Service',
        description: '  – The foundation for client interaction roles'
    },
    {
        name: 'Teller Services',
        description: ' – Comprehensive, encompassing the processes & procedures, cash handling, risk management and code of ethics'
    },
    {
        name: 'Sales executives for frontline sales roles',
        description: ''
    }
]

const Development: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-5 xl:flex-row xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5">
                <div>
                    <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                        <div className="font-bold">
                            Learning and Skills Development
                        </div>
                        <div className="mt-1 text-2xl xl:text-3xl">
                            Train, Coach and Support to achieve Great Performance
                        </div>
                    </div>

                    <div className="mt-5 font-lato">
                        {
                            outsourcingLists.map((list) => (
                                <div key={list.name} className="text-lg flex py-1">
                                    <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                    <div className="ml-3">
                                        <span className="font-bold">{list.name}</span><span className="text-red-900 italic">{list.description}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/5 h-80 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(205, 40%, 23%, 0.3)" }}>
                <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(205, 40%, 23%, 1)" }}>
                    <Image
                        src="/development.png"
                        alt="Person hand writing"
                        width={350}
                        height={210}
                    ></Image>
                </div>
                <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(205, 40%, 23%, 1)" }}>
                    <Image
                        src="/development.png"
                        alt="Person hand writing"
                        width={290}
                        height={174}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default Development