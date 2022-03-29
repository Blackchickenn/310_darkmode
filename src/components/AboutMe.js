import React from "react"
import MMProfile from "../images/MMProfile.PNG"

export default function AboutMe(){
    return (
        <section className="about--me--section">
                <p className="about--me--title">About Me</p>
                <p className="about--me--description">I am Ex-Mechanical Engineer with high passion for FrontEnd develop</p>
                <img src={MMProfile} alt="profile-photo" className="about--me--photo"/>
                <div>
                    <h3 className="about--me--skills--title">Skills</h3>
                    <div className="about--me--skill--icons">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-js-square"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-git"></i>
                    <i class="fa-brands fa-github"></i>
                    </div>
                </div>
        </section>
    )
}