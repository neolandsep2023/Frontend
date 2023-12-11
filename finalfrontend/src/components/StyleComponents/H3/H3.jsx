import styled from "@emotion/styled";

const H3Styles = styled.h3`
  margin: 0;
`

export const H3Custom = ({children}) => {
  return (
    <H3Styles>{children}</H3Styles>
  )
}