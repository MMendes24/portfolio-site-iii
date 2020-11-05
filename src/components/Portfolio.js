import React from "react"
import { PortfolioStyles } from '../styling'

const Portfolio = () => {
    return (
        <PortfolioStyles>
            <h2 className="project-header">Projects</h2>
                <div className="project">
                    <h2 className="project-subheader">Wunderlist | <a href="https://github.com/MMendes24/wunderlistAPI">Github Repo</a> | Back-End Developer | September 2020</h2>
                    <p className="desc">To-do list app designed to give users a way to manage hectic modern lifestyles</p>
                    <p className="stack">HTML | React | Node | Express | Knex | Jest | Supertest | CSS</p>
                    <p className="bullet">• Functioned as a Back-End Developer on a remote team of 8 to deliver a secure API in 4 days</p>
                    <p className="bullet">• Wrote dozens of unit and integrated tests to ensure API stability and operation</p>
                    <p className="bullet">• Created all necessary endpoints and routers for CRUD operations in addition to seed data</p>

                </div>

                <div className="project">
                    <h2 className="project-subheader">Expatjournal | <a href="https://github.com/MMendes24/expatjournal">Github Repo</a> | Senior Front-End Developer | August 2020</h2>
                    <p className="desc">Online blogging platform to allow American expatriates to share their experiences abroad</p>
                    <p className="stack">HTML | CSS | React | Redux | |React-Redux | Redux-Thunk | Node | Express | Jest | Supertest</p>
                    <p className="bullet">• Worked on a remote team of 7 to code and deploy a blogging platform in 4 days</p>
                    <p className="bullet">• Implemented Redux as a state management system capable of scaling with the app throughout its life</p>
                    <p className="bullet">• Coded 6 modular, reusable, components that allowed users to perform all requisite CRUD operations</p>
                    <p className="bullet">• Handled authorization through JWT to ensure all necessary data was protected from the public</p>
                </div>
        </PortfolioStyles>  
    )
}

export default Portfolio