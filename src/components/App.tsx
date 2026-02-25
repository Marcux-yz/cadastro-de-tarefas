import styled, { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import Center from "./Center"

const EstilosGlobais = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  background-color: bisque;
`

const App = () => {
  return (
    <>
      <EstilosGlobais/>
      <StyledApp>
        <Header texto="Cadastro de Tarefas"/>
        <Center></Center>
        <Footer texto="Feito por Marcus Vinicius"/>
      </StyledApp>
    </>
  )
}

export default App