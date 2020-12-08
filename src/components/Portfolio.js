import React from "react"
import { PortfolioStyles } from "../styling"
import cj from "../assets/cj.png"
import cjserver from "../assets/cjserver.png"
import conform from "../assets/contactform.png"

const Portfolio = () => {
    return (
        <PortfolioStyles>
            <h2 className="project-header">Projects</h2>
            <h3 className="notice">(Portfolio section currently under construction)</h3>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={cj} alt="campaign journal dashboard" />
                    <h2 className="project-subheader"><a href="https://campaignjournal.netlify.app/" className="project-link">Campaign Journal Client</a></h2>
                    <h3 className="project-subheader-2"><a href="https://github.com/campaignjournal/client" className="project-link">Github</a></h3>
                    <h3 className="project-subheader-2">Front-End Developer</h3>
                    <h3 className="project-subheader-2">November 2020</h3>
                    <p className="desc">App that turns creating your writing and gaming projects into something simple and fun</p>

                </div>
                <div className="project">
                    <img className="project-img" src={cjserver} alt="campaign journal server code" />
                    <h2 className="project-subheader"><a href="https://campaign-journal-api.herokuapp.com/" className="project-link">Campaign Journal Web Server</a></h2>
                    <h3 className="project-subheader-2"><a href="https://github.com/campaignjournal/server" className="project-link">Github</a></h3>
                    <h3 className="project-subheader-2">Back-End Developer</h3>
                    <h3 className="project-subheader-2">October 2020</h3>
                    <p className="desc">Node.js/Express web server that powers the most fantastical app on the web</p>
                </div>
            </div>
            <div className="project-wrapper">
                <div className="project">
                    <img className="project-img" src={conform} alt="contact form page" />
                    <h2 className="project-subheader"><a href="http://mkdecision-form.s3-website.us-east-2.amazonaws.com/" className="project-link">Mars Mendes Contact Form</a></h2>
                    <h3 className="project-subheader-2"><a href="https://github.com/MMendes24/MarsContactForm" className="project-link">Github</a></h3>
                    <h3 className="project-subheader-2">Front-End Developer</h3>
                    <h3 className="project-subheader-2">December 2020</h3>
                    <p className="desc">Serverless react contact form that allows anyone to get in touch with me effortlessly</p>

                </div>
            </div>
        </PortfolioStyles>
    )
}

export default Portfolio