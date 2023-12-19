import styled from "@emotion/styled"

const MiniChatStyles = styled.div`


`



export const MiniChatElement = ({children}) => {
  return (
    <MiniChatStyles>{children}</MiniChatStyles>
  )
}
