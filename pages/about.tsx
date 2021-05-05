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
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            About Us
        </h1>

            <p>We offer a wide range of programs and services designed to give individuals and families more control of their economic mobility by helping them address the root causes of their circumstances and move to a life of self-reliance and prosperity. We help them and their families by providing programs, information and resources and by advocacy, public outreach and media. 
              
            We leverage technology, entrepreneurial approaches and collective impact collaboration to create sustainable solutions that transform the lives of children, families and communities locally, nationally and worldwide. We bring together entrepreneurs, community organizations, government and like minded individuals to create, finance and implement collaborative projects for the common good.</p>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-4/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Housing
            </h3>
              <p className="text-gray-600 mb-8">We create and administer partnerships between landlords, property managers, government and non-profit organizations to address families in housing crisis throughout Southern California. We provide individuals with solutions to prevent homelessness.</p>
            </div>
            <div className="lg:w-7/12 px-4 mb-6">
            <Image
              // className="w-full sm:h-64 "
              src="/images/housing.svg"
              alt="The Chance Project Logo"
              width={1440}
              height={721}
            />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="lg:w-7/12 px-4 mb-6">
            <Image
              // className="w-full sm:h-64 "
              src="/images/income.svg"
              alt="The Chance Project Logo"
              width={1440}
              height={721}
            />
            </div>
            <div className="lg:w-4/12 px-4 ml-auto mb-6 text-right">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Income
              </h3>
                <p className="text-gray-600 mb-8">
                We create opportunities for individuals to increase their income and ensure stability and ongoing training and advancement
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 align-center mb-8 items-center">
            <div className="lg:w-4/12 px-4 ml-auto mb-6 text-left ">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Early Childhood Education
            </h3>
              <p className="text-gray-600 mb-8">Research has found that the best way to improve economic mobility is through investing in early childhood education, but the increasing costs of early education is creating a stumbling block, especially for low-income families. It's a form of structural inequality that keeps the poor from improving their lives.

              90% of a child’s brain is fully developed by the age of 5 years old. For this reason, The Chance Project has adopted a Cradle to Career approach that starts immediately at the very beginning..</p>
            </div>
            <div className="lg:w-7/12 px-4 mb-6">
            <Image
              // className="w-full sm:h-64 "
              src="/images/education.svg"
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
