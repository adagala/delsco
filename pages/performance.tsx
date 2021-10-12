import { NextPage } from "next"
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { List } from "../models/List"

const performanceLists: List[] = [
    {
        title: 'Strategic plan review',
        description: ' - (Facilitation)'
    },
    {
        title: 'Organisation business/operations model',
        description: ' - (Facilitation)'
    },
    {
        title: 'Job definitions',
        header: '– designed for healthy performance',
        description: ' - (Facilitation)'
    },
    {
        title: 'Cloud-based Performance Management System branded PMST',
        header: ' – designed for efficiency and quality assurance',
        description: ' - (Customisation, Training, Implementation, Maintenance)'
    },
    {
        title: 'Project management',
        header: ' - implementing changes and projects',
        description: ' - (Facilitation)'
    },
    {
        title: 'Job Evalauation',
        description: ' - (Facilitation)'
    },
    {
        title: 'Salary structure review/development',
        description: ' - (Facilitation)'
    }
]

const Performance: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-5 xl:flex-row xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-50">
                <div>
                    <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                        <div className="font-extrabold">
                            Healthy Performance Management
                        </div>
                        <div className="mt-1 text-2xl xl:text-3xl font-semibold">
                            for Great Performance
                        </div>
                    </div>

                    <div className="mt-5 text-xl font-lato">
                        <div className="font-bold">
                            Tailor-made performance management solutions
                        </div>
                        <div className="font-semibold">
                            for the critical stages of an organisation’s performance management value-chain; <span className="italic">aimed at enabling a healthy work environment; and includes web-based performance management system.</span>
                        </div>
                    </div>

                    <div className="mt-5 font-lato">
                        {
                            performanceLists.map((list, i) => (
                                <div key={i} className="text-lg flex py-1">
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
            <div className="w-full xl:w-2/5 h-80 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(0, 63%, 31%, 0.3)" }}>
                <div className="hidden xl:flex justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(0, 63%, 31%, 1)" }}>
                    <Image
                        src="/performance.png"
                        alt="Golden Key"
                        width={350}
                        height={210}
                    ></Image>
                </div>
                <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(0, 63%, 31%, 1)" }}>
                    <Image
                        src="/performance.png"
                        alt="Golden Key"
                        width={290}
                        height={174}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default Performance