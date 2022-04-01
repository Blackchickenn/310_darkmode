import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact (){


    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
            .sendForm(
                'service_xov4izm',
                'template_4xe1f3c',
                refForm.current,
                'mPCXzbgrlFeO2T2ZS'
            )
            .then(
                () => {
                    alert('Správa úspešne odoslaná!')
                    window.location.reload(false)
                }, 
                () => {
                    alert('Nepodarilo sa odoslať správu, skúste to znovu!')
                }    
            )
    }
    
    return (
        <section className="contact--section">
            <form ref={refForm} onSubmit={sendEmail} className="contact--form">
                <div className="input--form--name--email">
                    <input type="text" name="name" placeholder="Name" required className="contact--form--name"/>
                    <input type="email" name="email" placeholder="Email" required className="contact--form--email"/>
                </div>
                <input type="text" name="subject" placeholder="Subject" required className="contact--form--subject"/>
                <textarea  name="message" placeholder="Message" required className="contact--form--message" />
                <input type="submit" value="SEND" className="contact--form--btn"/>
            </form>
        </section>
    )
}