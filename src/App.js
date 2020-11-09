import React from 'react'

// components
import NavWrapper from './components/NavWrapper'
import Landing from './components/Landing'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

// styles
import {
  AppStyles,
  Container
} from "./styling"

import "./styles.css"

function App() {
  return (
    <AppStyles>
      <Container>
        <NavWrapper />
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </Container>
    </AppStyles>
  )
}

export default App;
