import styled from "styled-components"

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 10%;
  table-layout: fixed;
`

const StyledTableHead = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 10px;
`

const StyledTableData = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 10px;
`

type Props = {
  listaTarefas: string[]
}

const TabelaTarefas = (props: Props) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHead>Index</StyledTableHead>
          <StyledTableHead>Tarefa</StyledTableHead>
        </tr>
      </thead>
      <tbody>
        {props.listaTarefas.map((tarefa, index) => (
          <tr>
            <StyledTableData>{index + 1}</StyledTableData>
            <StyledTableData>{tarefa}</StyledTableData>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default TabelaTarefas