import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useThemeApp } from "../../../context/themeContext";

const SearchInputStyles = styled.input`
  border-radius: 30px;
  border: 3px solid /*${({theme}) => theme.palette.border.main}*/ #396644;
  background-color: ${({theme}) => theme.palette.button.main};
  height: 55px;
  min-width: 30vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-box-shadow: 2px 10px 25px 2px ${({theme}) => theme.palette.shadow.main};
  -moz-box-shadow: 2px 10px 25px 2px ${({theme}) => theme.palette.shadow.main};
  box-shadow: 2px 10px 25px 2px ${({theme}) => theme.palette.shadow.main};

  ::placeholder{
    color: ${({darkOrLight}) => darkOrLight == "dark" ? "black" : "white" };
    font-family: ${({theme}) => theme.typography.fonts.italic};
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.7px;
    text-align: center
  }
`
export const SearchInputCustom = () => {
  const { theme } = useTheme()
  const themeObject = useThemeApp()
  const darkOrLight = themeObject.theme

  return (
    <SearchInputStyles darkOrLight = {darkOrLight} theme = {theme} placeholder="enter location or postcode" type= "text"></SearchInputStyles>
  )
}