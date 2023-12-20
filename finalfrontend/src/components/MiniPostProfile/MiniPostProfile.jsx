import { Link } from "react-router-dom"
import { FlexDir, FlexEnd, SaveElement } from "../StyleComponents"
import { MiniPostProfileElement } from "./MiniPostProfile.element"
import { useEffect, useState } from "react"

export const MiniPostProfile = ({id, title, text, image, province, price, type, page, addToSaved, userLikedPosts}) => {
  const isMobile = window.innerWidth < 576 ? true : false 

  const path = page == "post" || page == "bookmark" ? `/feed/${id}` : page == "room" && `/roomFinds/${id}`



  const isSaved = userLikedPosts?.includes(id)
  



  return (
    <>
    <MiniPostProfileElement>
 
    { isMobile && <SaveElement onClick={()=> addToSaved(id)} variant={isSaved ? "saved" : "normal"}/>}
    <Link to={path}>
    { !isMobile && <SaveElement onClick={()=> addToSaved(id)} variant={isSaved ? "saved" : "normal"}/>}
      <FlexDir direction={"column"} padding={"12px"}>
       
          
        { page != "room" && <img src={image} alt="img post" />}
        {/* { page === "room" && <img src={image[0]} alt="img post" />} */}
    
        
        <h3>{title}</h3>
        <p>{text}</p>
       
       
        
        
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
