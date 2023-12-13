import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: ${({margin}) => margin ? margin : "0"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "start"};
  width: 100%;
  padding: ${({padding}) => padding ? padding : "0"};

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 2.4vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: 2.5vw;
  }
`

export const H3Custom = ({children, textAlign, padding, margin}) => {
  const { theme } = useTheme()
  return (
    <H3Styles margin={margin} padding={padding} textAlign={textAlign} >{children}</H3Styles>
  )
}