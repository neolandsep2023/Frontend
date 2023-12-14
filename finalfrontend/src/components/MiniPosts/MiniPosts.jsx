import { Link } from "react-router-dom"
import { MiniPostStyle } from "./MiniPosts.element"
import { FlexDir, FlexEnd } from "../StyleComponents"
import { useEffect, useState } from "react"


export const MiniPosts = ({id, title, text, image, location, price, author, type}) => {
const path = `/feed/${id}`


  return (
    <Link to={path}>
    <MiniPostStyle>
        <FlexDir  direction={"column"}>
            <FlexDir  width={"100%"} height={"70%"} mediaqueryHeightMobile={"100%"} mediaqueryDirMobile={"column"}>
        <img src={image} alt="img post" />
    <FlexDir width={"60%"} mediaqueryWidthMobile={"90%"} height={"100%"} direction={"column"}>
        
        <h3>{title}</h3>
        <p>{text}</p>
        </FlexDir>
        </FlexDir>
        
        <FlexEnd>
            <FlexDir >
            <img className="profilePicPost" alt="author profile img" src={author[0]?.image}/>
            <h4 className="author">{author[0]?.name ? author[0]?.name : author[0]?.username}</h4>
            </FlexDir>
            <h4 className="price">{price}€</h4>
            <h4>{type}</h4>
            <h4 className="location">📍{location}</h4>
        </FlexEnd>
        </FlexDir>
     </MiniPostStyle>
    </Link>
  )
}
