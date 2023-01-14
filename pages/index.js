import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './comps/navbar'
import { Canvas } from '@react-three/fiber'
//import { OrbitControls } from '@react-three/drei'

import Sphere from './comps/Sphere';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Studio Pluto</title>
        <meta name="description" content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." />
        <meta content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." property="twitter:description" />
        <meta content="summary_large_image" name="twitter:card"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      {/*<script type="module" src='./static/main-three.js' ></script>*/}
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Canvas className={styles.planet}>
            <ambientLight/>
            <pointLight position={[5,5,5]} intensity={3}/>
            <pointLight position={[-3,-3,2]} />
            <Sphere />
        </Canvas>
      </main>

      <div className={styles.home_about_container}>
          <h1>Lorem ipsum</h1>
          <div className={styles.home_about_info}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
      </div>

      <div className={styles.home_cards_container}>
        <div className={styles.home_cards}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles.home_cards}>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <div className={styles.intro_theme_container}>
        <h3 className={styles.intro_header}>Pluto Theme </h3>
        
      </div>

      <div class={styles.contact_container}>
          
          <a href="#" className={styles.contact_button}>Lets Work Together</a>
      </div>
    </>
  )
}
