import React from "react"
import { ContactStyles, ColorSpan } from '../styling'

const Contact = () => {
    return (
        <ContactStyles>
            <h2 className="contact-header"><ColorSpan>Contact</ColorSpan></h2>
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
        </ContactStyles>
    )
}

export default Contact