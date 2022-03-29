import React from "react"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <div className={props.burgerMenu ? "burger" : ""}>
                <ul className={props.darkMode ? "dark" : ""}>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
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



