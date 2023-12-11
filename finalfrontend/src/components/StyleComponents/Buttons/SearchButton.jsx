import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const SearchButtonStyles = styled.button`
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.palette.border.main};
  width: 35px;
  aspect-ratio: 1/1;
  background-color: #ddffe6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  margin-left: 15px;
`

export const SearchButtonCustom = ({ children }) => {
  const { theme } = useTheme()
  return <SearchButtonStyles theme = {theme} type="submit">{children}</SearchButtonStyles>
}