import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll";
import { NavStyles, ColorSpan } from "../styling"

const NavBar = () => {
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)
    
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <NavStyles className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
                <div className="nav-wrapper">
                <h2 className="site-header"><ColorSpan>marsmendes</ColorSpan>.tech</h2>
                    <Link
                        activeClass="active"
                        to="sticky-wrapper"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link">
                        Home <i className="fas fa-home"></i></Link>
                    <Link
                        activeClass="active"
                        to="about-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link">
                        About <i className="fas fa-user"></i></Link>

                    <Link activeClass="active"
                        to="project-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link">
                        Portfolio <i className="fas fa-folder"></i></Link>


                    <Link activeClass="active"
                        to="contact-header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link">
                        Contact <i className="fas fa-coffee"></i></Link>
                </div>
        </NavStyles>
    )
}

export default NavBar