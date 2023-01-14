import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Shopify from '../src/SHOPIFY.gif'
import Navbar from './comps/navbar'
import styles from '../styles/Shop.module.css'

export default function Shop() {
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
            {/*<Image 
            src={Shopify}
            alt="Shopify Theme Coming Soon"
            width="1243px"
            height="976px"
            style={styles.image}
            layout="responsive"
            />*/}

            <div className={styles.product_container}>
                <div className={styles.product_image_container}>
                  <div className={styles.product_image}>
                    
                  </div>
                </div>

                <div className={styles.product_description_container}>
                  <h1 className={styles.intro_title}>Introducing Pluto Theme</h1>
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  
                  <div className={styles.buy_container}>
                    <a href="#" className={styles.buy}>Purchase Now</a>
                  </div>
                </div>
            </div>

            <div className={styles.more_info_container}>
                <div className={styles.more_info_one}>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className={styles.more_info_two}>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className={styles.questions_container}>
                <h2>FAQs</h2>
            </div>
      </main>
     </>
    </div>
  )
}
