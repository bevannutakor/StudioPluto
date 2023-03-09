import Link from 'next/link'
import Head from 'next/head'
import ThemeSidebar from '../comps/ThemeSidebar';
import styles from '../../styles/theme-documentation.module.css'

export default function ThemeSections(){
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
                    <h3>Sections</h3>
                    <br></br>
                    <div className={styles.documentation_heading_paragraph} >
                        <p>The theme sections can be used across various pages in your site with the most obvious usage being the home page. Since the advent of shopify OS 2.0 you can add these sections to any page in your site, like collections and product pages. This is another way that you can show of your brand's uniqueness</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Carousel</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The carousel section displays different types of media at the full hight of the viewport. You can cycle through these different medias with this section. In order to create a new media that will be displayed in the carousel simply select a new block. The blocks allowed include: </p>
                        <ul className={styles.documentation_list}>
                            <li>An image</li>
                            <li>A self hosted video link</li>
                            <li>Youtube link</li>
                        </ul>
                        <div className={styles.documentation_heading_paragraph} >
                            <p>Note: You can upload video files to your shopify store and copy the link into the self hosted video link. <a href="#" className={styles.doc_sublink}>See more</a></p>
                        </div>
                        <p className={styles.documentation_text}>There are also more general customizations that you can make to the carousel section by selecting "carousel" in the sections tab. Here you can: </p>

                        <ul className={styles.documentation_list}>
                            <li>Choose the carousel transition animation</li>
                            <li>Disable the ability transition</li>
                            <li>Call to action elements</li>
                            <li>Call to action positioning and color scheme</li>
                        </ul>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Collections List</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Allows you to display cards of collections you choose to display. Simply add a new collection and make changes in each block as needed. Aside from each block you can make customizations to the section as a whole, these options include: </p>
                        <ul className={styles.documentation_list}>
                            <li>Choose the number of collections to show per row</li>
                            <li>Text font size and positioning</li>
                            <li>Add space around each collection card</li>                            
                        </ul>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Dropdown List</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Drop down list is a grid of titles with text that can be collapsed underneath. This is a way to display dynamic information easily. This also employs the use of blocks so you may choose how many dropdown blocks you want </p>

                        <ul className={styles.documentation_list}>
                            <li>A section heading can be added along with its position</li>
                            <li>Each dropdown list item will have a heading and text</li>                            
                        </ul>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Featured Collection</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Choose a featured collection to display as a section on any page. The maximum number of products from a featured collection that can be shown at a time is 16. </p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Image Banner</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The image banner section allows to display one or two standalone images with the option for text to be overlayed these images. Links can also be overlayed on these images so that when a use clicks on an image it takes them to the desired page</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Image Grid</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The image grid allows you to display various images in one simple grid on any page of your store. This is especially good for product lookbooks. Simply add a image block to begin the grid. You can also add a title to the section, choose how many images there should be per row and remove grid lines if needed. </p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Image with text</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Image and text displayed side by side in a grid. It is also possible to add a call to action button. </p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Newsletter</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Newsletter section that displays a form for people to sign up to your mailing list.</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Video</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Add either a self hosted video url or a youtube url. With the video your select you can choose to have it autoplay. Overlaying text on the video is also an option.</p>

                        <div className={styles.documentation_heading_paragraph} >
                            <p>Note: Learn how to upload a video file on to shopify and use the link inside this section <a href="/Media" className={styles.doc_sublink}>here</a></p>
                        </div>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Featured Product</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>Display a specific product from any collection.</p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Richtext Grid</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>This section allows you to display a grid of informational text. </p>
                    </div>

                    <div className={styles.documentation_section}>
                        <h4>Footer</h4>
                        <br></br>
                        <hr></hr>
                        <p className={styles.documentation_text}>The footer is a default section that you will find on all pages that you edit. You have options to choose a specific menu to be displayed on the footer, color design options and option to show supported payment provider icons  </p>
                    </div>
                </div>
            </main>
        </>

    )
}