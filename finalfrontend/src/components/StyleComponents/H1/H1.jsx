import styled from "@emotion/styled";
import { useThemeApp } from "../../../context/themeContext";

const H1Styles = styled.h1`
  margin: 0;
  text-align: start;
  width: 100%;
  font-size: 4em;
  line-height: 1;
  /* padding-right: 25%; */
`

export const H1Custom = ({children}) => {
  return (
    <H1Styles>{children}</H1Styles>
  )
}