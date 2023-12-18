import { Link } from "react-router-dom"
import { FlexDir, FlexEnd } from "../StyleComponents"
import { MiniPostProfileElement } from "./MiniPostProfile.element"

export const MiniPostProfile = ({id, title, text, image, province, price, type, page}) => {

  const path = page == "post" || page == "bookmark" ? `/feed/${id}` : page == "room" && `/roomFinds/${id}`

  return (
    <>
    <MiniPostProfileElement>
        <Link to={path}>
            <FlexDir  width={"100%"} height={"80%"} mediaqueryHeightMobile={"100%"} mediaqueryDirMobile={"column"} margin={"0"}>
        <img src={image} alt="img post" />
    <FlexDir width={"60%"} mediaqueryWidthMobile={"90%"} height={"100%"} direction={"column"} margin={"0"}>
        
        <h3>{title}</h3>
        <p>{text}</p>
       
        </FlexDir>
        </FlexDir>
        <FlexDir width={"100%"} margin={"5px 0 0 0"}>
        <FlexEnd padding={"14px"} variant={"inverted"}>
        <h4 className="type">{type == "RoomSeeker" ? "Room" : "Roommie"}</h4>
            <h4 className="price">{price}€</h4>
            
            <h4 className="location">📍{" "}{province}</h4>
        </FlexEnd>
        </FlexDir>
       
        </Link>
       


    </MiniPostProfileElement>
    </>
  )
}
