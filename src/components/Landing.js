import React from "react"
import { LandingStyles, ColorSpan } from '../styling'

const Landing = () => {
    return (
        <LandingStyles>
            <h1 id="page-header"><ColorSpan>Mars </ColorSpan>Mendes</h1>
            <p className="landing-p">Full Stack <ColorSpan>Web Developer</ColorSpan></p>
        </LandingStyles>
    )
}

export default Landing