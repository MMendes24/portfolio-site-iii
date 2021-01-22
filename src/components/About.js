import React from "react"
import { AboutStyles, ColorSpan } from '../styling'
import profile from '../assets/profile.jpg'

const About = () => {
    return (
        <AboutStyles>
            <h2 className="about-header">Oh,<ColorSpan> me?</ColorSpan></h2>
            <img className="profile" src={profile} alt="mars mendes" />
            <p className="about-p">I'm a <ColorSpan>full stack web developer</ColorSpan> who loves working with <ColorSpan>React</ColorSpan> and excels in server side development, but I'm open to falling in love with other frameworks. I'm a huge believer in programmatic solutions and that <ColorSpan>hard-coded anything is the last resort.</ColorSpan> I like my components modular, reusable, and functional. I prefer my web servers RESTful, but I'll never turn down experimenting with a new methodology.
</p>

            {/* <p className="about-p">Here you'll find my projects, my resume, and a mountain of evidence implicating me in your local coffee shortage. The app you're currently visiting is a single-page React app, built to be semantic, functional, and easy on the eyes.</p> */}

            <p className="about-p">Originally, I'm from <ColorSpan>New Orleans</ColorSpan>, and I'm now back on the Gulf Coast. I make music. I love indie and bright colors. I <ColorSpan>code in kawaii theme.</ColorSpan>  I like history, camping, fashion, art, and RPGs. I prefer PF2 to D&D 5e. I take my coffee black.  </p>

            <p className="about-p">I am happily married and love my wife and our two cats very much. It would be impossible to devote so much to what I do without them. Together we've gone to Virginia, California, New York, North Carolina, Louisiana, Mississippi, Pennsylvania, and more, sometimes to visit and sometimes to live. I am currently <ColorSpan>looking for remote work</ColorSpan>, and I can <ColorSpan>relocate anywhere as needed.</ColorSpan></p>

            <p id="ps"><i className="fas fa-rocket"></i> (p.s. the color is "<ColorSpan>Martian Red</ColorSpan>" if you were wondering.) <i className="fas fa-rocket"></i></p>

        </AboutStyles>
    )
}

export default About