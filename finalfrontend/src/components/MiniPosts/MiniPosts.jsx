import { Link } from "react-router-dom"
import { MiniPostStyle } from "./MiniPosts.element"
import { FlexDir, FlexEnd } from "../StyleComponents"


export const MiniPosts = ({id, title, text, image, location, price, author}) => {
const path = `/feed/${id}`


  return (
    <Link to={path}>
    <MiniPostStyle>
        <img src={image} alt="img post" />
        <h3>{title}</h3>
        <p>{text}</p>
        
        <FlexEnd>
            <h4>{author[0]?.name ? author[0]?.name : author[0]?.username}</h4>
            <h4>{price}</h4>
            <h4>{location}</h4>
        </FlexEnd>
     </MiniPostStyle>
    </Link>
  )
}
