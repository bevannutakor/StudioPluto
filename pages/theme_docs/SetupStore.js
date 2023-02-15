import Link from 'next/link'
import Head from 'next/head'
import ThemeSidebar from '../comps/ThemeSidebar';
import styles from '../../styles/theme-documentation.module.css'

export default function SetupStore(){
    return(
        <>
            <Head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Theme Documentation</title>
                <meta name="description" content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." />
                <meta content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." property="twitter:description" />
                <meta content="summary_large_image" name="twitter:card"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <ThemeSidebar/>
                <div className={styles.documentation_info}>
                    <h3>Set Up Store</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </main>
        </>
    )
}