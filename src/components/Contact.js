import React from "react"
import { ContactStyles } from '../styling'

const Contact = () => {
    const email = "mdmbusiness2@gmail.com"
    const onMailClick = email => navigator.clipboard.writeText(email).then(() => {
      console.log('Email address successfully copied!');
    }, () => {
      console.error('Could not copy email address')
    })

    return (
        <ContactStyles>
            <h2 className="contact-header">Contact</h2>
            <div className="contact-wrapper">
                <a className="contact-link" href="https://github.com/MMendes24">
                    <i className="fab fa-github-square"></i>
                </a>

                <a className="contact-link" href="https://twitter.com/MarsMendes2">
                    <i className="fab fa-twitter-square"></i>
                </a>

                <a className="contact-link" href="https://www.linkedin.com/in/marsdmendes/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <i className="fas fa-envelope-square tooltip" onClick={() => onMailClick(email)}><span className="tooltip-text">Click to copy my email address!</span></i>
            </div>
            <div className="attribution">Website icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </ContactStyles>
    )
}


export default Contact