import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const DescriptionStyles = styled.small`
font-size: 20px;
width: 70%;
text-align: left;
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
