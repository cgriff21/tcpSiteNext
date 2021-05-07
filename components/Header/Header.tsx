import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Dropdown from './Dropdown'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a>
                    <img
                      className="h-8 w-28 sm:h-auto"
                      src="/images/headerLogo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex flex-row items-center justify-end md:flex-none">
                <nav className="hidden md:flex space-x-10">
                  <Link href="/">
                    <a className="hover:text-gray-900">Home</a>
                  </Link>
                  <Link href="about">
                    <a className="hover:text-gray-900">Who We are</a>
                  </Link>
                  <Link href="/">
                    <a className="hover:text-gray-900">Our Initiatives</a>
                  </Link>
                  <Link href="https://www.mightycause.com/organization/Chance-Project">
                    <a className="hover:text-gray-900">Ways To Give</a>
                  </Link>
                  <Link href="contact">
                    <a className="hover:text-gray-900">Contact Us</a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <a>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="/images/logo.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link href="/">
                        <a className="mr-5 hover:text-gray-900">Home</a>
                      </Link>
                      <Link href="about">
                        <a className="mr-5 hover:text-gray-900">Who We are</a>
                      </Link>
                      <Link href="/">
                        <a className="mr-5 hover:text-gray-900">Our Initiatives</a>
                      </Link>
                      <Link href="https://www.mightycause.com/organization/Chance-Project">
                        <a className="mr-5 hover:text-gray-900">Ways To Give</a>
                      </Link>
                      <Link href="contact">
                        <a className="mr-5 hover:text-gray-900">Contact Us</a>
                      </Link>
                      <Dropdown />
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
