import React from "react"
import LogoPicture from "../images/MMDesignLogo.png"
import LogoPictureDark from "../images/MMDesignLogoDark.png"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
                <a href="https://marcelmadaj.online" className={props.burgerMenu ? "nav--logo" : "no--nav--logo"} id="logo"><img src={LogoPicture}  alt="nav-logo"/></a>
                <a href="https://marcelmadaj.online" className={props.burgerMenu ? "nav--logo--dark" : "no--nav--logo--dark"} id="logo-dark"><img src={LogoPictureDark}  alt="nav-logo"/></a>
                
            <div className={props.burgerMenu ? "burger" : "cross"}>
                <ul className={props.darkMode ? "dark" : "light"}>
                    <a href="#aboutme"><li className="nav--menu">About Me</li></a>
                    <a href="#skills"><li className="nav--menu">Skills</li></a>
                    <a href="#projects"><li className="nav--menu">Projects</li></a>
                    <a href="#contact"><li className="nav--menu">Contact</li></a>
                </ul>
            </div>
                <div className="burger--cross">
                    <div className={props.burgerMenu ? "" : "nohamburger"}>
                        <i className="fa-solid fa-bars " onClick={props.displayBurgerMenu}></i> 
                    </div>
                    <div className={props.burgerMenu ? "" : "cross"}>
                        <i className="fa-solid fa-xmark" onClick={props.displayBurgerMenu}></i>
                    </div>
                </div>
        </nav>
    )
}



