import styled from "@emotion/styled"

const SearchButtonStyles = styled.button`
  border-radius: 50%;
  border: 2px solid #396644;
  width: 50px;
  aspect-ratio: 1/1;
  background-color: #ddffe6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  margin-left: 15px;
`

export const SearchButtonCustom = ({ children }) => {
  return <SearchButtonStyles type="submit">{children}</SearchButtonStyles>
}