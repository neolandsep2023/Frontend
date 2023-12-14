import { useTheme } from '@emotion/react';
import styled from '@emotion/styled'
import React from 'react'

const MiniPostStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${({ theme }) => theme.palette.form.main};
border: ${({ theme }) => theme.spacing(0.3)} solid
    ${({ theme }) => theme.palette.border.main};
border-radius: ${({theme }) => (theme.spacing(1.5))};
padding: ${({theme }) => (theme.spacing(1))};
width: 45vw;
height: 300px;
margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1.5))};
& img{
    width: 40%;
    border-radius: 10px;
    border: ${({ theme }) => theme.spacing(0.5)} solid
    ${({ theme }) => theme.palette.border.main};

  }

  & p, h3, h4{
    margin: 0;
  }

  & p {
    max-height: 50px;
    max-width: 100%;
    font-size: 15px;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    white-space: nowrap;
  overflow: hidden;
  }


${({ theme }) => theme.mediaquery.tablet} {
    width: 45vw;
    height: 25vh;
    & img{
    width: 30%;
  }
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 80vh;

    & img{
    width: 80%;

  }


  }




`




export const MiniPostStyle = ({children}) => {
    const { theme } = useTheme();


  return (
    <MiniPostStyles theme={theme}>{children}</MiniPostStyles>
  )
}
