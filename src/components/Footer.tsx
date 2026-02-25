import styled from "styled-components"

type Props = {
  texto: string
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledParagraph = styled.p`
  font-size: 20px;
`

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <StyledParagraph>{props.texto}</StyledParagraph>
    </StyledFooter>
  )
}

export default Footer