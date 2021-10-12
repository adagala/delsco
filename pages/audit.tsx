import { NextPage } from "next"
import Image from 'next/image'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import { AuditList } from "../models/List"

const titlesList: AuditList[] = [
    {
        title: <span>Quick first-line review of Experiences&#44; Thoughts and Feelings</span>,
        children: [
            {
                title: 'Questionnaire Administration – Analysis – Report – Presentation.'
            },
            {
                title: 'May be used to take immediate improvement actions and/or identify where in-depth audits are required.'
            }
        ]
    },
    {
        title: 'In-depth audit',
        header: <span> of the various components in the client&apos;s performance value chain&#44; with a substantive report and recommendations to enable great performance</span>,
        children: [
            {
                title: <span>Can be on selective components of the entire value chain&#44; </span>,
                header: ' OR'
            },
            {
                title: 'End-to-end analysis of all components in the entire value chain.'
            }
        ]
    }
];

const Audit: NextPage = () => {
    return (
        <main className="flex flex-col-reverse px-2 xl:flex-row xl:h-full">
            <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-50">
                <div>
                    <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
                        <div className="font-extrabold">
                            Professional Audit
                        </div>
                        <div className="mt-1 text-2xl xl:text-3xl font-semibold">
                            of the Performance Management Value Chain
                        </div>
                    </div>

                    <div className="mt-5 text-xl font-lato">
                        <div className="font-bold">
                            Supporting Implementation of targeted&#44; integrated and comprehensive improvements
                        </div>
                        <div className="font-medium">
                            Delsco&#44; through projects management approach&#44; will undertake two levels of &lsquo;health&rsquo; check of the performance management value chain to guide the improvement decisions
                        </div>
                    </div>

                    <div className="mt-5 text-2xl font-lato">
                        <ol className="font-bold list-decimal">
                            {
                                titlesList.map((list, i) => (
                                    <li key={i} className="ml-5 my-1">
                                        {list.title}<span className="font-semibold">{list.header}</span>
                                        <div className="font-lato font-normal">
                                            {
                                                list.children && list.children?.map((subList, i) => (
                                                    <div key={i} className="text-lg flex py-1">
                                                        <ArrowCircleRightIcon className="flex-shrink-0 h-5 w-5 mt-1 text-red-900" aria-hidden="true" />
                                                        <div className="ml-3">
                                                            {subList.title} <span className="font-extrabold">{subList.header}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-2/5 h-80 xl:h-full mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(97, 42%, 36%, 0.3)" }}>
                <div className="hidden xl:flex justify-center items-center border-4 border-solid" style={{ borderColor: "hsla(97, 42%, 36%, 1)" }}>
                    <Image
                        src="/audit.png"
                        alt="Audit Process Flow"
                        width={500}
                        height={300}
                    ></Image>
                </div>
                <div className="flex xl:hidden justify-center items-center border-8 border-solid" style={{ borderColor: "hsla(97, 42%, 36%, 1)" }}>
                    <Image
                        src="/audit.png"
                        alt="Audit Process Flow"
                        width={350}
                        height={210}
                    ></Image>
                </div>
            </div>
        </main>
    )
}

export default Audit