import React from 'react';
import axios from 'axios';
import styles from '../../styles/Contact.module.css'
import Modal from 'react-modal';
export default function Contact(props){
    const {isOpen, setIsOpen } = props;

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

     const submitContact = async (e) => {
        e.preventDefault();
        let {name, email, subject, message} = e.target.elements;
        await axios.post('api/contact', {
            headers: {
                'Content-Type': 'application/json'
            },
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        })
        .then((res) => {
            if (res.status === 200){
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
            }
            console.log(res.data)
        })
     }
    return(
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}  style={modalCustomStyles}>
            <form onSubmit={submitContact} className={styles.contact_form}>
                <span onClick={() => setIsOpen(false)} className={styles.exit}>&times;</span>
                <h3 className={styles.contact_heading}>Get In Touch</h3>
                    <div className={styles.name_email_row}>
                        <input className={styles.input} placeholder="Name" name="name"/>
                        <input className={styles.input} placeholder="Email*" name="email"/>
                    </div>
                
                <input className={styles.input} placeholder="Subject" name="subject"/>
                
                <textarea rows="10" className={styles.input} placeholder="Message*" name="message"/>

                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </Modal>
    )
}