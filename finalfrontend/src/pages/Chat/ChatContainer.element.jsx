import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const ChatContainerStyles = styled.div`

border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
  border-radius: ${({ theme }) => theme.spacing(1.5)};
  /* margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1.5))}; */


background-color: ${({ theme }) => theme.palette.form.main};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1px;
height: 100%;


& h1 {
    margin: 0;
}


min-width: ${({variant}) =>
variant == "multiple" ? "33vw" : variant == "individual" && "63vw"};
& img {
  width: 5vw;
  height: 5vw;
  object-fit: cover;
  border-radius: 50%;
  margin: 4px;
}

`



export const ChatContainerElement = ({children, variant}) => {
    const { theme } = useTheme()

  return (
    <ChatContainerStyles variant={variant} theme={theme}>{children}</ChatContainerStyles>
  )
}
