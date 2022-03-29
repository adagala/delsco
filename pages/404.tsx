import { NextPage } from 'next'
import Layout from "../components/layout"

const Custom404: NextPage = () => {
    return (
        <Layout title="Error 404">
            <main className="h-full font-work-sans border-t border-solid" >
                <div className="h-full flex items-center justify-center">
                    <div className="px-4 text-6xl font-extrabold text-delsco-500">
                        404
                    </div>
                    <div className="border-l px-4">
                        <div className="text-5xl font-extrabold">
                            Page not Found
                        </div>
                        <div className="text-lg mt-2 text-gray-700">
                            Please check the URL in the address bar and try again
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Custom404