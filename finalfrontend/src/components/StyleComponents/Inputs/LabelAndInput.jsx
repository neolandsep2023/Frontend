import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const LabelAndInputStyle = styled.div`

display: flex;
    flex-direction: column;
    align-items: flex-start ;
width: 70%;
& input{
  width: 100%;
    height: ${({theme}) => theme.spacing(3.5)};
}

`


export const LabelAndInput = ({children}) => {
  const { theme } = useTheme()
  return (
    <LabelAndInputStyle theme={theme}>{children}</LabelAndInputStyle>
  )
}
