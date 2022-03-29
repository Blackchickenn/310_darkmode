import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"

export default function App(){
    const [darkMode, setDarkMode] = React.useState (false)
    const [burgerMenu, setBurgerMenu] = React.useState (false)
    

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    function displayBurgerMenu(){
        setBurgerMenu(prevBurgerMenu => !prevBurgerMenu)
    }

  

    return (
            <div>
                <Navbar 
                    darkMode={darkMode}
                    displayBurgerMenu={displayBurgerMenu}
                    burgerMenu={burgerMenu}
                />
                <Hero 
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
                <AboutMe />
            </div>
        )
}