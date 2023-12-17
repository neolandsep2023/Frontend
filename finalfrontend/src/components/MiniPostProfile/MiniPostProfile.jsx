import { Link } from "react-router-dom"
import { FlexDir, FlexEnd } from "../StyleComponents"
import { MiniPostProfileElement } from "./MiniPostProfile.element"

export const MiniPostProfile = ({id, title, text, image, province, price, type}) => {

  const path = `/feed/${id}`

  return (
    <>
    <MiniPostProfileElement>
        <Link to={path}>
            <FlexDir  width={"100%"} height={"90%"} mediaqueryHeightMobile={"100%"} mediaqueryDirMobile={"column"}>
        <img src={image} alt="img post" />
    <FlexDir width={"60%"} mediaqueryWidthMobile={"90%"} height={"100%"} direction={"column"}>
        
        <h3>{title}</h3>
        <p>{text}</p>
        <FlexEnd padding={"14px"} variant={"inverted"}>
        <h4 className="type">{type == "RoomSeeker" ? "Room" : "Roommate"}</h4>
            <h4 className="price">{price}€</h4>
            
            <h4 className="location">📍{" "}{province}</h4>
        </FlexEnd>
        </FlexDir>
        </FlexDir>
        
       
        </Link>
       


    </MiniPostProfileElement>
    </>
  )
}
