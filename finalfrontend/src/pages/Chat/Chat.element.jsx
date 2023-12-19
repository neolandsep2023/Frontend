import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ChatElementStyles = styled.div`

#card{
    background-color: red;

    /* ${(theme)=> theme.palette.form.main} */
}


`


export const ChatElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ChatElementStyles theme={theme}>{children}</ChatElementStyles>
  )
}
