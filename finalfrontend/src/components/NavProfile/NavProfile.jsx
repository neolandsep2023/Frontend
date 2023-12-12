
import { NavLink, useNavigate } from "react-router-dom";


export const NavProfile = () => {
  const navigate = useNavigate();


  return (
    <>
   
        <button onClick={() => navigate("/profile/user")} >Profile</button>
        <button onClick={() => navigate("/profile/favourites")} >Favourites</button>
        <button onClick={() => navigate("/profile/edit")} >Edit</button>
        <button onClick={() => navigate("/profile/settings")} >Settings</button>
     
    </>
  );
};
