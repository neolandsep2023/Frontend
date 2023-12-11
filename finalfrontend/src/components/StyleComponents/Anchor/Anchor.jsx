import styled from "@emotion/styled";

const AnchorStyles = styled.p`
color: #292491;
text-decoration: underline;

`




export const Anchor = ({children}) => {
  return (
    <AnchorStyles>{children}</AnchorStyles>
  )
}
