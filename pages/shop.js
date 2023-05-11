import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Modal from 'react-modal';
import Navbar from './comps/navbar';
import styles from '../styles/Shop.module.css';

import PreviewOne from '../src/ThemePreview1.png';
import PreviewTwo from '../src/ThemePreview2.png';
import PreviewThree from '../src/ThemePreview3.png';
import PreviewFour from '../src/ThemePreview4.png';

export default function Shop() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
      //Change to modal
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, [])

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

            <div className={styles.product_container}>
                
                <div className={styles.product_description_container}>
                  <h1 className={styles.intro_title}>Pluto Shopify Theme</h1>
                  
                  <p>A fully customizable theme for your Shopify store, designed to meet the latest standards in web design. you have the flexibility to create a unique and visually appealing website that effectively showcases your brand and products. </p>
                  
                  <form action="/api/theme_checkout_session" method="POST" className={styles.buy_container}>
                    <button type="submit" role="link" className={styles.buy} >Purchase Now - $50 USD</button>
                  </form>
                </div>
                
                <div className={styles.product_bundle_description_container}>
                  <h1 className={styles.intro_title}>Theme and 3D Logo Package</h1>
                  
                  <p>Purchaseing this package gives you the same fully customizable theme but also gives you access to the creation of your very own 3D logo models to complement your theme and one background animation as well.</p>
                  
                  <form action="/api/theme_deluxe_checkout_session" method="POST" className={styles.buy_container}>
                    <button type="submit" role="link" className={styles.buy}>Purchase Now - $100 USD</button>
                  </form>
                </div>
            </div>
            <div className={styles.demo_container}>
                <div className={styles.demo_images}>
                    <Image 
                        src={PreviewOne}
                        alt="Shopify Theme Demo Image"
                        layout="responsive"
                    />
                    <Image 
                        src={PreviewTwo}
                        alt="Shopify Theme Demo Image"
                        layout="responsive"
                    />
                    <Image 
                        src={PreviewThree}
                        alt="Shopify Theme Demo Image"
                        layout="responsive"
                    />
                    <Image 
                        src={PreviewFour}
                        alt="Shopify Theme Demo Image"
                        layout="responsive"
                    />
                </div>
                <div className={styles.demo_button}>
                    <a target="_blank" href="https://studioplutodemo.myshopify.com/">See the demo</a>
                </div>
            </div>
            <div className={styles.more_info_container}>
                <div className={styles.more_info_one}>
                  <h2>Customer Retention</h2>
                  <br></br>
                  <p>Pairing the products you offer to your customers alongside a website that is appealing to the eye elevates the perception of your company and assures them of the quality of your product</p>
                </div>

                <div className={styles.more_info_two}>
                  <h2>Design flexibility</h2>
                  <br></br>
                  <p>An added perk to this theme is the creative design customizations that are allowed. Check out our theme documentation to learn how to customize your theme quickly </p>
                  <div className={styles.docs_link_container}>
                    <a href="/theme_docs/SetupStore" className={styles.docs_link}>Theme Documentation</a>
                  </div>
                </div>
            </div>

            <div className={styles.support_container}>
                <h2>Installation Support</h2>
                <br></br>
                <p>We offer additional support to help you get the most out of the theme you have purchased from us. We are ready to assist you in configuring your store and ensuring that everything is set up to your liking. If you have any questions or need help with setting up your theme contact support and we will be there to help you every step of the way. If there are advanced features that you would like for your specific needs</p>

                <a href="/support" className={styles.support_link}>Support</a>
            </div>
      </main>
     </>
    </div>
  )
}
