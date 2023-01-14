import React from 'react'
import Head from 'next/head'
import Navbar from './comps/navbar'
import styles from '../styles/Checkout.module.css'


export default async function CheckoutPage(){
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
    
         </>
        </div>
      )
}