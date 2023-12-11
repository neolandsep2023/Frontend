
import styled from "@emotion/styled";

const FlexStyle = styled.div`
display: flex;
flex-direction: ${({direction}) => direction};
justify-content: center;
align-items: center;
flex-wrap: wrap;

${({theme}) => theme.mediaquery.mobile}{

  flex-direction: ${({mediaqueryDir, direction})=> mediaqueryDir ? mediaqueryDir : direction};

}
`



export const FlexDir = ({children, direction, mediaqueryDir}) => {


  return (
    <FlexStyle direction={direction} mediaqueryDir={mediaqueryDir}>{children}</FlexStyle>
  )
}
