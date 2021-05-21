import { useState } from 'react'
import Head from 'next/head'
import Footer from '@components/Footer'
import Header from '@components/Header'

import ContactAlert from '@components/Alerts/ContactAlert'


export default function Contact() {

  const [showAlert, setShowAlert] = useState(false);

  const submitContact = async event => {
    event.preventDefault()

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value
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
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project - Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="content-wrap">
          <section className="text-gray-600 body-font relative py-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Contact Us
        </h1>
            <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105780.81593511264!2d-117.22080933851284!3d34.05283536765307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db53c64196b143%3A0x75d9e9ca3bdbba67!2sRedlands%2C%20CA!5e0!3m2!1sen!2sus!4v1620756286043!5m2!1sen!2sus" ></iframe>


                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p className="mt-1">Redlands, CA </p>
                  </div>
                  <div className="px-6 mt-4">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a className="text-indigo-500 leading-relaxed text-xs md:text-base">info@thechanceproject.org</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p className="leading-relaxed">+1 (909) 414-3132</p>
                  </div>
                </div>
              </div>
              <form onSubmit={submitContact} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Send Us A Message</h2>
                <div className="relative mb-4">
                  <label htmlFor='name' className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor='email' className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor='message' className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button type="submit" className="text-white bg-TCPpurple-500 border-0 py-2 px-6 focus:outline-none hover:bg-TCPorange-500 rounded text-lg">Submit</button>
                {showAlert ? (
                  <div className="pt-5">
                    <ContactAlert {...showAlert} />
                  </div>
                ) : null}
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
