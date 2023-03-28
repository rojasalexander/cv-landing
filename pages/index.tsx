import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MouseEvent } from 'react'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function handleClick(event: MouseEvent<HTMLDivElement>) {
  console.log('The div was clicked.', event);
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Alexander Rojas</title>
        <meta name="description" content="I'm a Front-End Developer that loves to create new applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon/web-icon.ico" />
      </Head>
      <main className={styles.main}>
        <section
          aria-label="Name"
        >
          <h1 className={styles.title}>Alexander Rojas</h1>
        </section>

        <section className={styles.midContent}>
          <div className={styles.description}>
            <p>Front-end developer based in Asunción, Paraguay</p>
          </div>

          <div className={styles.langIcons}>
            <p className='devicon-html5-plain'></p>
            <p className='devicon-css3-plain'></p>
            <p className='devicon-typescript-plain'></p>
            <p className='devicon-angularjs-plain'></p>
            <p className='devicon-react-plain' ></p>
            <p className='devicon-python-plain' ></p>
          </div>

          <div className={styles.socialIcons}>
            <a className='devicon-github-original iconLg' href='https://github.com/rojasalexander?tab=repositories' target="_blank"></a>
            <a className='devicon-linkedin-plain iconLg' href='https://www.linkedin.com/in/alexander-rojas-73701015b/' target="_blank"></a>
          </div>
        </section>

        <section>
          <p className={styles.copyRight}>© Alexander Rojas 2023</p>
        </section>
      </main>
    </>
  )
}
