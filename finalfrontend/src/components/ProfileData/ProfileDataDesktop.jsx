import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { ButtonPrimary, FlexDir } from "../StyleComponents"
import { ProfileDataDesktopElement } from "./ProfileDataDesktop.element"
// import Rating from '@mui/material/Rating';
import { Rating } from "primereact/rating";
import { useEffect, useState } from "react";
import { getUserByIdP } from "../../services/user.service";
import { sacarMedia } from "../../utils/mediaUtil";





export const ProfileDataDesktop = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
      setIsLoaded(false);
      const response = await getUserByIdP(user?._id);
      setData(response.data)
      setIsLoaded(true);
    };
  
    useEffect(() => {
      fetchData();
      console.log(data)
    }, []);

    const medias = sacarMedia(data)
console.log(data)

let userAge = data?.birthYear && (2023 - data?.birthYear)

  return (
    data && (
    <>

    <ProfileDataDesktopElement>
        <FlexDir direction={"column"} margin={"0"} gap={"4px"}>
    <img alt="user logo" src={data?.image} />
        <h1>@{data?.username}</h1>
      
        </FlexDir>
        <FlexDir direction={"column"} margin={"0"} >
        <FlexDir margin={"0"}>
        {data?.birthYear != null && <p className="pWeight"> {userAge}</p> }
        
        <p className="pWeight">{data?.gender}</p>
        </FlexDir>
       { data?.description ?  <p>{data?.description}</p> : null }
        </FlexDir>

        <FlexDir direction={"column"} margin={"0"} gap={"2px"}>
        <FlexDir wrap={"wrap"}>
          {data?.interests?.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        
        </FlexDir>
        
        <FlexDir margin={"0"} >
           <h2> {medias}</h2>
           <h2>
        <Rating value={medias} readOnly cancel={false} />
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
  )
}
