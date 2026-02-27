import { useState } from "react"
import styled from "styled-components"

const StyledEntradaUsuario = styled.input`
  height: 50px;
  width: 100%;
  padding: 10px;
  font-size: 20px;
`

type Props = {
  onAdicionar: (tarefa: string) => void
}

const EntradaUsuario = (props: Props) => {

  const [tarefa, setTarefa] = useState("")

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tarefa.trim() !== "") {
      props.onAdicionar(tarefa)
      setTarefa("")
    }
  }

  return (
    <StyledEntradaUsuario placeholder="Digite uma nova tarefa (Pressione Enter para criar a tarefa)"
    value={tarefa}
    onChange={(e) => setTarefa(e.currentTarget.value)}
    onKeyDown={(e) => handlePressEnter(e)}/>
  )
}

export default EntradaUsuario