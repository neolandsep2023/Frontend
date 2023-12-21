import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: ${({margin}) => margin ? margin : "0"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "center"};
  width: 100%;
  padding: ${({padding}) => padding ? padding : "0"};
  font-size: ${({fontSize}) => fontSize ? fontSize : "24px"};

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 24px;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: 24px;
  }

  ${({ theme }) => theme.mediaquery.miniMobile} {
    text-align: center;
    font-size: 24px;
  }
`

export const H3Custom = ({children, textAlign, padding, margin, fontSize}) => {
  const { theme } = useTheme()
  return (
    <H3Styles fontSize={fontSize} theme={theme} margin={margin} padding={padding} textAlign={textAlign} >{children}</H3Styles>
  )
}