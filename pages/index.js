import React, {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './comps/navbar'
import { Canvas } from '@react-three/fiber'
import Contact from './comps/contact';

import { useFrame } from '@react-three/fiber';
import { useRef } from "react";



function Sphere(){
    const sphereRef = useRef();

    useFrame(() => {
        sphereRef.current.rotation.x += 0.005;
        sphereRef.current.rotation.y += 0.01;
    })

    return(
        <mesh ref={sphereRef} visible castShadow>
            <sphereGeometry args={[2.5]} />
            <meshStandardMaterial
                color="blue"
                wireframe
            />
        </mesh>
    )
}

export default function Home() {

  const [contactModal, setContactModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setContactModal(true);
  }
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Studio Pluto</title>
        <meta name="description" content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." />
        <meta content="Studio Pluto is a Vancouver based creative agency that specializes in web, app and graphic design. We remain ready to help clients from anywhere around the world bring their software dreams to life." property="twitter:description" />
        <meta content="summary_large_image" name="twitter:card"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Canvas className={styles.planet}>
            <Sphere />
            <ambientLight/>
            <pointLight position={[5,5,5]} intensity={3}/>
            <pointLight position={[-3,-3,2]} />
        </Canvas>
      </main>

      <div className={styles.home_about_container}>
          <h1 className={styles.welcome_header}>WELCOME TO PLUTO</h1>
          
          <div className={styles.home_about_info}>
              <p>We are a creative agency that loves creating pixel-perfect, minimal designs that are impactful and have purpose. Allow us to help you build a strong online presence while you continue to focus on the important day-to-day aspects of your business.</p>

              <p>From immersive websites to stunning apps, or wonderful crafted visual graphics in the form of promotional videos or a logo, we are equipped with a vast set of skills and we seek to help you bring any and all of your dreams to life!</p>

              <p>We have also ventured into new technologies such as Web3 and creating our own products such as comprehensive, customizable Shopify theme, several cross platform applications, a thrilling new writing platform, and much more. </p>
          </div>
      </div>

      {/*<div className={styles.three_dim_container}>
        <div className={styles.spline_laptop_object}>
          <Spline scene="https://prod.spline.design/O95XKWtz-CWH8xwp/scene.splinecode"/>
        </div>
        <div className={styles.info_cards}>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className={styles.three_dim_container}>
        <div className={styles.info_cards}>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={styles.spline_laptop_object}>
        <Spline scene="https://prod.spline.design/wgSvNeo3t2bWbNhp/scene.splinecode" />
        </div>
  </div>*/}

      <div className={styles.home_cards_container}>
        <div className={styles.home_cards}>
            <h3>Client Web Development</h3>
            <br></br>
            <p>Our goal is to help you establish an online presence that accurately reflects your brand and serves your specific goals.
            We handle all aspects of the web development process, from the initial design concept to the final product.  We use the latest web development technologies to ensure that your website is fast, secure, and optimized for search engines.</p>
        </div>
        <div className={styles.home_cards}>
            <h3>3D design and animation</h3>
            <br></br>
            <p> Whether it be for a web project or any other project, our goal is to bring our clients' visions to life in a stunning and engaging way. We believe that by incorporating 3D designs and animations into our work, we can help our clients stand out and make a lasting impression on their target audience</p>
        </div>
        <div className={styles.home_cards}>
            <h3>Digital Products</h3>
            <br></br>
            <p>We specialize in creating high-quality digital products that help our customers enhance their business and personal endeavors. Our goal is to continuously provide innovative and effective solutions that meet their specific needs and exceed their expectations. Through our expertise and commitment to excellence, we aim to establish long-lasting relationships with our customers.</p>
        </div>
        {/*<div className={styles.home_cards}>
            <h3>Lorem Ipsum</h3>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>*/}
  </div>

      <div className={styles.intro_theme_container}>
        <h3 className={styles.intro_header}>Pluto Theme </h3>
        <br></br>
        <p className={styles.intro_theme_text}>Our newest digital product is a modern and functional Shopify theme designed to meet the practical needs of online businesses and catch the attention of your customers.</p>
        
        <a className={styles.intro_theme_button} href="/shop">Learn More</a>
      </div>

      <div class={styles.contact_container}>
          
          <button onClick={openModal} className={styles.contact_button}>Lets Work Together</button>
      </div>

        {contactModal && <Contact isOpen={contactModal} setIsOpen={setContactModal}/>}
    </>
  )
}
