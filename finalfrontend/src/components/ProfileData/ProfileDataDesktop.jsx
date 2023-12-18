import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { ButtonPrimary, FlexDir } from "../StyleComponents"
import { ProfileDataDesktopElement } from "./ProfileDataDesktop.element"
// import Rating from '@mui/material/Rating';
import { Rating } from "primereact/rating";





export const ProfileDataDesktop = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

let userAge = (2023 - user.birthYear)

  return (
    <>
    <ProfileDataDesktopElement>
        <FlexDir direction={"column"} margin={"0"} gap={"4px"}>
    <img alt="user logo" src={user.image} />
        <h1>@{user.username}</h1>
        <FlexDir margin={"0"}>
        {userAge != NaN ? <p className="pWeight"> {userAge}</p> : null}
        
        <p className="pWeight">{user.gender}</p>
        </FlexDir>
        </FlexDir>
        <FlexDir direction={"column"} margin={"0"} >
        
       { user.description ?  <p>{user.description}</p> : null }
        </FlexDir>

        <FlexDir direction={"column"} margin={"0"} gap={"2px"}>
        <FlexDir wrap={"wrap"}>
          {user?.interests?.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        
        </FlexDir>
        
        <FlexDir margin={"0"} >
           <h2> 4.75</h2>
           <h2>
        <Rating value={4.75} readOnly cancel={false} />
        </h2>


        </FlexDir >
<FlexDir width={"100%"} gap={"0"} margin={"0"}>
        <ButtonPrimary variant={"normal"} width={"50%"} onClick={() => navigate("/profile/edit")}>Edit Profile</ButtonPrimary>
        <ButtonPrimary variant={"inverted"} width={"50%"} onClick={() => navigate("/profile/settings")}>Settings </ButtonPrimary>
        </FlexDir>
        </FlexDir>
    </ProfileDataDesktopElement>

    
    </>
  )
}
