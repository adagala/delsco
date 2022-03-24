import { NextPage } from "next"
import Image from 'next/image'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import { AuditList } from "../models/List"
import Layout from '../components/layout'
import ScrollToTop from '../components/scrollToTop'

const auditList: AuditList[] = [
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
]

const Audit: NextPage = () => {
    return (
        <Layout title="Professional Audit">
            <main>
                <section className="flex flex-col-reverse xl:flex-row px-2 w-full">
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
                                        auditList.map((list, i) => (
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
            </main>
            <ScrollToTop />
        </Layout>
    )
}

export default Audit