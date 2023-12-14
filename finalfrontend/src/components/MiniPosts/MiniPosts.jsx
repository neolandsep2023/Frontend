import { Link } from "react-router-dom"
import { MiniPostStyle } from "./MiniPosts.element"
import { FlexDir, FlexEnd } from "../StyleComponents"
import { useEffect, useState } from "react"


export const MiniPosts = ({id, title, text, image, location, price, author}) => {
const path = `/feed/${id}`


  return (
    <Link to={path}>
    <MiniPostStyle>
        <FlexDir direction={"column"}>
            <FlexDir  width={"100%"} height={"100%"} mediaqueryDirMobile={"column"}>
        <img src={image} alt="img post" />
    <FlexDir width={"50%"} height={"100%"} direction={"column"}>
        
        <h3>{title}</h3>
        <p>{text}</p>
        </FlexDir>
        </FlexDir>
        
        <FlexEnd>

            <h4>{author[0]?.name ? author[0]?.name : author[0]?.username}</h4>
            <h4>{price}€</h4>
            <h4>{location}</h4>
        </FlexEnd>
        </FlexDir>
     </MiniPostStyle>
    </Link>
  )
}
