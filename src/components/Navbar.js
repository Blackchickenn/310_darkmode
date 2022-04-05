import React from "react"
import LogoPicture from "../images/MMDesignLogo.png"
import LogoPictureDark from "../images/MMDesignLogoDark.png"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
                <a href="https://www.w3schools.com" className={props.burgerMenu ? "nav--logo" : "no--nav--logo"}><img src={LogoPicture}  alt="nav-logo"/></a>
                {/* <img src={LogoPicture} className={props.burgerMenu ? "nav--logo" : "no--nav--logo"} alt="nav-logo"/> */}
                <a href="https://www.w3schools.com" className={props.burgerMenu ? "nav--logo--dark" : "no--nav--logo--dark"}><img src={LogoPictureDark}  alt="nav-logo"/></a>
                {/* <img src={LogoPictureDark} className={props.burgerMenu ? "nav--logo--dark" : "no--nav--logo--dark"} alt="nav-logo"/> */}
                
            <div className={props.burgerMenu ? "burger" : "cross"}>
                <ul className={props.darkMode ? "dark" : "light"}>
                    <li className="nav--menu">First</li>
                    <li className="nav--menu">Second</li>
                    <li className="nav--menu">Third</li>
                    <li className="nav--menu">Forth</li>
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



