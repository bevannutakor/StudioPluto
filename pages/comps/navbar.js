import React from 'react'
import Image from 'next/image'
import Logo from '../../src/logo.png'
import Logo2 from '../../src/plutofinal3D.gif'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar} id='navbar'>
        <div className={styles.navleft}>
          <Link href="/web">WEB</Link>
        </div>
        
        <div className={styles.navmid}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src={Logo2}
                  alt="Studio Pluto Logo"
                  width="888px"
                  height="996px"
                  style={styles.image}
                  layout="responsive"
                />
              </Link>
            </div>
        </div>
        
        <div className={styles.navright}>
          <Link href="/shop">SHOP</Link>
        </div>
    </div>
  )
}
