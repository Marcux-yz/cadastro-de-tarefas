import styled from "styled-components"
import EntradaUsuario from "./EntradaUsuario"
import StatusTarefas from "./StatusTarefas"
import { useState } from "react"
import TabelaTarefas from "./TabelaTarefas"

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCenterDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  max-height: 500px;
  width: 50%;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: auto 100px 1fr;
  padding: 30px;
`

const Center = () => {

  const [listaTarefas, setListaTarefas] = useState<string[]>([])

  const adicionarTarefa = (novaTarefa: string) => {
    setListaTarefas([...listaTarefas, novaTarefa])
  }

  return (
    <StyledCenter>
      <StyledCenterDiv>
        <EntradaUsuario onAdicionar={adicionarTarefa}/>
        {listaTarefas.length !== 0 && (
          <>
            <StatusTarefas listaTarefas={listaTarefas}/>
            <TabelaTarefas listaTarefas={listaTarefas}/>
          </>
        )}
        {listaTarefas.length === 0 && (
          <>
            <StatusTarefas listaTarefas={listaTarefas}/>
          </>
        )}
      </StyledCenterDiv>
    </StyledCenter>
  )
}

export default Center