import React from "react"
import LogoPicture from "../images/MMDesignLogo.png"
import LogoPictureDark from "../images/MMDesignLogoDark.png"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
                <a href="https://www.w3schools.com" className={props.burgerMenu ? "nav--logo" : "no--nav--logo"} id="logo"><img src={LogoPicture}  alt="nav-logo"/></a>
                {/* <img src={LogoPicture} className={props.burgerMenu ? "nav--logo" : "no--nav--logo"} alt="nav-logo"/> */}
                <a href="https://www.w3schools.com" className={props.burgerMenu ? "nav--logo--dark" : "no--nav--logo--dark"} id="logo-dark"><img src={LogoPictureDark}  alt="nav-logo"/></a>
                {/* <img src={LogoPictureDark} className={props.burgerMenu ? "nav--logo--dark" : "no--nav--logo--dark"} alt="nav-logo"/> */}
                
            <div className={props.burgerMenu ? "burger" : "cross"}>
                <ul className={props.darkMode ? "dark" : "light"}>
                    <a href=".html#aboutme"><li className="nav--menu">About Me</li></a>
                    <a href=".html#skills"><li className="nav--menu">Skills</li></a>
                    <a href=".html#projects"><li className="nav--menu">Projects</li></a>
                    <a href=".html#contact"><li className="nav--menu">Contact</li></a>
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



