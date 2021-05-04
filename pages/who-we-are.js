import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/TCPhome.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Chance Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Who We are
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/">
          <a className={styles.card}>
            <h3>Home &rarr;</h3>
            <p>Back To Home</p>
          </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
