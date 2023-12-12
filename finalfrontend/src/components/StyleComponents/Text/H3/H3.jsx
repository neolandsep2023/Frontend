import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: 0;
  text-align: start;
  width: 100%;

  ${({ theme }) => theme.mediaquery.tablet} {
    text-align: center;
    font-size: 1.8vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    text-align: center;
    font-size: 2.5vw;
  }
`

export const H3Custom = ({children}) => {
  const { theme } = useTheme()
  return (
    <H3Styles>{children}</H3Styles>
  )
}