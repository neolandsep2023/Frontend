import styled from "@emotion/styled"

const ContainerStyles = styled.div`
width: 95%;
height: 78%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



${({ theme }) => theme.mediaquery.mobile} {

  height: 85%;
}

  
  ${({ theme }) => theme.mediaquery.miniMobile} {

    height: 88%;
  }





`






export const MiniPostProfileContainerElement = ({children}) => {
  return (
    <ContainerStyles>{children}</ContainerStyles>
  )
}
