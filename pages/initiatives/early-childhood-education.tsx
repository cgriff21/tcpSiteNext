import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project - Early Childhood Education</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <div className="content-wrap">
          <section className="bg-white py-8">
            <div className="container max-w-5xl mx-auto">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Early Childhood Education
        </h1>

              <p className="text-center pt-10 mx-4">Multiple studies show that children with engaged parents, who attend a quality preschool program and those who participate in effective school partnerships perform better in school, are less likely end up on public assistance and/or to turn to crime later in life and are ultimately happier and earn more in their lifetimes.
            </p>

              <p className="text-center pt-10 mx-4">
                The Chance Project employs a multi-pronged approach designed to maximize the power of early childhood education and family development.
            </p>

              <p className="text-center pt-10 mx-4">
                We have established partnerships with school districts, non-profits, and faith based organizations to provide the highest quality early childhood education services to the most vulnerable children and families throughout Southern California.
            </p>

              <p className="text-center pt-10 mx-4">
                We create and support partnerships with early childhood education organizations to expand universal access to all children and families who desire it. This is truly the only way to improve the American education system.
            </p>


              <p className="text-center pt-10 mx-4">
                Our K-12 Partnership provide access and support to quality K-12 experiences regardless of location or family income level..
              </p>

              <div className="flex flex-wrap py-10">
                <div className="lg:w-5/12 px-4 ml-auto mb-6 text-left ">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    The I READ (READY, EAGER, ABLE, DEVELOPED) (2014-2017)
            </h3>
                  <p className="text-gray-600 mb-8">
                    The I READ (Ready, Eager, Able, Developed) Initiative focused on an important predictor of school success and high school graduation—grade-level reading by the end of third grade. Research shows that children who fall behind early in their education are unlikely to ever catch up. If a child does not attain a solid educational foundation in reading by the end of 3rd Grade, he or she will likely struggle for the rest of their lives.
              </p>
                </div>
                <div className="lg:w-6/12 px-4 pt-20 mb-6">
                  <Image
                    src="/images/back-to-school.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
              </div>
              <div className="flex flex-wrap flex-col-reverse lg:flex-row  py-10">
                <div className="lg:w-6/12 px-4 pt-10 mb-6">
                  <Image
                    src="/images/leading.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
                <div className="lg:w-5/12 px-4 ml-auto mb-6 text-right">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                      Early Head Start/Child Care Partnerships
              </h3>
                    <p className="text-gray-600">
                      We create opportunities for individuals to increase their income and ensure stability and ongoing training and advancement
                </p>
                  </div>
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
