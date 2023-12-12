import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useThemeApp } from "../../../context/themeContext";

const SearchInputStyles = styled.input`
  border-radius: 30px;
  border: 3px solid /*${({theme}) => theme.palette.border.main}*/ #396644;
  background-color: ${({theme}) => theme.palette.button.mediumGreen};
  height: 55px;
  min-width: 30vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main};
  -moz-box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main};
  box-shadow: 2px 10px 25px -7px ${({theme}) => theme.palette.shadow.main};

  ::placeholder{
    color: ${({darkOrLight}) => darkOrLight == "dark" ? "white" : "black" };
    font-family: ${({theme}) => theme.typography.fonts.italic};
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 0.7px;
    text-align: center
  }

  ${({ theme }) => theme.mediaquery.tablet} {
    height: 6vw;
    min-width: 40vw;

    ::placeholder{
      font-size: 2.5vw
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    height: 8vw;
    min-width: 45vw;

    ::placeholder{
      font-size: 3vw
    }
  }
`
export const SearchInputCustom = ({ onChange }) => {
  const { theme } = useTheme()
  const themeObject = useThemeApp()
  const darkOrLight = themeObject.theme

  return (
    <SearchInputStyles onChange={onChange} darkOrLight = {darkOrLight} theme = {theme} placeholder="enter location or postcode..." ></SearchInputStyles>
  )
}