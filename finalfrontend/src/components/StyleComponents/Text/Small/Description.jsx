import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const DescriptionStyles = styled.small`
font-size: 1.7vw;
width: 75%;
text-align: justify;
/* background-color: ${({theme}) => theme.palette.button.mediumGreenOpaco}; */
border-radius: 5px;
padding: 10px;
`

export const Description = ({children}) => {
  const {theme} = useTheme()
  return (
    <DescriptionStyles>{children}</DescriptionStyles>
  )
}
