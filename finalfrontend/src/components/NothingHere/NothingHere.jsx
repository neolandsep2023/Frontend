import { useNavigate } from "react-router-dom"
import { NothingHereElement } from "./NothingHere.element"
import { ButtonPrimary } from "../StyleComponents"


export const NothingHere = ({path, page}) => {

const navigate = useNavigate()


  return (
    <>
    <NothingHereElement>
        
        <h1>Nothing here yet</h1>
        {page != "post" && <ButtonPrimary onClick={() => navigate(`${path}`)}>Create it!</ButtonPrimary >}
        
        </NothingHereElement>
        </>
  )
}
