import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ChatElementStyles = styled.div`

background-color: blue;
height: 80vh;

display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;


`


export const ChatElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ChatElementStyles theme={theme}>{children}</ChatElementStyles>
  )
}
