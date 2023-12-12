import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"


const MiniCardsStyle = styled.div`
  /* background-color: ${({theme}) => theme.palette.button.mediumGreen}; */
  color: ${({theme}) => theme.palette.textColor.main};
  /* border-radius:${({theme}) => theme.spacing(1.5)};
  border: ${({theme}) => theme.spacing(0.1)} solid ${({theme}) => theme.palette.border.main}; */
  width: 28vw;
  aspect-ratio: 3/2;
  margin: ${({theme})=>
    theme.spacing(1)};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & img{
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    border-radius: 10px;
  };
  & h4{
    text-align: left;
    width: 100%;
    margin: 0;
  }
  & ul{
    display: inline;
    margin: 0;
    padding: 0;
  }
  & li{
    list-style: none;
    font-weight: 400;
    font-size: 15px;
    color: black;
    text-align: left;
    width: fit-content;
    float: left;
    margin: 0;
    margin: 0 12px;
    padding: 0 5px;
    background-color: ${({theme}) => theme.palette.button.mediumGreen};
    border-radius: 5px; 
  }


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
