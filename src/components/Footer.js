import React from "react"

export default function Footer(props){
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <div className="footer--section">
                <div className="footer--nav--menu">
                    <ul className="footer--nav--components">
                        <li>
                            <a href="https://marcelmadaj.online">Home</a>
                        </li>
                        <li>
                            <a href="#aboutme">About Me</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="footer--contact--info">
                    <ul className="footer--contact--components">
                        <li>
                            <a href="">Marcel Madaj</a>
                        </li>
                        <li>
                            <a href="">+421 908 xxx zzz</a>
                        </li>
                        <li>
                            <a href="">MMDesign@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}