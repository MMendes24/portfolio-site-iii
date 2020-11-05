import React from "react"
import { AboutStyles } from '../styling'

const About = () => {
    return (
        <AboutStyles>

            <h2 className="about-header">Oh, me?</h2>
            <p className="about-p">I'm a full stack web developer who loves to work with React but I'm open to falling in love with other frameworks. At the same time, I've always excelled on server side. I'm a huge believer in programmatic solutions and that hard-coded anything is an option of last resort. I like my components modular, reusable, and functional. I prefer my web servers RESTful but I would never turn down experimenting with a new methodology.</p>

            <p className="about-p">Here you'll find my projects, my resume, and a mountain of evidence implicating me in your local coffee shortage. The app you're currently visiting is a single-page React app, built to be semantic, functional, and easy on the eyes.</p>

            <p className="about-p">I'm originally from New Orleans and back on the Gulf Coast as of 2019. I make music. I love indie and bright colors. I prefer PF2 to D&D 5e. I take my coffee black. I like history, camping, fashion, art, and RPGs. I code in kawaii theme.</p>

            <p className="about-p">I am happily married and love my wife and our two cats very much. It would be impossible to devote so much to what I do without them. Together we've gone to Virginia, California, New York, North Carolina, Louisiana, Mississippi, Pennsylvania, and more, sometimes to visit and sometimes to live. Currently I am looking for remote work, but I can relocate anywhere as needed.</p>

            <p id="ps">(P.S. the color is "Martian Red" if you were wondering.</p>

        </AboutStyles>
    )
}

export default About