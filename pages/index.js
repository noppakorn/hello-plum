import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Plum!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello Plum
        </h1>
        <p className={styles.description}>
          Missing computer camp
        </p>
      </main>

      <footer className={styles.footer}>
          Fuck off
      </footer>
    </div>
  )
}
