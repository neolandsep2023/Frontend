import styled from "@emotion/styled"


const ChatColumnStyles = styled.div`

border: 3px solid black;
overflow: auto;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;

min-width: ${({variant}) =>
variant == "multiple" ? "35vw" : variant == "individual" && "65vw"};


`



export const ChatColumnElement = ({children, variant}) => {
  return (
    <ChatColumnStyles variant={variant}>{children}</ChatColumnStyles>
  )
}
