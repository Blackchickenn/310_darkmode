import React from "react"
import ProjectImage1 from "../images/project1.jpg"
import ProjectImage2 from "../images/project2.jpg"
import ProjectImage3 from "../images/project3.jpg"
import ProjectImage4 from "../images/project4.jpg"

export default function Projects(){
    return (
        <section className="project--section">
            <h2 className="project--title">Projects</h2>
            <div className="project--section--cards">
            <div className="project--card">
                <img src={ProjectImage1}/>
                <h3 className="project--name">Project 1</h3>
                <p>Bonbon icing bear claw icing topping. Candy cake apple pie jelly-o macaroon gummies danish caramels</p>
                <a href="https://github.com/Blackchickenn" target="_blank" ><p className="project--link--btn">View Here</p></a>
            </div>
            <div className="project--card">
                <img src={ProjectImage2}/>
                <h3 className="project--name">Project 2</h3>
                <p>Bonbon icing bear claw icing topping. Candy cake apple pie jelly-o macaroon gummies danish caramels</p>
                <a href="https://github.com/Blackchickenn" target="_blank"><p className="project--link--btn">View Here</p></a>
            </div>
            <div className="project--card">
                <img src={ProjectImage3}/>
                <h3 className="project--name">Project 3</h3>
                <p>Bonbon icing bear claw icing topping. Candy cake apple pie jelly-o macaroon gummies danish caramels</p>
                <a href="https://github.com/Blackchickenn" target="_blank"><p className="project--link--btn">View Here</p></a>
            </div>
            <div className="project--card">
                <img src={ProjectImage4}/>
                <h3 className="project--name">Project 4</h3>
                <p>Bonbon icing bear claw icing topping. Candy cake apple pie jelly-o macaroon gummies danish caramels</p>
                <a href="https://github.com/Blackchickenn" target="_blank"><p className="project--link--btn">View Here</p></a>
            </div>
            </div>
            
        </section>
    )
}