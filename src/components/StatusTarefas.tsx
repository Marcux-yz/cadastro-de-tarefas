import styled from "styled-components"

type Props = {
  temTarefas: boolean
}

const StyledStatusTarefa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatusTarefas = (props: Props) => {
  return (
    <>
      {props.temTarefas ? <StyledStatusTarefa></StyledStatusTarefa>
      : <StyledStatusTarefa
      style={{color: "red", fontSize: 25}}>Nenhuma tarefa criada</StyledStatusTarefa>}
    </>
  )
}

export default StatusTarefas