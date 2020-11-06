import React from "react"
import { ContactStyles } from '../styling'

const Contact = () => {
    return (
        <ContactStyles>
            <h2 className="contact-header">Contact</h2>
            <div className="contact-wrapper">
                <a className="contact-link" href="https://github.com/MMendes24">
                    <i class="fab fa-github-square"></i>
                </a>

                <a className="contact-link" href="https://twitter.com/MarsMendes2">
                    <i class="fab fa-twitter-square"></i>
                </a>

                <a className="contact-link" href="https://www.linkedin.com/in/marsdmendes/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
            <div className="attribution">Website icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </ContactStyles>
    )
}

export default Contact