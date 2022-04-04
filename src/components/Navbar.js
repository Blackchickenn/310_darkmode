import React from "react"
import LogoPicture from "../images/MMDesignLogo.png"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
                <a href="https://www.w3schools.com"><img src={LogoPicture} className={props.burgerMenu ? "nav--logo" : "no--nav--logo"} alt="nav-logo"/></a>
                
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



