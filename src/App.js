// components
import NavBar from './components/NavBar'
import Landing from './components/Landing'

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
      </Container>
    </AppStyles>
  )
}

export default App;
