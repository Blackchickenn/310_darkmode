import React from "react"

export default function Contact (){
    return (
        <section>
            <form className="contact--form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea type="text" name="message" placeholder="Message" required > </textarea>
                <input type="submit" value="SEND" className="contact--form--btn"/>
            </form>
        </section>
    )
}