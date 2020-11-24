import React from "react"
import { PortfolioStyles } from "../styling"
import cj from "../assets/cj.png"
import cjserver from "../assets/cjserver.png"

const Portfolio = () => {
    return (
        <PortfolioStyles>
            <h2 className="project-header">Projects</h2>
            <h3 className="notice">(Portfolio section currently under construction.)</h3>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={cj} alt="campaign journal dashboard" />
                    <h2 className="project-subheader">Campaign Journal Client</h2>
                    <h3><a href="https://github.com/MMendes24/campaign-journal-client" className="project-link">Github Repo</a></h3>
                    <h3>Front-End Developer</h3>
                    <h3>November 2020</h3>
                    <p className="desc">App that turns creating your writing and gaming projects into something simple and fun</p>

                </div>
                <div className="project">
                    <img className="project-img" src={cjserver} alt="campaign journal server code" />
                    <h2 className="project-subheader">Campaign Journal Web Server</h2>
                    <h3><a href="https://github.com/MMendes24/campaign-journal-sever" className="project-link">Github Repo</a></h3>
                    <h3>Back-End Developer</h3>
                    <h3>October 2020</h3>
                    <p className="desc">Node.js/Express web server that powers the most fantastical app on the web</p>
                </div>
            </div>
            <div className="project-wrapper">
            </div>
        </PortfolioStyles>
    )
}

export default Portfolio