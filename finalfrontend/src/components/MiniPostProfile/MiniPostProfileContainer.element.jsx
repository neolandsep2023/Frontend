import styled from "@emotion/styled"

const ContainerStyles = styled.div`
width: 95%;
height: 48%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;





`






export const MiniPostProfileContainerElement = ({children}) => {
  return (
    <ContainerStyles>{children}</ContainerStyles>
  )
}
