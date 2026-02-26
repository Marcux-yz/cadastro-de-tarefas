import styled from "styled-components"

type Props = {
  listaTarefas: string[]
}

const StyledStatusTarefa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatusTarefas = (props: Props) => {
  return (
    <>
      {props.listaTarefas.length !== 0 ?
      <StyledStatusTarefa
      style={{color: "green", fontSize: 25}}>Você possui {props.listaTarefas.length} {props.listaTarefas.length === 1 ? "tarefa" : "tarefas"}</StyledStatusTarefa>
      : <StyledStatusTarefa
      style={{color: "red", fontSize: 25}}>Nenhuma tarefa criada</StyledStatusTarefa>}
    </>
  )
}

export default StatusTarefas