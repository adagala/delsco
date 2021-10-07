import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Healthy Performance Management',
    description: 'for Great Performance',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Staff Outsourcing',
    description: 'for Capacity Management and Seamless Quality of Service',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Learning and Skills Development',
    description: "Train, Coach and Support to achieve Great Performance",
    href: '#',
    icon: ViewGridIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <>
      <Head>
        <title>Delsco Enterprises</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style data-href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Work+Sans:wght@500;700&display=swap">
        </style>
      </Head>

      <Popover className="relative bg-red-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-red-900 py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">Delsco Enterprises</span>
                  <Image
                    src="/logo-performance.png"
                    alt="Delsco Enterprises Performance Logo"
                    width={120}
                    height={47}
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-red-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">

              <Link href="/">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  About Us
                </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-400' : 'text-white',
                        'group bg-red-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-400 focus:outline-none'
                      )}
                    >
                      <span>Services</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-400' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-gray-400'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-red-900 px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-red-800"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-white">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                Contacts
              </a>

            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              &nbsp;
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 bg-red-900 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <a>
                        <span className="sr-only">Delsco Enterprises</span>
                        <Image
                          src="/logo-performance.png"
                          alt="Delsco Enterprises Performance Logo"
                          width={120}
                          height={47}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-red-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Popover.Button>
                      <Link href="/">
                        <a
                          key="Home"
                          className="-m-3 px-3 py-1 flex items-center rounded-md">
                          <span className="ml-3 text-base font-medium text-white">Home</span>
                        </a>
                      </Link>
                    </Popover.Button>
                    <Popover.Button>
                      <Link href="/about">
                        <a
                          key="About Us"
                          className="-m-3 px-3 py-1 flex items-center rounded-md">
                          <span className="ml-3 text-base font-medium text-white">About Us</span>
                        </a>
                      </Link>
                    </Popover.Button>
                    <a
                      key="Services"
                      href="#"
                      className="-m-3 px-3 py-1 flex items-center rounded-md">
                      <span className="ml-3 text-base font-medium text-white">Services</span>
                    </a>
                    {
                      solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 ml-2 px-3 py-1 flex items-center rounded-md"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                        </a>
                      ))
                    }
                    <a
                      key="Contacts"
                      href="#"
                      className="-m-3 px-3 py-1 flex items-center rounded-md">
                      <span className="ml-3 text-base font-medium text-white">Contacts</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Header