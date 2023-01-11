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
        <Canvas>
            <ambientLight/>
            <pointLight position={[5,5,5]} intensity={3}/>
            <pointLight position={[-3,-3,2]} />
            {/*<axesHelper args={[10]}/>*/}
            <Sphere />
        </Canvas>
      </main>

    </>
  )
}
