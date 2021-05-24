import Head from 'next/head'
import Link from 'next/link'
import Footer from '@components/Footer'
import Header from '@components/Header'
import styles from '../../styles/Home.module.css'

export default function initiatives() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Chance Project- Initiatives</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <div className="content-wrap">
          <section className="bg-white py-8 mx-1 md:mx-6">
            <div className="container box-shadow max-w-6xl mx-auto p-5">

              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 ">
                Our Initiatives
          </h1>

              <p className={styles.description}>
                Since 2012, The Chance Project has passionately devoted its energy to advocating and collaborating for the most needy, disadvantaged and politically underrepresented members of our local, national and global family.
          </p>

              <div className={styles.grid}>
                <Link href="initiatives/housing">
                  <a className={styles.card}>
                    <h3>Housing &rarr;</h3>
                    <p>The Chance Project is a leading partner in addressing homelessness in the County of San Bernardino.The Chance Project also currently serves as the lead agency for the multi-agency collaborative known collectively as Pathways Network.</p>
                  </a>
                </Link>

                <Link href="initiatives/income">
                  <a className={styles.card}>
                    <h3>Income &rarr;</h3>
                    <p>Our Economic Mobility Program helps families move toward financial security and introduces pathways to economic opportunity. Outcomes are improved for at-risk families by addressing underlying social determinants of quality of life.</p>
                  </a>
                </Link>
                <Link href="initiatives/family-development">
                  <a className={styles.card}>
                    <h3>Family Development &rarr;</h3>
                    <p>We provide Early Childhood Educators and Family Support Workers with courses to obtain the Family Development Credential, along with continuing education units, to help families to set achievable goals for healthy self-reliance.</p>
                  </a>

                </Link>
                <Link href="initiatives/early-childhood-education">
                  <a className={styles.card}>
                    <h3>Early Childhood Education &rarr;</h3>
                    <p>The Chance Project employs a multi-pronged approach designed to maximize the power of early childhood education and family development.</p>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
