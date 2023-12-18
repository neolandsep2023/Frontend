import { useNavigate } from "react-router-dom"
import { NothingHereElement } from "./NothingHere.element"
import { ButtonPrimary } from "../StyleComponents"


export const NothingHere = ({path}) => {

const navigate = useNavigate()


  return (
    <>
    <NothingHereElement>
        
        <h1>Nothing here yet</h1>
        <ButtonPrimary onClick={() => navigate(`${path}`)}>Create it!</ButtonPrimary >
        
        </NothingHereElement>
        </>
  )
}
