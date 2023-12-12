import styled from "@emotion/styled";

const AnchorStyles = styled.p`
color: #292491;
text-decoration: underline;
margin: ${({margin, theme}) => margin ? margin : 0};

`




export const Anchor = ({children, margin}) => {
  return (
    <AnchorStyles margin={margin}>{children}</AnchorStyles>
  )
}
