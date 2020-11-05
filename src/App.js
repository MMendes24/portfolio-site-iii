import React from 'react'

// components
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import About from './components/About'
import Portfolio from './components/Portfolio'

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
        <NavBar />
        <Landing />
        <About />
        <Portfolio />
      </Container>
    </AppStyles>
  )
}

export default App;
