import styled from "styled-components"
import EntradaUsuario from "./EntradaUsuario"
import StatusTarefas from "./StatusTarefas"

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCenterDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: 100px 50px 1fr;
  padding: 30px;
`

const Center = () => {
  return (
    <StyledCenter>
      <StyledCenterDiv>
        <EntradaUsuario/>
        <StatusTarefas temTarefas={false}/>
      </StyledCenterDiv>
    </StyledCenter>
  )
}

export default Center