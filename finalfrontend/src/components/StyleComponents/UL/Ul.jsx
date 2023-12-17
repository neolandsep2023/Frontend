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
  li{
    list-style: none;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span{
    font-size: 2.5vw;
    font-weight: 500;
  }

  ${({ theme }) => theme.mediaquery.desktop} {
    li{
      font-size: 1.5vw;
    }
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: ${({mediaqueryDirMobile}) => mediaqueryDirMobile && mediaqueryDirMobile }
  }
`

export const UlCustom = ({ children, direction, width, justifyContent, alignItems, height, mediaqueryDirMobile, padding, gap }) => {
  return (
    <UlStyles gap={gap} padding={padding} mediaqueryDirMobile={mediaqueryDirMobile} height={height} alignItems={alignItems} justifyContent={justifyContent} width={width} direction={direction}>{children}</UlStyles>
  )
}