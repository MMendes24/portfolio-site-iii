import NavBar from './components/NavBar'
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
      </Container>
    </AppStyles>
  )
}

export default App;
