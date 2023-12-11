import styled from "@emotion/styled";

const H1Styles = styled.h1`
  margin: 0;
`

export const H1Custom = ({children}) => {
  return (
    <H1Styles>{children}</H1Styles>
  )
}