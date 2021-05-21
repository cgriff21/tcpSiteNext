import Head from 'next/head'
import Image from 'next/image'
import Footer from '@components/Footer'
import Header from '@components/Header'

export default function About() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project - Housing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="content-wrap">
          <section className="bg-white py-8">
            <div className="container max-w-5xl mx-auto">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Housing
               </h1>

              <p className="py-10 text-center mx-4">The Chance Project is a leading partner in addressing homelessness in the County of San Bernardino Collaboration among government, developers, landlords, service providers and additional partners is essential to identifying solutions to homelessness. To this end, The Chance Project also currently serves as the lead agency for the multi-agency collaborative known collectively as Pathways Network. The Pathways Network enlists a broad range of over 50 community-based service organizations, government service agencies, faith-based organizations, rental housing owners/operators, and other community stakeholders utilizing national best practice models and innovative locally designed approaches to leverage resources to help facilitate housing solutions for households experiencing or at-risk of homelessness in San Bernardino County.
              </p>
              <p className="py-5 text-center mx-4">Since 2016, Pathways Network has launched a number of new pilot initiatives focused on implementing evidence-based, cost-effective, best practice strategies to help prevent individuals and families at-risk from becoming homeless in the first place and help divert people who are literally homeless or unstably housed into stable housing solutions utilizing light touch rapid re-housing strategies.
             </p>

              <h3 className="text-center font-bold lg:pb-20">
                Some of the successful initiatives launched through include:
              </h3>

              <div className="lg:flex lg:flex-wrap lg:pt-10">
                <div className="lg:w-5/12 px-4 mr-auto mb-6 lg:text-left text-center">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    Pathways Network (2016-Present)
                   </h3>
                  <p className="text-gray-600 mb-8">A web-based universal application and referral distribution system established to receive and distribute housing crisis requests for assistance among over 50 housing and support services resource providers in San Bernardino County simultaneously.
                 </p>
                </div>
                <div className="md:w-6/12 px-4 mb-6 mx-auto">
                  <Image
                    src="/images/ordinaryDay.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
              </div>
              <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:py-10">
                <div className="md:w-6/12 px-4 my-auto mx-auto">
                  <Image
                    src="/images/agreement.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
                <div className="lg:w-6/12 px-4 ml-auto mb-6 lg:text-right text-center">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                      Landlord Link
              </h3>
                    <p className="text-gray-600">
                      Countywide Housing Identification and Placement (Landlord Link) activities in partnership with Inland Housing Solutions including landlord outreach and engagement, housing navigation assistance, a regional housing inventory of over 800 landlord partners, vacancy leads targeted to permanent housing voucher holders and a Weekly Hot Leads list of rental vacancies throughout the county distributed to assist homeless and at-risk households with achieving permanent housing.
                </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-wrap lg:py-10">
                <div className="lg:w-5/12 px-4 mr-auto mb-6 lg:text-left text-center">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    Shared Housing
            </h3>
                  <p className="text-gray-600 mb-6">Shared Housing Capacity Building activities to promote best practice cooperative living models as an affordable, non-program-based permanent housing solution and recruit new providers to help create more affordable housing options for people living on fixed incomes and other limited income households.
              </p>
                </div>
                <div className="md:w-6/12 px-4 mb-6 mx-auto">
                  <Image
                    src="/images/town.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
              </div>
              <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:py-10">
                <div className="md:w-6/12 px-4 my-auto mx-auto">
                  <Image
                    src="/images/hire.svg"
                    alt="The Chance Project Logo"
                    width={1440}
                    height={721}
                  />
                </div>
                <div className="lg:w-5/12 px-4 ml-auto mb-6 lg:text-right text-center">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                      Community Employment Pathways
              </h3>
                    <p className="text-gray-600">
                      Community Employment Pathways (CEP) Program, working in partnership the County of San Bernardino to help connect homeless and at-risk individuals to career and employment placement opportunities to facilitate participant self-sufficiency and achieve housing stability. All consumers who submit an online Pathways Request and indicate an interest in employment referrals are automatically linked to the First Step Staffing to begin the employment process.
                </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-wrap mb-8 lg:py-10">
                <div className="lg:w-5/12 px-4 mr-auto mb-6 lg:text-left text-center">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none py-10">
                    Capacity Building
            </h3>
                  <p className="text-gray-600 mb-6">Capacity building education and training activities conducted on behalf of the San Bernardino County Homeless Partnership and other community stakeholders to promote collective capacity building and system-wide development of common goals, best practice models, innovative service initiatives, flexible funding strategies and strategic resource alignment.
              </p>
                </div>
                <div className="md:w-6/12 px-4 mb-6 mx-auto">
                  <Image
                    src="/images/goals.svg"
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
