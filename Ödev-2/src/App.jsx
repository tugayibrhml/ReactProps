import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Başlık1 from './Components/Başlık1'
import Başlık2 from './Components/Başlık2'
import Cardd from './Components/Cardd'
import Container from './Components/Container'
import propTypes from 'prop-types'

function App() {

  return (
    <>
    <Container>

      <Başlık1>
             <Cardd 
              title = "Başlık 1"
             />
      </Başlık1>

      <Başlık2>
             <Cardd
              title = {30}
             /> 
      </Başlık2>

    </Container>

    </>
  )
}

Cardd.defaultProps = {
  title: "--Title---Doldur--"
}

Cardd.propTypes = {
  title: propTypes.string.isRequired
}
export default App
