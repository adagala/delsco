import { NextPage } from 'next'
import Layout from '../components/layout'


const PMST: NextPage = () => {
    return (
        <Layout title="PMST">
            <main className="h-full">
                <section className="flex flex-col justify-center items-center h-full mt-4">
                    <div className="text-3xl xl:text-4xl font-work-sans font-bold text-red-900">
                        PMST
                    </div>
                    <div className="text-lg">
                        Performance Management Structuring Tool
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default PMST