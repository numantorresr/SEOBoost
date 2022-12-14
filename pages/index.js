import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


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
          autoPlay muted loop></video>
        <img className={styles.indeximg} src='https://res.cloudinary.com/dj8ytkjbs/image/upload/v1665045772/SEOBOOST_Mesa_de_trabajo_1_copia_el7jh8.png'></img>
      </main>
      <section className={styles.indexsectionone} >
        <span>Busca.</span>
        <span>Audita.</span>
        <span>Compara.</span>
        <div>
          <h1>& potencia tu web ⚡️</h1>
        </div>
      </section>
      <section className={styles.indexsectiontwo} >
        <span>¿Necesitas comprar enlaces? <br></br> <ExpandCircleDownIcon sx={{ m: 5 }} /> <br></br> Tenemos más de <span className={styles.cuatrocinco}>45k </span>opciones y con nuestro comparador podrás encontrar la opcíon que mejor se adapte a tus necesidades para potenciar tu web. <br></br> <br></br> <br></br> ¡Crea tu cuenta y pruébalo!</span>
        <Link
          component="a"
          href="/login"
        >
          <Button
            className={styles.btnindexcomparator}
            size="small"
            href='/edit'
            style={{ color: "white" }}
          >
            Probar comparador </Button>
        </Link>
      </section>
      <section className={styles.indexsectionthreecontainer}>
        <span>Nuestras otras herramientas para optimizar tu web: </span>
        <div className={styles.indexsectionthree}>
          <Link
            href='/users'
          >
            <div className={styles.imgindexa}>
              <h1>Perfiles SEO</h1>
            </div>
          </Link>
          <Link
            href='/audit'
          >
            <div className={styles.imgindexb}>
              <h1>Auditoría</h1>
            </div>
          </Link>
          <Link
            href='/keywords'
          >
            <div className={styles.imgindexc}>
              <h1>Keywords</h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
