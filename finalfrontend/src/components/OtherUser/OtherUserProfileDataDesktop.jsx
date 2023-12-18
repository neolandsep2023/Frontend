import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
// import Rating from '@mui/material/Rating';
import { Rating } from "primereact/rating";
import { ProfileDataDesktopElement } from "../ProfileData/ProfileDataDesktop.element";
import { buttonBaseClasses } from "@mui/material";
import { ButtonPrimary, FlexDir } from "../StyleComponents";

export const OtherUserProfileDataDesktop = ({ data }) => {
  const navigate = useNavigate();
  const user = data;

  let userAge = 2023 - user?.birthYear;

  return (
    <>
      <ProfileDataDesktopElement>
        <FlexDir direction={"column"} height={"100%"}>
          <img alt="user logo" src={user?.image} style={{top: "0"}} />
          <h1>@{user?.username}</h1>
          <FlexDir margin={"0"}>
            <p className="pWeight">{userAge}y</p>{" "}
            <p className="pWeight">{user?.gender}</p>
          </FlexDir>
        </FlexDir>
        <FlexDir direction={"column"} margin={"0"}>
          <p>{user?.description}</p>
        </FlexDir>

        <FlexDir direction={"column"} margin={"0"}>
          <FlexDir wrap={"wrap"}>
            {user?.interests.map((interest) => (
              <h3 className="interests" key={interest}>
                {interest}
              </h3>
            ))}
          </FlexDir>

          <FlexDir>
            <h2> 4.75</h2>
            <h2>
              <Rating value={4.75} readOnly cancel={false} />
            </h2>
          </FlexDir>
        </FlexDir>
      </ProfileDataDesktopElement>
    </>
  );
};
