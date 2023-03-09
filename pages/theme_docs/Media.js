import Link from 'next/link'
import Head from 'next/head'
import ThemeSidebar from '../comps/ThemeSidebar';
import styles from '../../styles/theme-documentation.module.css'

export default function ThemePages(){
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
                    <h3>Media</h3>
                    <br></br>
                    <div className={styles.documentation_heading_paragraph}>
                        <p>When dealing with media there are some things you need to be able to do before using it in your shopify store</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Videos</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>If you have video files that you want to use in your <a className={styles.doc_sublink} href="/SectionSettings">sections</a>. In your shopify admin You can upload images or videos but you must upload videos this way in order to use them in your theme sections, specifically the carousel and video section.</p>
                        <ul className={styles.documentation_list}>
                            <li>In your shopify admin click on content and then click on files below it.</li>
                            <li>There you will see a button that says upload files</li>
                            <li>Upload your video file</li>
                            <li>Once it is uploaded there will be a link icon that allows you to copy the link of your uploaded video, click on it</li>
                            <li>Then go back to your shopify theme editor and paste the link into the appropriate section, like the carousel video or the video section</li>
                        </ul>
                    </div>

                </div>
            </main>
        </>

    )
}