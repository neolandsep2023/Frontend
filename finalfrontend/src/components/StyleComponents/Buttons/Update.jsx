import styled from "@emotion/styled";
import { FlexDir } from "../Layout/FlexDir";

const UpdateButtonStyles = styled.div`
  img{
    height: ${({height}) => height ? height : "3vw"};
    width: ${({width}) => width ? width : "3vw"};
  }
`

export const UpdateButton = ({width, height }) => {
  return (
  <UpdateButtonStyles width={width} height={height}>
    <FlexDir>
      <>
        <button style={{border: "1px solid black", borderRadius: "5px", backgroundColor: "transparent", display: "flex", alignItems: "center", gap: "1rem"}}>
          <img src="https://cdn-icons-png.flaticon.com/128/1688/1688988.png" alt="go to update" />
          <div style={{display: "flex", alignItems: "center"}}>
            <h4>Update Post</h4>
          </div>
        </button> 
      </> 
    </FlexDir>
  </UpdateButtonStyles>
  )
}