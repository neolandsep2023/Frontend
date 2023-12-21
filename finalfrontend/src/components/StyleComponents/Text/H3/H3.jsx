import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: ${({margin}) => margin ? margin : "0"};
  text-align: ${({textAlign}) => textAlign ? textAlign : "center"};
  width: 75%;
  padding: ${({padding}) => padding ? padding : "0"};
  font-size: ${({fontSize}) => fontSize ? fontSize : "1.5em"};

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 25px;
    padding: ${({paddingTablet}) => paddingTablet ? paddingTablet : "0"}
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

export const H3Custom = ({children, textAlign, padding, margin, fontSize, paddingTablet}) => {
  const { theme } = useTheme()
  return (
    <H3Styles paddingTablet={paddingTablet} fontSize={fontSize} theme={theme} margin={margin} padding={padding} textAlign={textAlign} >{children}</H3Styles>
  )
}