import React from "react"

export default function Hero(props){
    
    return  (
            <main className={props.darkMode ? "dark" : ""}>
                        <div className="hero--switch--mode">
                            <i className="fa-solid fa-sun"></i>
                                <div className="hero--switch-bar" onClick={props.toggleDarkMode}>
                                    <div className="hero--switch--btn" ></div>
                                </div>
                            <i className="fa-solid fa-moon"></i>
                        </div>
                    </main>
            )
}