import { NextPage } from 'next'
import { OfficeBuildingIcon, PhoneIcon, InboxInIcon } from '@heroicons/react/outline'
import Layout from '../components/layout'


const Contacts: NextPage = () => {
    return (
        <Layout title="Contacts">
            <main className="h-full font-lato bg-gradient-to-b from-red-900 border-t border-solid" >
                <div className="h-full flex flex-col xl:flex-row items-center justify-around">
                    <div className="h-72 w-80 mt-4 xl:-mt-36 flex justify-center shadow-xl bg-white">
                        <div className="flex flex-col justify-center items-center">
                            <OfficeBuildingIcon className="h-11 w-11 text-delsco-500" />
                            <div className="my-1 text-delsco-500 font-work-sans font-bold text-lg">
                                Physical Address
                            </div>
                            <div className="my-1">
                                1st Floor - Office 1B7
                            </div>
                            <div className="my-1">
                                Magharibi Place, Mai Mahiu Road
                            </div>
                            <div className="my-1">
                                Opposite T-Mall Nairobi
                            </div>
                        </div>
                    </div>
                    <div className="h-72 w-80 mt-4 xl:mt-10 flex justify-center shadow-xl bg-white">
                        <div className="flex flex-col justify-center items-center">
                            <PhoneIcon className="h-11 w-11 text-delsco-500" />
                            <div className="my-1 text-delsco-500 font-work-sans font-bold text-lg">
                                Contacts
                            </div>
                            <div className="my-1">
                                <a className="hover:underline hover:text-delsco-500" href="tel:254798491899">+254 798 491899</a>
                            </div>
                            <div className="my-1">
                                <a className="hover:underline hover:text-delsco-500" target="_blank" href="mailto:support@delscokenya.com" rel="noreferrer">support@delscokenya.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-72 w-80 mt-4 mb-4 xl:-mt-36 xl:mb-0 xl:border-b xl:border-solid flex justify-center shadow-xl bg-white">
                        <div className="flex flex-col justify-center items-center">
                            <InboxInIcon className="h-11 w-11 text-delsco-500" />
                            <div className="my-1 text-delsco-500 font-work-sans font-bold text-lg">
                                Postal Address
                            </div>
                            <div className="my-1">
                                P.O. Box 14459, 00100
                            </div>
                            <div className="my-1">
                                Nairobi, Kenya.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Contacts