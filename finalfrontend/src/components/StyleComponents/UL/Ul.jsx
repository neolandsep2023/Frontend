import styled from "@emotion/styled";

const UlStyles = styled.ul`
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : "column"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "center"};
  align-items: ${({alignItems}) => alignItems ? alignItems : "center"};
  gap: 1rem;
  padding: 0;
  width: ${({width}) => width ? width : "100%"};
  height: ${({height}) => height ? height : "100%"};
  li{
    list-style: none;
    font-size: 2vw;
  }
  span{
    font-size: 2.5vw;
    font-weight: 500;
  }
`

export const UlCustom = ({ children, direction, width, justifyContent, alignItems, height }) => {
  return (
    <UlStyles height={height} alignItems={alignItems} justifyContent={justifyContent} width={width} direction={direction}>{children}</UlStyles>
  )
}