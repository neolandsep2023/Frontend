import styled from "@emotion/styled"

const FeedStyled = styled.div`
display: flex;
max-width: 100vw;
height: 160vh;
flex-wrap: wrap;
justify-content: center;
gap: 4px;
margin: 0 1rem 0 1rem ;

border-radius: ${({ theme }) => theme.spacing(2)};
  border: ${({ theme }) => theme.spacing(0.5)} solid
    ${({ theme }) => theme.palette.border.main};

${({ theme }) => theme.mediaquery.laptop} {

  }

${({ theme }) => theme.mediaquery.tablet} {
    
    flex-direction: row;
    height: 85vh;

  }

  ${({ theme }) => theme.mediaquery.mobile} {
    height: 520vh;
    flex-direction: row;
    margin: 0 ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)};
  }



`

export const FeedStyle = ({children}) => {
  return (
    <FeedStyled>{children}</FeedStyled>
  )
}
