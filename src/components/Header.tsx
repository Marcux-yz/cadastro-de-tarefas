import styled from "styled-components"

type Props = {
  texto: string
}

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledHeader = styled.h1`
  font-size: 40px;
`

const Header = (props: Props) => {
  return (
    <StyledHeaderDiv>
      <StyledHeader>{props.texto}</StyledHeader>
    </StyledHeaderDiv>
  )
}

export default Header