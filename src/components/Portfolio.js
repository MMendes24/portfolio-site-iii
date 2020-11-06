import React from "react"
import { PortfolioStyles, ColorSpan } from "../styling"
import wunderlist from "../assets/WunderlistScreenie.png"
import expatjournal from "../assets/exj.jpg"

const Portfolio = () => {
    return (
        <PortfolioStyles>
            <h2 className="project-header"><ColorSpan>Projects</ColorSpan></h2>
            <img className="project-img" src={wunderlist} alt="homepage of wunderlist"></img>
            <div className="project">
                <h2 className="project-subheader">Wunderlist | <a href="https://github.com/MMendes24/wunderlistAPI" className="project-link">Github Repo</a> | Back-End Developer | September 2020</h2>
                <p className="desc">To-do list app designed to give users a way to manage hectic modern lifestyles</p>
                <p className="stack">Stack: HTML | <ColorSpan>React</ColorSpan> | <ColorSpan>Node</ColorSpan> | Express | Knex | Jest | Supertest | CSS</p>

            </div>
            <img className="project-img" src={expatjournal} alt="travel items"></img>
            <div className="project">
                <h2 className="project-subheader">Expatjournal | <a href="https://github.com/MMendes24/expatjournal" className="project-link">Github Repo</a> | Front-End Developer | August 2020</h2>
                <p className="desc">Online blogging platform to allow American expatriates to share their experiences abroad</p>
                <p className="stack">Stack: HTML | CSS | <ColorSpan>React</ColorSpan> | <ColorSpan>Redux</ColorSpan> | |React-Redux | Redux-Thunk | Node | Express | Jest | Supertest</p>
            </div>
        </PortfolioStyles>
    )
}

export default Portfolio