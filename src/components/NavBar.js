import React from "react"
import { Link } from 'react-router-dom'
import { NavStyles, ColorSpan } from "../styling"

const NavBar = () => {
    return (
            <NavStyles>
                <h2 className="page-header"><ColorSpan>Mars </ColorSpan>Mendes</h2>
                <Link className="nav-link">About</Link>
                <Link className="nav-link">Portfolio</Link>
                <Link className="nav-link">Contact</Link>
                <a className="social-link" href="https://github.com/MMendes24">
                    <i class="fab fa-github-square"></i>
                </a>

                <a className="social-link" href="https://twitter.com/MarsMendes2">
                    <i class="fab fa-twitter-square"></i>
                </a>

                <a className="social-link" href="https://www.linkedin.com/in/marsdmendes/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </NavStyles>
    )
}

export default NavBar