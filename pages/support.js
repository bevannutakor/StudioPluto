import React, {useState, useCallback} from 'react';
import Head from 'next/head';
import Navbar from './comps/navbar'

import styles from '../styles/Support.module.css';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios';


export default function Support() {
    const [status, setStatus] = useState("");
    const [service, setService] = useState("-");
    const { executeRecaptcha } = useGoogleReCaptcha();
    
    const handleRecaptcha = useCallback(
        (e) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                setStatus("Something went wrong with the recaptcha: ", executeRecaptcha);
                return;
            }
            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                console.log(gReCaptchaToken, "response Google reCaptcha server");
                submitSupportRequest(e, gReCaptchaToken);
            });
        },
        [executeRecaptcha]
    )

    const submitSupportRequest = async (e, gReCaptchaToken) => {
        const {name, email, shop, description} = e.target.elements
        await axios.post('api/support', {
            headers: {
                'Content-type': 'application/json'
            },

            name: name.value,
            email: email.value,
            service: service,
            shop: shop.value,
            description: description.value,
            gRecaptchaToken: gReCaptchaToken
        }).then((res) => {
            if (res.status === 200){
                setStatus("The form has submitted successfully");
            } else {
                setStatus("Something went wrong with your submission, please try again")
            }
            console.log(status);
        })
    };
    return(
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
            <Navbar/>
            
            <div className={styles.info_container}>
                <div className={styles.support_info1}>
                    <h2>What we offer</h2>
                    <ul class={styles.support_list}>
                        <li>Answering Questions about the Studio Pluto Theme</li>
                        <li>Help with installing the theme and familiarization with theme settings</li>
                        <li>Fixing bugs that are present in unmodified theme installs</li>
                        <li>Support for theme updates</li>
                    </ul>
                </div>

                <div className={styles.support_info2}>
                    <h2>What we do not offer</h2>
                    <ul class={styles.support_list}>
                        <li>Changes to design, style or functionality of a theme</li>
                        <li>Integration of theme with third party apps and third party code</li>
                        <li>Troubleshooting previous customizations of theme code by third party</li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <form onSubmit={handleRecaptcha} className={styles.support_form}>
                <h2>Support Request</h2>
                <br></br>
                <div className={styles.support_input_group}>
                    <input className={styles.input} placeholder="Name" name="name"/>
                    <input className={styles.input} placeholder="Email *" name="email"/>
                </div>
                <input className={styles.input} placeholder="Shop URL *" name="shop"/>

                <p>Service Needed</p>
                <br></br>
                <select value={service} onChange={(e) => setService(e.target.value)} className={styles.input}>
                    <option value="-">-</option>
                    <option value="Theme Support">Theme support</option>
                    <option value="Theme Installation">Theme Installation support</option>
                    <option value="Bug report">Report a bug</option>
                    <option value="Other">Other</option>
                </select>

                <textarea rows="10" className={styles.input} placeholder="Detailed Description *" name="description"/>

                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </>
    )
}