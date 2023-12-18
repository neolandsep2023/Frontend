import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: ${({margin}) => margin ? margin : "0"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "center"};
  width: 100%;
  padding: ${({padding}) => padding ? padding : "0"};
  font-size: ${({fontSize}) => fontSize ? fontSize : "2.5vw"};

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 2.4vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: 2.5vw;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    text-align: center;
    font-size: 2.5vw;
  }
`

export const H3Custom = ({children, textAlign, padding, margin, fontSize}) => {
  const { theme } = useTheme()
  return (
    <H3Styles fontSize={fontSize} theme={theme} margin={margin} padding={padding} textAlign={textAlign} >{children}</H3Styles>
  )
}