import React from 'react'
import Image from 'next/image'
import Logo from '../../src/logo.png'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar} id='navbar'>
        <div className={styles.navleft}>
          <a href="/web">WEB</a>
        </div>
        
        <div className={styles.navmid}>
            <div className={styles.logo}>
              <a href="/">
                <Image 
                  src={Logo}
                  alt="Studio Pluto Logo"
                  width="888px"
                  height="996px"
                  style={styles.image}
                  layout="responsive"
                />
              </a>
            </div>
        </div>
        
        <div className={styles.navright}>
          <a href="#">SHOP</a>
        </div>
    </div>
  )
}
