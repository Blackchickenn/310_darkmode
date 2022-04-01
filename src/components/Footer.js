import React from "react"

export default function Footer(){
    return (
        <footer className="footer--section">
            <div className="footer--nav--menu">
                <ul className="footer--nav--components">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">First</a>
                    </li>
                    <li>
                        <a href="">Second</a>
                    </li>
                    <li>
                        <a href="">Third</a>
                    </li>
                    <li>
                        <a href="">Fourth</a>
                    </li>
                </ul>
            </div>
            <div className="footer--contact--info">
                <ul className="footer--contact--components">
                    <li>
                        <a href="">First Last Name</a>
                    </li>
                    <li>
                        <a href="">Mobile number</a>
                    </li>
                    <li>
                        <a href="">Email</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}