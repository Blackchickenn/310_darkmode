import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare , faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import Typewriter from "typewriter-effect"


export default function Hero(props){
    
    return  (
            <main className={props.darkMode ? "dark" : ""}>
                        <div className="hero--switch--mode">
                            <i className="fa-solid fa-sun"></i>
                                <div className="hero--switch--bar" onClick={props.toggleDarkMode}>                       
                                    <div className="hero--switch--btn" ></div>
                                </div>
                            <i className="fa-solid fa-moon"></i>
                        </div>
                        <div className="hero--personal">
                            <div className="hero--personal--info">
                                <p className="hero--personal--name">I`m 
                                        <Typewriter className="hero--personal--name--style"
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString("Marcel Madaj")
                                                .pauseFor(2000)
                                                .deleteAll()
                                                .pauseFor(2000)
                                                .typeString("Marcel Madaj")
                                                .start()
                                            }}
                                        />
                                   
                                </p>
                                <p className="hero--personal--description">Ex-Mechanical Engineer || FrontEnd WebDeveloper </p>
                                <a href=".html#contact"><button className="hero--personal--btn">Contact Me</button></a>   
                            </div>
                            <div className="hero--personal--contact">
                                    <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                                    <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
                                </div>
                            </div>
                    </main>
            )
            
}
