import styled from "@emotion/styled"


const FlexEndStyles = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;




`

export const FlexEnd = ({children}) => {
  return (
    <FlexEndStyles>{children}</FlexEndStyles>
  )
}
