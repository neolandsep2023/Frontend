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

${({ theme }) => theme.mediaquery.tablet} {
    width: 45vw;
    height: 25vh;
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1))};
    width: 90vw;
    height: 37vh;
  }

`




export const MiniPostStyle = ({children}) => {
    const { theme } = useTheme();


  return (
    <MiniPostStyles theme={theme}>{children}</MiniPostStyles>
  )
}
