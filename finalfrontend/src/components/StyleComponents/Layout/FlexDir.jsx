
import styled from "@emotion/styled";

const FlexStyle = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: ${({gap, theme}) => gap ? gap : theme.spacing(1.5)};
margin: ${({margin, theme}) => margin ? margin : theme.spacing(1)};
padding: ${({padding, theme}) => padding ? padding : theme.spacing(0)};
height: ${({height}) => height ? height : "auto"};
width: ${({width}) => width ? width : "auto"};

${({theme}) => theme.mediaquery.mobile}{

  flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction};

}
`



export const FlexDir = ({children, direction, mediaqueryDir, gap, height, width, margin, padding}) => {


  return (
    <FlexStyle padding = {padding} width={width} height = {height} gap = {gap}  margin={margin} direction={direction} mediaqueryDir={mediaqueryDir}>{children}</FlexStyle>
  )
}
