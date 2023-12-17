import styled from "@emotion/styled";

const UlStyles = styled.ul`
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : "column"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "center"};
  align-items: ${({alignItems}) => alignItems ? alignItems : "center"};
  gap: ${({gap}) => gap ? gap : "1rem"};
  padding: ${({padding}) => padding ? padding : "0"};
  width: ${({width}) => width ? width : "100%"};
  height: ${({height}) => height ? height : "100%"};
  margin: ${({margin}) => margin ? margin : "0px"};
  li{
    list-style: none;
    font-size: ${({fontSize}) => fontSize ? fontSize : "2vw"};
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
  span{
    font-size: ${({fontSize}) => fontSize ? fontSize : "2.5vw"};
    font-weight: 500;
  }

  ${({ theme }) => theme.mediaquery.desktop} {
    li{
      font-size: ${({fontSize}) => fontSize ? fontSize : "1.5vw"};
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: ${({mediaqueryDirMobile}) => mediaqueryDirMobile && mediaqueryDirMobile }
  }
`

export const UlCustom = ({ children, direction, width, justifyContent, alignItems, height, mediaqueryDirMobile, padding, gap, margin, fontSize}) => {
  return (
    <UlStyles fontSize={fontSize} margin={margin} gap={gap} padding={padding} mediaqueryDirMobile={mediaqueryDirMobile} height={height} alignItems={alignItems} justifyContent={justifyContent} width={width} direction={direction}>{children}</UlStyles>
  )
}