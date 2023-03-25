import Link from 'next/link'
import Head from 'next/head'
import ThemeSidebar from '../comps/ThemeSidebar';
import styles from '../../styles/theme-documentation.module.css'

export default function ThemeSettings(){
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
                    <h3>Theme Settings</h3>
                    <br></br>
                    <div className={styles.documentation_heading_paragraph}>
                        <p>The theme settings are the settings that deal with the overall layout of your theme. These settings range from basic color palettes, fonts, and backgrounds to more advanced options such as headers and checkout to reflect your unique branding, vision, and identity.</p>
                    </div>
                   
                    <div className={styles.documentation_section}>
                        <h4>Alternate Landing Page</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}> By default the landing page displayed is the one that has all the sections that are added by default check the <a className={styles.doc_sublink} href="/SectionSettings">sections</a> page to learn more. The alternate landing page gives the ability to have a more minimalist feel. After selecting the checkbox enabling the alternate landing page will display all the elements that are given in the following settings:</p>
                        <ul className={styles.documentation_list}>
                            <li>Choose a background image</li>
                            <li>Choose a background video - this will overide the background image</li>
                            <li>Choose a logo to display over the image or video background</li>
                            <li>A call to action</li>
                            <li>Choose the link for the call to action</li>
                            <li>Choose the color scheme for the call to action </li>
                            <li>If you choose to display your full navigation this will override the display of your call to action</li>
                        </ul>

                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Fonts</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Simply choose a primary and secondary font for your website. Primary fonts are applied to things like header links, text and titles, and secondary fonts are applied to buttons and non-header links</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Theme Colors</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Here you have the ablity to choose the entire color scheme of the theme. The options are as follows: </p>
                        <ul className={styles.documentation_list}>
                            <li><b>Primary Colors</b> - These are the colors that define the most noticable elements of your theme, the grid line color, page background color, and text color</li>
                            <li><b>Accent Colors</b> - These are colors that are define minor details of your theme but still add a nice touch. It is also used for some styling of sections </li>
                            <li><b>Button Colors</b> - Choose custom button background color, custom button text color, and custom button border color</li>

                            <li><b>Scrollbar color</b> - make your website stand out even more by adding a color to the scrollbar</li>
                        </ul>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Navigation Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Choose how your navigation header will look on your storefront, to make the navigation bar look complete do the following: </p>
                        <ul className={styles.documentation_list}>
                            <li>Choose a navigation style</li>
                            <li>Choose a logo to display on the navigation</li>
                            <li>Make sure to test the size of your header for both desktop and mobile views using the logo size sliders</li>
                        </ul>
                        <div className={styles.documentation_heading_paragraph}>
                            <p>Note: When alternating between a navigation style you may need to adjust the size of your logo to the corresponding style</p>
                        </div>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Grid Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The theme employs the use of many grid borders, choose their design by changing the border thickness, or style.</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Email Popup</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Email popup prompts people to sign up to your mailing list upon entering your website. After checking the "enable newsletter popup" checkbox the following options will be displayed: </p>
                        <ul className={styles.documentation_list}>
                            <li>Type in a heading</li>
                            <li>Type in a subheading</li>
                            <li>Choose a time interval for the popup to show</li>
                        </ul>   
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Cart Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Choose the design of the cart. Either a sliding drawer or a full page</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Social Sharing Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Enter a link to the corresponding social network and it's logo will appear in the footer of your theme.</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Mouse Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Choose a image for your mouse to make the theme have a more eye-catching style</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Favicon Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>This is the image displayed as the tab icon. Simply upload an image to display it</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Checkout Settings</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The checkout settings allow you to customize the page your customers see when they are entering their purchase details in the checkout page</p>

                        <ul className={styles.documentation_list}>
                            <li>Choose banner settings. This allows you to display a background image, logo, and the positioning and size of the logo</li>
                            <li>Main content area gives the option for another background image and allows for color options for the background and input fields</li>
                            <li>Order summary page gives options to display a background image and choose a background color</li>
                            <li>Choose specific fonts for the checkout pages</li>
                            <li>Choose specific colors for the checkout pages</li>
                        </ul> 
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Custom Css</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Gives option to allow you to modify the store even further via the use of css code.</p>
                        <div className={styles.documentation_heading_paragraph}>
                            <p>Note: It is recommended that you customize the css of the theme if you are extremely comfortable with doing so. <a className={styles.doc_sublink}href="https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/add-css">Check shopify's documentation for adding custom css</a></p>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}