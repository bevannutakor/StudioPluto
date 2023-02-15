import Image from 'next/image'
import Logo from '../../src/logo.png';
import Link from 'next/link'
import styles from '../../styles/theme-documentation.module.css'

export default function ThemeDocumentation() {
    return (
      <>
        <div className={styles.documentation_sidebar}>
            <a href="/">
                <div className={styles.logo}>
                    
                        <Image 
                            src={Logo}
                            alt="Studio Pluto Logo"
                            width="888px"
                            height="996px"
                            layout="responsive"
                        />
                    
                </div>
            </a>
            <div className={styles.documentation_section}>
                <p className={styles.documentation_link}>
                  <Link href="/theme_docs/SetupStore">Setup Shopify Store</Link>
                </p>
                <p className={styles.documentation_link}>
                  <Link href="/theme_docs/ThemeSettings">Theme Settings</Link>
                </p>
                <p className={styles.documentation_link}>
                  <Link href="#">Sections</Link>
                </p>
                <p className={styles.documentation_link}>
                <Link href="#">Pages</Link>
                </p>
            </div>
        </div>
      </>
    )
  }
  