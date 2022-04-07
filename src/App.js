import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function App(){
    const [darkMode, setDarkMode] = React.useState (false)
    const [burgerMenu, setBurgerMenu] = React.useState (true)
    

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    function displayBurgerMenu(){
        setBurgerMenu(prevBurgerMenu => !prevBurgerMenu)
    }

    // const typeWriter = document.getElementById('typewriter-text');
    // const text = 'Ivanka Madajova';
    
    // typeWriter.innerHTML = text;
    // typeWriter.style.setProperty('--characters', text.length);

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
                <AboutMe 
                    darkMode={darkMode}
                />
                <Projects
                    darkMode={darkMode}
                />
                <Contact
                    darkMode={darkMode}
                />
                <Footer
                    darkMode={darkMode}
                />
            </div>
        )
}