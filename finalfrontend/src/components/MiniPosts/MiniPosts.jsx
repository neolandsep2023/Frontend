import { Link } from "react-router-dom"
import { MiniPostStyle } from "./MiniPosts.element"
import { FlexDir, FlexEnd } from "../StyleComponents"


export const MiniPosts = ({id, title, text, image, location, price, author}) => {
const path = `/feed/${id}`


  return (
    <Link to={path}>
    <MiniPostStyle>
        
        
        
        cartita chula
        
        <FlexEnd>Probando</FlexEnd>
     </MiniPostStyle>
    </Link>
  )
}
