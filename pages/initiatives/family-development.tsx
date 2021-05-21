import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project - Family Development</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="content-wrap">
          <section className="bg-white py-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Family Development
        </h1>
            <div className="container max-w-5xl m-auto lg:pt-24">
              <div className="lg:flex lg:flex-wrap lg:py-10">
                <div className="lg:w-5/12 px-4 ml-auto mb-6 lg:text-left text-center">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    Family Development Credential
            </h3>
                  <p className="text-gray-600 ">We provide Early Childhood Educators and Family Support Workers with courses to obtain the Family Development Credential, along with continuing education units, to help families to set achievable goals for healthy self-reliance. We level the educational playing field for children by providing parents with the knowledge and tools needed to maximize their influence and the beneficial effect that only they can have on their children.
              </p>
                </div>
                <div className="md:w-6/12 px-4 mb-6 m-auto">
                  <Image
                    src="/images/studying.svg"
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
