import React from "react"
import { ContactStyles } from '../styling'

const Contact = () => {
    return (
        <ContactStyles>
            <a className="contact-link" href="https://github.com/MMendes24">
                <i class="fab fa-github-square"></i>
            </a>

            <a className="contact-link" href="https://twitter.com/MarsMendes2">
                <i class="fab fa-twitter-square"></i>
            </a>

            <a className="contact-link" href="https://www.linkedin.com/in/marsdmendes/">
                <i class="fab fa-linkedin"></i>
            </a>
        </ContactStyles>
    )
}

export default Contact