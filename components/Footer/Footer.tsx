import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NewsletterAlert from '@components/Alerts/NewsletterAlert'

export default function Footer() {

  const [showAlert, setShowAlert] = useState(false);

  const addToNewsletter = async event => {
    event.preventDefault()

    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email: event.target.email.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    if (result.success === "success") {
      setShowAlert(false);
      setShowAlert(true);
    }
  }


  return (
    <footer className="text-gray-600 border-t body-font bg-gray-100">
      <div className="container px-5 pt-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Links</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </Link>
              </li>
              <li>
                <Link href="/initiatives">
                  <a className="text-gray-600 hover:text-gray-800">Initiatives</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="https://www.pathwaysnetwork.net/">Pathways Network</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="https://landlordlink.net/">Landlord Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="https://www.mightycause.com/organization/Chance-Project">Donate</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE TO OUR NEWSLETTER</h2>
            <form onSubmit={addToNewsletter} className="space-y-5">
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-nowrap flex-wrap justify-center pb-5 items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor='email' className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type='submit' className="mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-TCPpurple-500 border-0 py-2 px-6 focus:outline-none hover:bg-TCPorange-500 rounded">Submit</button>
              </div>
            </form>
            {showAlert ? (
              <NewsletterAlert {...showAlert} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <a>
            <img
              className="h-12 w-28 sm:h-12"
              src="/images/headerLogo.png"
              alt=""
            />
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 The Chance Project
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href="https://www.facebook.com/TheChanceProject1">
            <svg fill="#5E1346" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href="https://www.instagram.com/thechanceproject/">
            <svg fill="none" stroke="#5E1346" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
