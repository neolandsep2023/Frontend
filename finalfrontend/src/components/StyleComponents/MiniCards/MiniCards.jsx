import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const MiniCardsStyle = styled.div`
background-color: ${({theme}) => theme.palette.form.main};
color: ${({theme}) => theme.palette.textColor.main};
border-radius:${({theme}) => theme.spacing(1.5)};
border: ${({theme}) => theme.spacing(0.1)} solid ${({theme}) => theme.palette.border.main};
width: 30vw;
height: 30vh;
margin: ${({theme})=>
  theme.spacing(1)};
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
& img{
height: 150px;
width: 150px;

object-fit: cover;

margin: ${({theme})=>
  theme.spacing(1)};
};


${({theme}) => theme.mediaquery.mobile}{
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;
    & img{
        height: 300px;
width: 300px;
        object-fit: cover;
}
};

${({theme}) => theme.mediaquery.tablet}{
    width: 45vw;
    height: 50vh;
    & img{
        height: 250px;
width: 250px;
        object-fit: cover;
}
}

`




export const MiniCards = ({children}) => {
const { theme } = useTheme()

  return (
    <MiniCardsStyle theme={theme} >{children}</MiniCardsStyle>
  )
}
