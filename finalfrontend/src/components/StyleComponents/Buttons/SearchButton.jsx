import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useThemeApp } from "../../../context/themeContext"

const SearchButtonStyles = styled.button`
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.palette.border.main};
  width: 50px;
  aspect-ratio: 1/1;
  background-color:  ${({darkOrLight}) => darkOrLight == "dark" ? "#bbffcd" : "#72cc89" };
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  margin-left: 15px;
`

export const SearchButtonCustom = ({ children }) => {
  const { theme } = useTheme()
  const themeObject = useThemeApp()
  const darkOrLight = themeObject.theme

  return <SearchButtonStyles darkOrLight = {darkOrLight} theme = {theme} type="submit">{children}</SearchButtonStyles>
}