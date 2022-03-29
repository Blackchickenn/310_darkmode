import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

export default function App(){
    const [darkMode, setDarkMode] = React.useState (false)
    const [burgerMenu, setBurgerMenu] = React.useState (false)
    // const [cross, setCross] = React.useState (false)

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    function displayBurgerMenu(){
        // console.log("burger")
        setBurgerMenu(prevBurgerMenu => !prevBurgerMenu)
    }

    // function displayCross(){
    //     setCross(prevCross => !prevCross)
    // }

    return (
            <div>
                <Navbar 
                    darkMode={darkMode}
                    displayBurgerMenu={displayBurgerMenu}
                    burgerMenu={burgerMenu}
                    // cross={cross}
                    // displayCross={displayCross}
                />
                <Hero 
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
            </div>
        )
}