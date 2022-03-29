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
                    <i className="fa-solid fa-bars " onClick={props.displayBurgerMenu}></i> 
                    <i className="fa-solid fa-xmark"></i>
                </div>
        </nav>
    )
}


// export default function Navbar(props){
//     return(
//         <nav className={props.darkMode ? "dark" : ""}>
//                 <ul className={props.darkMode ? "dark" : ""}>
//                     <li>First</li>
//                     <li>Second</li>
//                     <li>Third</li>
//                 </ul>
//                 <div className={props.burgerMenu ? "burger" : "noburger"}>
//                     <i className="fa-solid fa-bars " onClick={props.displayBurgerMenu}></i> 
//                 </div>
//         </nav>
//     )
// }