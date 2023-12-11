
import styled from "@emotion/styled";

const FlexStyle = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: ${({gap}) => gap ? gap : "1rem"};
margin: ${({margin, theme}) => margin ? margin : theme.spacing(1)};
padding: ${({padding, theme}) => padding ? padding : theme.spacing(0)};
height: ${({height}) => height ? height : "auto"};

${({theme}) => theme.mediaquery.mobile}{

  flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction};

}
`



export const FlexDir = ({children, direction, mediaqueryDir, gap, height}) => {


  return (
    <FlexStyle height = {height} gap = {gap} direction={direction} mediaqueryDir={mediaqueryDir}>{children}</FlexStyle>
  )
}
