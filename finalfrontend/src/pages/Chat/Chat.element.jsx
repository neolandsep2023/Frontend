import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const ChatElementStyles = styled.div`


height: 80vh;

display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
padding: ${({ theme }) => ( theme.spacing(1.5))};
gap: 8px;

& .line {
    border-top: 2px solid ${({theme}) => theme.palette.border.main};;
    width: 90%;
  }



& .textArea{
  width: 50vw;
font-size: 16px;
  overflow-y: scroll;
  border-radius: 10px;
  border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
}



`


export const ChatElement = ({children}) => {
    const { theme } = useTheme()
  return (
    <ChatElementStyles theme={theme}>{children}</ChatElementStyles>
  )
}
