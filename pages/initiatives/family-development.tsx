import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
      <Head>
        <title>The Chance Project - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-wrap py-10">
            <div className="lg:w-5/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                Family Development
            </h3>
              <p className="text-gray-600 ">We provide Early Childhood Educators and Family Support Workers with courses to obtain the Family Development Credential, along with continuing education units, to help families to set achievable goals for healthy self-reliance. We level the educational playing field for children by providing parents with the knowledge and tools needed to maximize their influence and the beneficial effect that only they can have on their children.
              </p>
            </div>
            <div className="lg:w-6/12 px-4 pt-10 mb-6 ">
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
      <Footer />
    </>
  )
}
