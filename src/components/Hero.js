import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare , faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons"


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
                                <p className="hero--personal--name">I`m <span className="hero--personal--name--style`">Marcel Madaj</span></p>
                                <p className="hero--personal--description">Ex-Mechanical Engineer || FrontEnd WebDeveloper </p>
                                <button className="hero--personal--btn">About Me</button>   
                            </div>
                            <div className="hero--personal--contact">
                                    <a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a>
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href=""><FontAwesomeIcon icon={faGithubSquare} /></a>
                                </div>
                           
                            </div>
                    </main>
            )
}


// hero--switch-bar