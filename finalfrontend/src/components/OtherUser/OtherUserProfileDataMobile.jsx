
import { FlexDir } from "../StyleComponents";
import { useNavigate } from "react-router-dom";
import { ProfileDataMobileElement } from "../ProfileData/ProfileDataMobile.element";

export const OtherUserProfileDataMobile = ({data}) => {
  const navigate = useNavigate();
  console.log(data);

  const user = data;

  return (
    <>
      <ProfileDataMobileElement>
        <img alt="user logo" src={user.image}  style={{width: '250px', height: '250px', marginBottom: '1rem'}}/>
        <h1>@{user.username}</h1>
        <p>{user.description}</p>
        <FlexDir wrap={"wrap"} margin={"1rem"}>
          {user.interests.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        </FlexDir>

        <div className="line"></div>

        <div className="links" style={{height: '40px', bottom: 40}}>
          <span className="material-symbols-outlined">article</span> User Posts
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links" style={{height: '40px', bottom: 0}}>
          <span className="material-symbols-outlined">star</span> Reviews
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

      </ProfileDataMobileElement>
    </>
  );
};
