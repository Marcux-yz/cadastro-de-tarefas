import styled from "styled-components"

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
`

const Center = () => {
  return (
    <StyledCenter>
      <StyledCenterDiv></StyledCenterDiv>
    </StyledCenter>
  )
}

export default Center