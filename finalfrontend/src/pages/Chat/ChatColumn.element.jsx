import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const ChatColumnStyles = styled.div`




  padding: ${({ theme }) => theme.spacing(1.5)};

overflow-y: ${({scroll}) => scroll ? scroll : "scroll"};
::-webkit-scrollbar {
  width: 10px;
}
background-color: ${({ theme }) => theme.palette.form.main};
display: ${({display})=> display ? display : "flex"};
justify-content: start;
align-items: ${({align}) => align ? align : "center"};
flex-direction: column;
gap: 8px;
margin: 8px;
height: 100%;

width: 95%;



`



export const ChatColumnElement = ({children, display}) => {
    const { theme } = useTheme()
  return (
    <ChatColumnStyles theme={theme} display={display}>{children}</ChatColumnStyles>
  )
}
