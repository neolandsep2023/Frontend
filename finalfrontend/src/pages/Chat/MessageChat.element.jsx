import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'



const MessageChatStyle = styled.div`

display: flex;
/* align-items: start; */
justify-content: space-between;
min-width: 50%;
max-width: 70%;
height: auto;
padding: 12px;
background-color: ${({ theme, variant }) => variant == "own" ? theme.palette.button.mediumGreen : variant == "otherUser" && theme.palette.background.main};
justify-self: ${({variant}) => variant == "own" ? "end" : variant == "otherUser" && "start"};
border-radius: 10px;
  /* border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main}; */





& p {
    margin: 0 8px;
    font-weight: 500;
}

`




export const MessageChatElement = ({children, variant}) => {
    const { theme } = useTheme()
  return (
    <MessageChatStyle variant={variant} theme={theme}>{children}</MessageChatStyle>
  )
}
