import { CheckIcon } from '@heroicons/react/outline';
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

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KES'
});

const percentageSavings = (pricing: IPricing) => {
    const quarterlyTotal = pricing.quarterly * 4;
    const saving = quarterlyTotal - pricing.yearly;
    const percentageSaving = (saving / quarterlyTotal) * 100;
    return `${Math.round(percentageSaving)}%`;
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
                    <div className="mt-6 text-2xl xl:text-3xl font-semibold underline underline-offset-2 cursor-pointer">
                        Plans & Pricing
                    </div>
                </section>
                <section className='grid grid-cols-1 gap-2 mx-10 md:grid-cols-3 md:gap-3 md:mx-10 lg:grid-cols-4 lg:gap-4 lg:mx-10 mt-4'>
                    {CapacityLevels.map((capacity) => (
                        <div key={capacity.level} className='shadow-xl border rounded-md px-4 text-center py-10 my-3 cursor-pointer transition ease-linear delay-75 hover:-translate-y-1 hover:scale-105 duration-100 hover:border-delsco-500'>
                            <div className='pt-2 text-lg'>
                                Capacity Level
                            </div>
                            <div className='pb-2 text-3xl font-bold text-delsco-500'>
                                {capacity.level}
                            </div>
                            <div className='py-3 border border-delsco-500 rounded'>
                                <span className='text-delsco-500 text-md font-semibold'>
                                    {currencyFormatter.format(capacity.price.quarterly)}
                                </span> / quarter
                            </div>
                            <div className='py-2 text-gray-800'>
                                <div className='pt-1'>
                                    Or prepay annually
                                </div>
                                <div className='pb-1'>
                                    (save {percentageSavings(capacity.price)})
                                </div>
                                <div className='py-1'>
                                    <span className='text-delsco-500 text-md font-semibold'>
                                        {currencyFormatter.format(capacity.price.yearly)}
                                    </span> / year
                                </div>
                            </div>
                            <div className='mt-2 pt-4 border-t border-t-gray-300 flex items-center'>
                                <CheckIcon className="flex-shrink-0 mr-2 h-5 w-5 text-delsco-500" aria-hidden="true" />
                                {
                                    capacity.level < 7 ?
                                        <span>
                                            Maximum of <span className='font-bold'> {capacity.employeesLimit} </span> employees
                                        </span>
                                        :
                                        <span>
                                            Unlimited employees
                                        </span>
                                }
                            </div>
                        </div>
                    ))}
                </section>
            </main >
        </Layout >
    )
}

export default PMST