
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const FlexStyle = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
justify-content: center;
align-items: center;
flex-wrap: ${({wrap}) => wrap ? wrap : "no-wrap"};
gap: ${({gap, theme}) => gap ? gap : theme.spacing(1.5)};
margin: ${({margin, theme}) => margin ? margin : theme.spacing(1)};
padding: ${({padding, theme}) => padding ? padding : theme.spacing(0)};
height: ${({height}) => height ? height : "auto"};
width: ${({width}) => width ? width : "auto"};
min-height: ${({minHeight}) => minHeight ? minHeight : "auto"};

${({theme}) => theme.mediaquery.laptop}{
  /* flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction}; */
}

${({theme}) => theme.mediaquery.tablet}{
  flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction};
  width: ${({mediaqueryWidth, width}) => mediaqueryWidth ? mediaqueryWidth : width}
}

${({theme}) => theme.mediaquery.mobile}{
  flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction};
}
`

export const FlexDir = ({children, direction, mediaqueryDir, gap, height, width, margin, padding, mediaqueryWidth, wrap, minHeight}) => {
  const { theme } = useTheme()
  console.log(theme)

  return (
    <FlexStyle minHeight={minHeight} wrap={wrap} theme = {theme} mediaqueryWidth={mediaqueryWidth} padding = {padding} width={width} height = {height} gap = {gap}  margin={margin} direction={direction} mediaqueryDir={mediaqueryDir}>{children}</FlexStyle>
  )
}
