import styled from "styled-components"

const StyledEntradaUsuario = styled.input`
  height: 50px;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  
`

const EntradaUsuario = () => {
  return (
    <StyledEntradaUsuario placeholder="Digite uma nova tarefa"/>
  )
}

export default EntradaUsuario