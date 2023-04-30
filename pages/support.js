import React from 'react';
import Head from 'next/head';
import Navbar from './comps/navbar'

import styles from '../styles/Support.module.css';


export default function Support() {
    return(
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
            <Navbar/>
            
            <div class={styles.info_container}>
                <div class={styles.support_info1}>
                    <h2>What we offer</h2>
                    <ul class={styles.support_list}>
                        <li>Answering Questions about the Studio Pluto Theme</li>
                        <li>Help with installing the theme and familiarization with theme settings</li>
                        <li>Fixing bugs that are present in unmodified theme installs</li>
                        <li>Support for theme updates</li>
                    </ul>
                </div>

                <div class={styles.support_info2}>
                    <h2>What we do not offer</h2>
                    <ul class={styles.support_list}>
                        <li>Answering Questions about the Studio Pluto Theme</li>
                        <li>Help with installing the theme and familiarization with theme settings</li>
                        <li>Fixing bugs that are present in unmodified theme installs</li>
                        <li>Support for theme updates</li>
                    </ul>
                </div>
            </div>

            <form>
                {/*
                    Name
                    email
                    shop url
                    issue -> select
                    Detailed description
                */}

                
            </form>
        </>
    )
}