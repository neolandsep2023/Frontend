import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const ProfileContainerStyled = styled.div`

display: flex;
align-items: ${({justi}) => justi ? justi : "center"};
justify-content: center; ;
flex-direction: column;
margin: ${({margin}) => margin ? margin : 0};
height: ${({height}) => height ? height : "74vh" };
width: ${({width}) => width ? width : "66vw" };
border: 1px solid
    ${({ theme }) => theme.palette.border.main};
border-radius: 5px;
background-color: ${({theme}) => theme.palette.form.main};

& h1{
  margin: 0
}

& .line {
    border-top: 2px solid  ${({theme}) => theme.palette.border.main};
    width: 95%;
  }

${({ theme }) => theme.mediaquery.tablet} {
    width: 98vw;
    margin: 0;
    height: ${({heightTablet}) => heightTablet};

  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 98vw;
    margin: 4px;
    height: 102vh;

    & h1{
 font-size: 24px;
}

  }
  ${({ theme }) => theme.mediaquery.miniMobile} {
    width: 98vw;
    margin: 4px;
    height: 720px;
    & h1{
 font-size: 22px;
}

  }


`



export const ProfileContainer = ({children, height, width, margin, heightTablet, justi}) => {

const { theme } = useTheme()

  return (
    <ProfileContainerStyled theme={theme} height={height} width={width} margin={margin} justi={justi} heightTablet={heightTablet}>{children}</ProfileContainerStyled>
  )
}
