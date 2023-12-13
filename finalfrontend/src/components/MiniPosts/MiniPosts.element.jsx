import { useTheme } from '@emotion/react';
import styled from '@emotion/styled'
import React from 'react'

const MiniPostStyles = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: red;
width: 30vw;
height: 300px;
margin: ${({ margin, theme }) => (margin ? margin : theme.spacing(1.5))};

${({ theme }) => theme.mediaquery.tablet} {
    width: 45vw;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    width: 90vw;
  }

`




export const MiniPostStyle = ({children}) => {
    const { theme } = useTheme();


  return (
    <MiniPostStyles theme={theme}>{children}</MiniPostStyles>
  )
}
