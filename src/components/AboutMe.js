import React from "react"
import MMProfile from "../images/MMProfile.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGitSquare, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function AboutMe(){
    return (
        <section className="about--me--section">
                <p className="about--me--title">About Me</p>
                <p className="about--me--description">Cupcake ipsum dolor sit amet macaroon jelly-o. Pie cupcake cupcake icing brownie tiramisu chocolate jelly. Halvah cotton candy cake cupcake jelly chupa chups pie toffee bear claw. Tootsie roll danish chupa chups powder croissant. 
                <br></br>
                <br></br>
                Cupcake ipsum dolor sit amet candy canes. Cotton candy chocolate bar lemon drops pie lemon drops danish pudding. Gummi bears lollipop cake toffee lemon drops sesame snaps.
                </p>
                <img src={MMProfile} alt="profile-photo" className="about--me--photo"/>
                <div>
                    <h3 className="about--me--skills--title">Skills</h3>
                    <div className="about--me--skill--icons">
                        <FontAwesomeIcon icon={faHtml5} className="fa-html5" color="#F06529"/>
                        <FontAwesomeIcon icon={faCss3Alt} className="fa-css3" color="#28A4D9"/>
                        <FontAwesomeIcon icon={faJsSquare} className="fa-js-square" color="#EFD81D"/>
                        <FontAwesomeIcon icon={faReact} className="fa-react" color="#5ED4F4"/>
                        <FontAwesomeIcon icon={faGitSquare} className="fa-git" color="#EC4D28"/>
                        <FontAwesomeIcon icon={faGithub} className="fa-github" color="#6e5494"/>
                    </div>
                </div>
        </section>
    )
}