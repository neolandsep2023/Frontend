import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ChatElementStyles = styled.div`



`


export const ChatElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ChatElementStyles theme={theme}>{children}</ChatElementStyles>
  )
}
