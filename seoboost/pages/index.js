import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>SeoBoost</title>
        <meta name="description" content="Mejora el seo tu web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.myoverlay}>
        </div>
        <video className={styles.myvideo} src="https://res.cloudinary.com/dj8ytkjbs/video/upload/v1665047111/video_2_zng4an.mp4"
          autoplay="true" muted="true" loop="true"></video>

        {/*  <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">SeoBoost</a>
        </h1> */}
        <img className={styles.indeximg} src='https://res.cloudinary.com/dj8ytkjbs/image/upload/v1665045772/SEOBOOST_Mesa_de_trabajo_1_copia_el7jh8.png'></img>
      </main>
    </div>
  )
}
