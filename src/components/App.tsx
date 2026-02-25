import styled, { createGlobalStyle } from "styled-components"
import Header from "./Header"

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
`

const App = () => {
  return (
    <>
      <EstilosGlobais/>
      <StyledApp>
        <Header texto="Cadastro de Tarefas"/>
      </StyledApp>
    </>
  )
}

export default App