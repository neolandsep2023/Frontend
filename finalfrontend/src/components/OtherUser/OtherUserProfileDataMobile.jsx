
import { FlexDir } from "../StyleComponents";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileDataMobileElement } from "../ProfileData/ProfileDataMobile.element";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/user.service";

export const OtherUserProfileDataMobile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {id} = useParams();

    const fetchData = async () => {
      setIsLoaded(false);
      const response = await getUserById(id);
      setData(response.data)
      setIsLoaded(true);
    };
  
    useEffect(() => {
      fetchData();
    }, []);



  return (
    <>
    { data && (
      <ProfileDataMobileElement>
        <img alt="user logo" src={data.image} />
        <h1>@{data.username}</h1>
        {data.description && <p>{data.description}</p>}
        <FlexDir wrap={"wrap"}>
          {data.interests.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        </FlexDir>

        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/posts")}>
          <span className="material-symbols-outlined">article</span> My Posts
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>

<div className="links" onClick={() => navigate("/profile/mobile/rooms")}>
  <span className="material-symbols-outlined">meeting_room</span> My Rooms
  <span className="material-symbols-outlined arrow">chevron_right</span>
</div>
        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/reviews")}>
          <span className="material-symbols-outlined">star</span> Reviews
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/bookmarks")}>
          <span className="material-symbols-outlined">bookmark</span> Bookmarks
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links"
        onClick={() => navigate("/profile/edit")}>
          <span
            className="material-symbols-outlined"
            
          >
            edit
          </span>
          Edit Profile
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>
        <div
          className="links"
          onClick={() => navigate("/profile/settings")}
        >
          <span className="material-symbols-outlined">settings</span> Settings
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>
        <div className="links" onClick={logout}>
          <span className="material-symbols-outlined">move_item</span> Logout
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
      </ProfileDataMobileElement>
    )}
    </>
  
  );
};
