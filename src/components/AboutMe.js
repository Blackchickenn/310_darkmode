import React from "react"
import MMProfile from "../images/MMProfile.PNG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGitSquare, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function AboutMe(props){

    //about--me--section

    return (
        <section className={props.darkMode ? "dark" : ""}>
            <div className="about--me--section">
                {/* <p className="about--me--title">About Me</p> */}
                    <div className="about--me--section--info">
                        <div className="about--me--main">
                            <p className="about--me--title">About Me</p>    
                            <p className="about--me--description">Cupcake ipsum dolor sit amet macaroon jelly-o. Pie cupcake cupcake icing brownie tiramisu chocolate jelly. Halvah cotton candy cake cupcake jelly chupa chups pie toffee bear claw. Tootsie roll danish chupa chups powder croissant. 
                            <br></br>
                            <br></br>
                            Cupcake ipsum dolor sit amet candy canes. Cotton candy chocolate bar lemon drops pie lemon drops danish pudding. Gummi bears lollipop cake toffee lemon drops sesame snaps.
                            </p>
                        </div>
                        <img src={MMProfile} alt="profile-photo" className="about--me--photo"/>
                    </div>
                <div>
                    <h3 className="about--me--skills--title">Skills</h3>
                    <div className="icon--bar">
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faHtml5} className="fa-html5" color="#F06529"/>                  {/* HTML */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">80%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorHtml">
                                        <stop offset="20%" stop-color="#F06529" />
                                        <stop offset="100%" stop-color="#f38759" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--html" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorHtml)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faCss3Alt} className="fa-css3" color="#28A4D9"/>              {/* CSS */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">65%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorCss">
                                        <stop offset="20%" stop-color="#28A4D9" />
                                        <stop offset="100%" stop-color="#53b6e1" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--css" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorCss)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="icon--bar">
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faJsSquare} className="fa-js-square" color="#EFD81D"/>                  {/* Javascript */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">70%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorJs">
                                        <stop offset="20%" stop-color="#EFD81D" />
                                        <stop offset="100%" stop-color="#f2e04d" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--javascript" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorJs)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faReact} className="fa-react" color="#5ED4F4"/>                     {/* React */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">45%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorReact">
                                        <stop offset="20%" stop-color="#5ED4F4" />
                                        <stop offset="100%" stop-color="#8ee1f7" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--react" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorReact)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="icon--bar">
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faGitSquare} className="fa-git" color="#EC4D28"/>                     {/* GIT */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">60%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorGit">
                                        <stop offset="20%" stop-color="#EC4D28" />
                                        <stop offset="100%" stop-color="#f07457" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--git" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorGit)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                        <div className="icon--bar--duo">
                            <FontAwesomeIcon icon={faGithub} className="fa-github" color="#6e5494"/>                      {/* GitHub */}
                            <div className="skill">
                                <div className="outer">
                                    <div className="inner">
                                        <div className="number" id="number">75%</div>
                                    </div>
                                </div>
                                <svg className="skill--image" width="95" height="95">
                                    <defs>
                                        <linearGradient id="GradientColorGithub">
                                        <stop offset="20%" stop-color="#6e5494" />
                                        <stop offset="100%" stop-color="#886ead" />
                                        </linearGradient>
                                    </defs>
                                    <circle className="circle--github" r="40" cy="47.5" cx="47.5" fill="none" stroke="url(#GradientColorGithub)" strokeWidth="15px"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )

    
}