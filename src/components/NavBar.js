import React from "react"
import { Link } from "react-scroll";
import { NavStyles } from "../styling"

const NavBar = () => {
    return (
        <NavStyles>
            <Link
                activeClass="active"
                to="about-header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link">
                About <i class="fas fa-user"></i></Link>

            <Link activeClass="active"
                to="project-header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link">
                Portfolio <i class="fas fa-folder"></i></Link>


            <Link activeClass="active"
                to="contact-header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link">
                Contact <i class="fas fa-coffee"></i></Link>

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