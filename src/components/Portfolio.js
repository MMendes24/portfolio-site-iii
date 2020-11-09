import React from "react"
import { PortfolioStyles } from "../styling"
import wunderlist from "../assets/WunderlistScreenie.png"
import expatjournal from "../assets/exj.jpg"

const Portfolio = () => {
    return (
        <PortfolioStyles>
            <h2 className="project-header">Projects</h2>
            <h3>Portfolio section currently under construction.</h3>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={wunderlist} alt="homepage of wunderlist" />
                    <h2 className="project-subheader">Wunderlist</h2>
                    <h3><a href="https://github.com/MMendes24/wunderlistAPI" className="project-link">Github Repo</a></h3>
                    <h3>Back-End Developer</h3>
                    <h3>September 2020</h3>
                    <p className="desc">To-do list app designed to give users a way to manage hectic modern lifestyles</p>

                </div>
                <div className="project">
                    <img className="project-img" src={expatjournal} alt="travel items" />
                    <h2 className="project-subheader">Expatjournal</h2>
                    <h3><a href="https://github.com/MMendes24/expatjournal" className="project-link">Github Repo</a></h3>
                    <h3>Front-End Developer</h3>
                    <h3>August 2020</h3>
                    <p className="desc">Online blogging platform to allow American expatriates to share their experiences abroad</p>
                </div>
            </div>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={wunderlist} alt="homepage of wunderlist" />
                    <h2 className="project-subheader">Wunderlist</h2>
                    <h3><a href="https://github.com/MMendes24/wunderlistAPI" className="project-link">Github Repo</a></h3>
                    <h3>Back-End Developer</h3>
                    <h3>September 2020</h3>
                    <p className="desc">To-do list app designed to give users a way to manage hectic modern lifestyles</p>
                </div>
                <div className="project">
                    <img className="project-img" src={expatjournal} alt="travel items" />
                    <h2 className="project-subheader">Expatjournal</h2>
                    <h3><a href="https://github.com/MMendes24/expatjournal" className="project-link">Github Repo</a></h3>
                    <h3>Front-End Developer</h3>
                    <h3>August 2020</h3>
                    <p className="desc">Online blogging platform to allow American expatriates to share their experiences abroad</p>
                </div>
            </div>
        </PortfolioStyles>
    )
}

export default Portfolio