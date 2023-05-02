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
                    <h3>Set Up Shopify Store</h3>
                    <br></br>
                    <h4>Quick set up before you start customizing the Pluto Theme</h4>
                    <br></br>
                    <div className={styles.documentation_bubble}>
                        <p>If you are just getting started with Shopify you may want to refer to these links below</p>
                    </div>
                    <br></br>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/domains">Setting Up Domains</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/online-store/menus-and-links">Menu Links</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/products/add-update-products">Creating Products</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/products/collections">Creating collections</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/payments/getting-paid">Payment Set up</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/apps/installing-apps">Apps</a>
                    </p>

                    <p className={styles.external_doc_links}>
                        <a href="https://help.shopify.com/en/manual/online-store/themes/adding-themes#:~:text=In%20the%20Theme%20library%20section%2C%20click%20Add%20theme%2C%20and%20then,Themes%20page%20of%20your%20admin.">Upload Your Theme Zip File</a>
                    </p>

                    <div className={styles.setup_warning}>
                        <p>Note: While we do offer support for theme customization and theme assets we do not offer support for third-party apps or third-party code installations.</p>
                    </div>
                    
                </div>
            </main>
        </>
    )
}