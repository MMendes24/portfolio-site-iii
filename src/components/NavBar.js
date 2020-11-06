import React, { useState, useEffect } from "react"
import { Link } from "react-scroll";
import { NavStyles, ColorSpan } from "../styling"

const NavBar = () => {
    return (
        <NavStyles>
            <h2 className="site-header"><ColorSpan>marsmendes</ColorSpan>.tech</h2>
            <div className="nav-wrapper">
                <Link
                    activeClass="active"
                    to="page-header"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link">
                    Home <i class="fas fa-home"></i></Link>
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
            </div>
        </NavStyles>
    )
}

export default NavBar