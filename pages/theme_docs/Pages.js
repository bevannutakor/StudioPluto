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
                    <h3>Pages</h3>
                    <br></br>
                    <div className={styles.documentation_heading_paragraph}>
                        <p>The pages detailed below can use the sections described <a className={styles.doc_sublink} href="/SectionSettings">here.</a> These pages are essential to your shopify store and somme will be the main way people purchase your products</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Home Page</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The home page is where your customers first land when they arrive on your website. Use the <a className={styles.doc_sublink} href="/SectionSettings">sections</a> to fully customize your home page.</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Product Page</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The product page is the template page for displaying all your products at once and showing each individual collection. You can customize how many items you want to display per row, allow for product filtering and adding padding around items.</p>
                        
                            <p className={styles.documentation_text}>This page also allows you to add <a className={styles.doc_sublink} href="/theme_docs/SectionSettings">sections</a> for each of your different collections. If you have sections you want to add but don't want those sections to show for some collections you need to create something called a template and then assign a specific collection to it.</p>

                            <ul className={styles.documentation_list}>
                                <li>Click "collections" page in your store editor page navigation</li>
                                <li>At the bottom click create template and give it a descriptive name</li>
                                <li>Exit out of your shopify theme editor and back into your admin.</li>
                                <li>In your admin click on products and then go to collections</li>
                                <li>Select a collection and on the very bottom right you will see a select box, there your will assign the collection to the template you created</li>
                                <li>Then go back to your theme editor and add the sections you want for that specific template and it will be applied to the collections under that template</li>
                            </ul>
                    </div>
                    <div className={styles.documentation_section}>
                        <h4>Custom Page</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>You can create your own custom pages if you want as well.</p>
                        <ul className={styles.documentation_list}>
                            <li>In your shopify admin go to online store then pages</li>
                            <li>There you will see a button that allows you to create new pages</li>
                            <li>You can also add your <a className={styles.doc_sublink} href="/theme_docs/SectionSettings">sections</a> to these pages, you can create templates in the same way that you do for the collections pages</li>
                        </ul>
                        <div className={styles.documentation_heading_paragraph}>
                            <p>Note: If you choose to have a blog on your website the the settings for creating a blog post are the same as creating pages, but in your shopify admin you must go to "Online Store" then "Blog posts." You can also create templates for these as well when you are adding shopify <a className={styles.doc_sublink} href="/theme_docs/SectionSettings">sections</a></p>
                        </div>
                    </div>

                </div>
            </main>
        </>

    )
}