import { NextPage } from 'next'
import Layout from '../components/layout'

const Levels = [1, 2, 3, 4, 5, 6, 7] as const;
type Level = typeof Levels[number];

interface ICapacityLevel {
    level: Level;
    employeesLimit: number;
    price: IPricing,
    description: {
        first: string;
        second: string;
    }
}

interface IPricing {
    quarterly: number;
    yearly: number;
}

const CapacityLevels: ICapacityLevel[] = [
    {
        level: 1,
        employeesLimit: 50,
        price: {
            quarterly: 8_830,
            yearly: 30_720
        },
        description: {
            first: 'Level 1 (1 - 50)',
            second: 'Max. 50 Employees'
        }
    },
    {
        level: 2,
        employeesLimit: 100,
        price: {
            quarterly: 13_250,
            yearly: 46_080
        },
        description: {
            first: 'Level 2 (51 - 100)',
            second: 'Max. 100 Employees'
        }
    },
    {
        level: 3,
        employeesLimit: 200,
        price: {
            quarterly: 21_800,
            yearly: 75_840
        },
        description: {
            first: 'Level 3 (101 - 200)',
            second: 'Max. 200 Employees'
        }
    },
    {
        level: 4,
        employeesLimit: 300,
        price: {
            quarterly: 29_250,
            yearly: 101_760
        },
        description: {
            first: 'Level 4 (201 - 300)',
            second: 'Max. 300 Employees'
        }
    },
    {
        level: 5,
        employeesLimit: 500,
        price: {
            quarterly: 39_750,
            yearly: 138_240
        },
        description: {
            first: 'Level 5 (301 - 500)',
            second: 'Max. 500 Employees'
        }
    },
    {
        level: 6,
        employeesLimit: 1000,
        price: {
            quarterly: 61_300,
            yearly: 213_120
        },
        description: {
            first: 'Level 6 (501 - 1000)',
            second: 'Max. 1000 Employees'
        }
    },
    {
        level: 7,
        employeesLimit: 3000,
        price: {
            quarterly: 79_200,
            yearly: 275_520
        },
        description: {
            first: 'Level 7 (Over 1000)',
            second: 'Over 1000 Employees'
        }
    }
]

const priceFormatter = (price: number) => {
    const formattedPrice = Math.round(price * 100) / 100
    return formattedPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })
}

const PMST: NextPage = () => {
    return (
        <Layout title="PMST">
            <main className='my-4'>
                <section className="flex flex-col justify-center items-center h-full mt-4">
                    <div className="text-4xl font-work-sans font-bold text-delsco-500">
                        PMST
                    </div>
                    <div className="text-2xl font-semibold text-center">
                        Performance Management Structuring Tool
                    </div>
                    <div className="mt-6">
                        <a
                            href="https://pmst.delscokenya.com"
                            target='_blank'
                            rel='noreferrer'
                            className="w-full flex items-center justify-center px-8 py-1 border border-transparent text-base font-medium rounded-md text-delsco-500 bg-delsco-100 hover:bg-delsco-200 md:py-2 md:px-6"
                        >
                            View PMST
                        </a>
                    </div>
                    <div className="mt-4 text-2xl xl:text-3xl font-semibold underline underline-offset-2 cursor-pointer">
                        Pricing Structure
                    </div>
                </section>
                <section className='md:flex md:justify-center mt-4 overflow-x-auto'>
                    <table className='mx-2 md:mx-0'>
                        <thead className='uppercase text-center text-delsco-500 bg-delsco-100'>
                            <tr className=''>
                                <th className='px-6 py-1.5 border border-gray-500' rowSpan={2}>Capacity Levels</th>
                                <th className='px-6 py-1.5 border border-gray-500' rowSpan={2}>Max. Employees</th>
                                <th className='px-6 py-1.5 border border-gray-500' colSpan={2}>Annual License Fees</th>
                            </tr>
                            <tr className=''>
                                <th className='px-6 py-1.5 border border-gray-500'>Annually</th>
                                <th className='px-6 py-1.5 border border-gray-500'>Quarterly</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CapacityLevels.map((capacity) => (
                                <tr key={capacity.level} className='hover:bg-gray-100 cursor-pointer'>
                                    <td className='px-6 py-1 border border-gray-500'>Level {capacity.level}</td>
                                    <td className='text-right px-6 py-1 border border-gray-500'>
                                        {
                                            capacity.level < 7 ?
                                                capacity.employeesLimit
                                                :
                                                <span>
                                                    Unlimited
                                                </span>
                                        }
                                    </td>
                                    <td className='text-right px-6 py-1 border border-gray-500'>{priceFormatter(capacity.price.yearly)}</td>
                                    <td className='text-right px-6 py-1 border border-gray-500'>{priceFormatter(capacity.price.quarterly)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main >
        </Layout >
    )
}

export default PMST