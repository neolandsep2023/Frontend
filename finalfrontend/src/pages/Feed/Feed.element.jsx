import styled from "@emotion/styled"

const FeedStyled = styled.div`
display: flex;
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
