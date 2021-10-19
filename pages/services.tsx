import { NextPage } from "next"
import Image from 'next/image'
import { BadgeCheckIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import { AuditList, List } from "../models/List"
import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'

const titlesList: AuditList[] = [
    {
        title: 'Quick first-line assessment',
        children: [
            {
                title: 'Online questionnaire administration'
            },
            {
                title: 'Analysis & report'
            },
            {
                title: 'Presentation'
            }
        ]
    },
    {
        title: 'In-depth audit of the various components of the performance management value chain',
        children: [
            {
                title: <span>End-to-end of entire value chain <span className="font-bold">OR</span> Selected/targeted components</span>
            },
            {
                title: 'Interviews & Systems reviews'
            },
            {
                title: 'Analysis & report'
            },
            {
                title: 'Presentation'
            }
        ]
    }
];

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

const Services: NextPage = () => {
    return (
        <Layout title="Services">
            <main>
                <section id="audit" className="flex flex-col-reverse xl:flex-row px-2 w-full">
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

                            <div className="mt-5 text-2xl font-lato">
                                <div className="font-bold">
                                    Setting the foundation for leapfrog improvements and growth
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
                    <div className="w-full xl:w-2/5 h-72 xl:h-auto mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(97, 42%, 36%, 0.1)" }}>
                        <div className="hidden xl:flex justify-center items-center border-4 border-solid" style={{ backgroundColor: "hsla(97, 42%, 36%, 0.3)" }}>
                            <Image
                                src="/search.png"
                                alt="Person with magnifying glass"
                                width={280}
                                height={262}
                            ></Image>
                        </div>
                        <div className="flex xl:hidden justify-center items-center border-4 border-solid" style={{ backgroundColor: "hsla(97, 42%, 36%, 0.3)" }}>
                            <Image
                                src="/search.png"
                                alt="Person with magnifying glass"
                                width={280}
                                height={262}
                            ></Image>
                        </div>
                    </div>
                </section>

                <section id="performance" className="flex flex-col-reverse px-2 xl:flex-row-reverse xl:h-full">
                    <div className="flex items-center mt-6 xl:mt-0 px-2 xl:p-10 w-full xl:w-3/5 bg-gray-100">
                        <div>
                            <div className="text-3xl xl:text-4xl font-work-sans text-red-900">
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
                                            <CheckCircleIcon className="flex-shrink-0 mt-1 h-6 w-6 text-red-900" aria-hidden="true" />
                                            <div className="ml-3">
                                                <span className="text-2xl font-bold">{list.title}</span> <span className="italic">{list.header}</span> <span className="text-red-900 italic">{list.description}</span>
                                                <div className="font-lato font-normal">
                                                    {
                                                        list.children && list.children?.map((subList, i) => (
                                                            <div key={i} className="text-lg flex py-1">
                                                                <BadgeCheckIcon className="flex-shrink-0 h-5 w-5 mt-1 text-red-900" aria-hidden="true" />
                                                                <div className="ml-3">
                                                                    {subList.title} <span className="italic">{subList.header}</span> <span className="text-red-900 italic">{subList.description}</span>
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

                <section id="outsourcing" className="flex flex-col-reverse px-2 xl:flex-row w-full">
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
                    <div className="w-full xl:w-2/5 h-72 xl:h-auto mt-4 xl:mt-0 flex justify-center items-center" style={{ backgroundColor: "hsla(201, 59%, 52%, 0.3)" }}>
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
                </section>

                <section id="development" className="flex flex-col-reverse px-2 xl:flex-row-reverse xl:h-full">
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

export default Services