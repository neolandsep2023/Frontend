import styled from "@emotion/styled"

const FeedStyled = styled.div`
display: flex;
background-color: pink;
width: 100vw;
height: 90vh;
flex-wrap: wrap;
/* flex: row wrap; */
justify-content: center;
flex-direction: row;
/* flex-wrap: wrap; */

${({ theme }) => theme.mediaquery.tablet} {
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mediaquery.mobile} {
    flex-direction: column;
  }



`

export const FeedStyle = ({children}) => {
  return (
    <FeedStyled>{children}</FeedStyled>
  )
}
