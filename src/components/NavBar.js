import React from "react"
import { Link } from 'react-router-dom'
import AppStyles from "../styling/AppStyles"

const NavBar = () => {
    return(
        <nav>
            <Link>Test</Link>
            <Link>Test</Link>
            <a className="social-link" href="https://github.com/MMendes24">
                <i class="fab fa-github-square"></i>
            </a>

            <a className="social-link" href="https://twitter.com/MarsMendes2">
                <i class="fab fa-twitter-square" ></i>
            </a>

            <a className="social-link" href="https://www.linkedin.com/in/marsdmendes/">
                <i class="fab fa-linkedin"></i>
            </a>
        </nav>
    )
}

export default NavBar