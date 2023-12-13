
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../StyleComponents";


export const NavProfile = () => {
  const navigate = useNavigate();


  return (
    <>
   
        <ButtonPrimary onClick={() => navigate("/profile/user")} >Profile</ButtonPrimary>
        <ButtonPrimary onClick={() => navigate("/profile/favourites")} >Favourites</ButtonPrimary>
        <ButtonPrimary onClick={() => navigate("/profile/edit")} >Edit</ButtonPrimary>
        <ButtonPrimary onClick={() => navigate("/profile/settings")} >Settings</ButtonPrimary>
     
    </>
  );
};
