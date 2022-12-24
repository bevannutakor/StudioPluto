import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from './comps/navbar'
import CB from '../src/cb.png'
import BED from '../src/bed.png'

import styles from '../styles/Web.module.css'



export default function Web() {
  return (
    <div>
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
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.words}>
            <h2>We've made a lot of websites, but here are the two which showcase our versatility the most.</h2>
        </div>
        <div className={styles.cb}>
            <div className={styles.oval}>
                <h1 className={styles.rotate}>Cancer Blake</h1>
            </div>
        </div>
        <div className={styles.explain}>
            <div className={styles.eleft}>
                <ul>
                    <li>ANIMATIONS</li>
                    <li>BRANDING</li>
                    <li>ILLUSTRATION</li>
                    <li>CUSTOM CODE</li>
                </ul>
            </div>
            <div className={styles.eright}>
                <h4> asdfasdf jas;dlkfja skl;djf kl;asdjf; lasdj</h4>
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.cbimage}>
                <Image 
                    src={CB}
                    alt="Shopify Theme Coming Soon"
                    width="3008px"
                    height="1778px"
                    style={styles.image}
                    layout="responsive"
                />
            </div>
        </div>

        <div className={styles.bed}>
            <div className={styles.oval2}>
                <h1 className={styles.rotate}>Black Excellence Day</h1>
            </div>
        </div>
        <div className={styles.explain}>
            <div className={styles.eleft}>
                <ul>
                    <li>ANIMATIONS</li>
                    <li>BRANDING</li>
                    <li>LOGO DESIGN</li>
                </ul>
            </div>
            <div className={styles.eright}>
                <h4> asdfasdf jas;dlkfja skl;djf kl;asdjf; lasdj</h4>
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.bedimage}>
                <Image 
                    src={BED}
                    alt="Shopify Theme Coming Soon"
                    width="3012px"
                    height="1776px"
                    style={styles.image}
                    layout="responsive"
                />
            </div>
        </div>
      </main>

      <canvas id="planet" class={styles.planet}></canvas> 
      <canvas id="stars" class={styles.stars}></canvas>
     </>
    </div>
  )
}
