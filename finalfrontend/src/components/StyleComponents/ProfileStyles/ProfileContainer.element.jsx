import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const ProfileContainerStyled = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin: ${({margin}) => margin ? margin : 0};
height: ${({height}) => height ? height : "74vh" };
width: ${({width}) => width ? width : "66vw" };
border: 1px solid
    ${({ theme }) => theme.palette.border.main};
border-radius: 5px;
background-color: ${({theme}) => theme.palette.form.main};

${({ theme }) => theme.mediaquery.tablet} {
    width: 98vw;
    margin: 0;
    height: ${({heightTablet}) => heightTablet};

  }




`



export const ProfileContainer = ({children, height, width, margin, heightTablet}) => {

const { theme } = useTheme()

  return (
    <ProfileContainerStyled theme={theme} height={height} width={width} margin={margin} heightTablet={heightTablet}>{children}</ProfileContainerStyled>
  )
}
