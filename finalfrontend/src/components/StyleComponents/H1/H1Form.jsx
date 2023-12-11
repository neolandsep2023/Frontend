import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


const H1Styles = styled.h1`
  margin: ${({margin}) => margin ? margin : 0};
  font-size: 2.5rem;
  color: ${({theme}) => theme.palette.greenTextColor.main};
  -webkit-text-stroke: 1px #35363a;
  /* padding-right: 25%; */
`

export const H1Form = ({children, margin}) => {
    const { theme } = useTheme()
  return (
    <H1Styles margin={margin} theme={theme}>{children}</H1Styles>
  )
}