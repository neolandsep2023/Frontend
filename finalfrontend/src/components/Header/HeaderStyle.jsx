
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useThemeApp } from "../../context/themeContext";

const HeaderStyles = styled.header`
  background-color: ${({theme}) => theme.palette.header.main};
  text-align: center;
  padding: ${({theme})=>
  theme.spacing(1)};
  height: 12vh;
  width: 100vw;
`;



export const HeaderStyle = ({children}) => {
    const { theme } = useTheme();

  return (
    <HeaderStyles theme={theme}>{children}</HeaderStyles>
  )
}
