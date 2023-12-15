import { useTheme } from "@emotion/react";
import styled from "@emotion/styled"


const FlexEndStyles = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 15%;
background-color: ${({ theme }) => theme.palette.background.main};
border-radius: ${({ theme }) => theme.spacing(1)};
  border: ${({ theme }) => theme.spacing(0.1)} solid
    ${({ theme }) => theme.palette.border.main};
padding: 1rem;

& h4 {
  font-size: 15px;
}

& .profilePicPost{
    border: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}

& .author{
    font-size: 16px;
}

${({ theme }) => theme.mediaquery.tablet} {
    
  height: 20%;

  }

  ${({ theme }) => theme.mediaquery.mobile} {
    
    height: 10%;
  
    }

`

export const FlexEnd = ({children}) => {
  const { theme } = useTheme();
  return (
    <FlexEndStyles theme={theme}>{children}</FlexEndStyles>
  )
}
