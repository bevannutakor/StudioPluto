import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '../../src/logo.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/theme-documentation.module.css';

export default function ThemeDocumentation() {
    const [mobileSidebar, setMobileSidebar] = useState(false);
    const toggleSidebar = () => {
      if(mobileSidebar === true){
        setMobileSidebar(false);
      } else {
        setMobileSidebar(true);
      }
    }
    return (
      <>
        <div className={styles.mobile_modal} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={mobileSidebar===true ? faX : faBars} />
        </div>
        <div className={ mobileSidebar===true ? styles.documentation_sidebar_mobile : styles.documentation_sidebar}>
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
                  <Link href="/theme_docs/Sections">Sections</Link>
                </p>
                <p className={styles.documentation_link}>
                <Link href="/theme_docs/Pages">Pages</Link>
                </p>
                <p className={styles.documentation_link}>
                <Link href="/theme_docs/Media">Media</Link>
                </p>
            </div>
        </div>
      </>
    )
  }
  