import React, {useState, useCallback} from 'react';
import axios from 'axios';
import styles from '../../styles/Contact.module.css'
import Modal from 'react-modal';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact(props){
    const {isOpen, setIsOpen } = props;
    const [status, setStatus] = useState("")
    const { executeRecaptcha } = useGoogleReCaptcha();

    const modalCustomStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        content: {
            background: 'transparent',
            border: 'none',
            inset: '0',
        }
     }

     const submitContact = async (e, gReCaptchaToken) => {
        let {name, email, subject, message} = e.target.elements;
        const headers ={'Content-Type': 'application/json'}

        //validate form
        /*let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if(!regex.test(email)){
            setStatus("You email is invalid");
            return;
        }*/
        if(message.value === ""){
            setStatus("The message field is required")
            return;
        }
        await axios.post('api/contact', {
            headers,
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            gRecaptchaToken: gReCaptchaToken,
        })
        .then((res) => {
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
            
            if (res.status === 200){
                setStatus("The form has been submitted successfully")
            } else {
                setStatus("Something went wrong with your submission, please try again")
            }
            console.log(res.json())
        })
     }

     const handleRecaptcha = useCallback(
        (e) => {
            e.preventDefault();
            if (!executeRecaptcha) {
               setStatus("Something went wrong with the recaptcha: ", executeRecaptcha);
               return;
             }
             executeRecaptcha("enquiryFormSubmit").then(async (gReCaptchaToken) => {
               //console.log(gReCaptchaToken, "response Google reCaptcha server");
               await submitContact(e, gReCaptchaToken);
             });
        },
        [executeRecaptcha]
    )
    return(
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}  style={modalCustomStyles}>
            <form onSubmit={handleRecaptcha} className={styles.contact_form}>
                <span onClick={() => setIsOpen(false)} className={styles.exit}>&times;</span>
                <h3 className={styles.contact_heading}>Get In Touch</h3>
                <div className={styles.name_email_row}>
                    <input className={styles.input} placeholder="Name" name="name"/>
                    <input className={styles.input} placeholder="Email*" name="email" type="email"/>
                </div>
                
                <input className={styles.input} placeholder="Subject" name="subject"/>
                
                <textarea rows="10" className={styles.input} placeholder="Message*" name="message"/>

                <button type="submit" className={styles.submit}>Submit</button>
                <br></br>
                {status !== "" ? (<p className={styles.status}>{status}</p>) : ""}
            </form>
        </Modal>
    )
}