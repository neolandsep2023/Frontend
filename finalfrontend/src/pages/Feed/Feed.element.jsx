import styled from "@emotion/styled"

const FeedStyled = styled.div`
display: flex;
max-width: 100vw;
height: 140vh;
flex-wrap: wrap;
/* flex-direction: column; */
/* flex: row wrap; */
justify-content: center;
/* flex-wrap: wrap; */

${({ theme }) => theme.mediaquery.laptop} {
    /* height: 50vh;
    flex-direction: row;
    flex-wrap: wrap; */
  }

${({ theme }) => theme.mediaquery.tablet} {
    
    flex-direction: row;
    height: 85vh;
    /* height: 95vh; */
    /* flex-wrap: wrap; */
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    height: 520vh;
    flex-direction: row;
    /* flex-wrap: wrap; */
  }



`

export const FeedStyle = ({children}) => {
  return (
    <FeedStyled>{children}</FeedStyled>
  )
}
