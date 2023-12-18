import styled from "@emotion/styled";
import { FlexDir } from "../StyleComponents";
import { useState } from "react";
import { toggleRoommate } from "../../services/post.service";
import { FindUsers } from "../FindUsers/FindUsers";

const NoRoomateStyles = styled.div`
  img{
    height: ${({height}) => height ? height : "15vw"};
    width: ${({width}) => width ? width : "15vw"};
  }
`

export const NoRoomate = ({ id, width, height }) => {
  const [res, setRes] = useState();
  const [pressed, setPressed] = useState(false);

  const handleClick = async () => {
    setPressed(true)
  }
  return (
  <NoRoomateStyles width={width} height={height}>
    <FlexDir>
      {pressed == false ? <button style={{border: "none", backgroundColor: "transparent"}} onClick={handleClick}>
        <img src="https://cdn-icons-png.flaticon.com/128/4210/4210903.png" alt="add roommate" />
      </button> : <FindUsers postId={id}/>}
    </FlexDir>
  </NoRoomateStyles>
  )
}