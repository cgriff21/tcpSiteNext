import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function Income() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project - Income</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="content-wrap">
          <section className="bg-white py-8">

            <div className="container box-shadow max-w-6xl mx-auto p-5">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Income
              </h1>
              <div className="lg:flex lg:flex-wrap lg:py-10">
                <div className="lg:w-5/12 px-4 ml-auto mb-6 lg:text-left text-center">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    Economic Mobility Program
                  </h3>
                  <p className="text-gray-600 mb-8">Our Economic Mobility Program helps families move toward financial security and introduces pathways to economic opportunity. Outcomes are improved for at-risk families by addressing underlying social determinants of quality of life. Enrolled families work one-on-one with a specially trained coach to identify and to set goals for the future.
                  </p>
                </div>
                <div className="md:w-6/12 px-4 mb-6 mx-auto">
                  <Image
                    src="/images/wallet.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
