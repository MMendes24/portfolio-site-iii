// components
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import About from './components/About'

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
      </Container>
    </AppStyles>
  )
}

export default App;
