import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const SearchInputStyles = styled.input`
  border-radius: 30px;
  border: 2px solid ${({theme}) => theme.palette.border.main};
  background-color: #ddffe6;
  height: 70px;
  min-width: 25vw;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SearchInputCustom = () => {
  const { theme } = useTheme()

  return (
    <SearchInputStyles theme = {theme} placeholder="enter location or postcode" type= "text"></SearchInputStyles>
  )
}