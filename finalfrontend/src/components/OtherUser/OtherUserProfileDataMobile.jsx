import { FlexDir, H1Custom } from "../StyleComponents";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileDataMobileElement } from "../ProfileData/ProfileDataMobile.element";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { getUserById, getUserByUsernameP } from "../../services/user.service";
import { MessagePopup } from "./MessagePopup";

export const OtherUserProfileDataMobile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [popupActive, setPopupActive] = useState(false)

  const { username } = useParams();

  const fetchData = async () => {
    setIsLoaded(false);
    const response = await getUserByUsernameP(username);
    setData(response.data);
    setIsLoaded(true);
  };


  const showPopup = () => {
    setPopupActive(true)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && (
        <>
          <div style={{ position: "absolute", top: "170px" }}>
            <h1>{data.name ? data.name : data.username}</h1>
          </div>
          <ProfileDataMobileElement>
            <FlexDir direction="column" height="100%">
              <img
                alt="user logo"
                style={{ marginTop: 0, paddingTop: 0 }}
                src={data.image}
              />
              <h1>@{data.username}</h1>
              {data.description && <p>{data.description}</p>}
              <FlexDir wrap={"wrap"}>
                {data.interests.map((interest) => (
                  <h3 className="interests" key={interest}>
                    {interest}
                  </h3>
                ))}
              </FlexDir>
            </FlexDir>
            <div style={{ bottom: 0 }}>
              <div className="line"></div>

              <div
                className="links"
                style={{ height: "calc(100%/2.5)" }}
                onClick={() => navigate(`/user/${data.username}/posts`)}
              >
                <span className="material-symbols-outlined">article</span>{" "}
                {data.name ? data.name : data.username}'s Posts
                <span className="material-symbols-outlined arrow">
                  chevron_right
                </span>
              </div>
              <div className="line"></div>

              <div
                className="links"
                style={{ height: "calc(100%/2.5)" }}
                onClick={() => navigate(`/user/${data.username}/rooms`)}
              >
                <span className="material-symbols-outlined">meeting_room</span>{" "}
                {data.name ? data.name : data.username}'s Rooms
                <span className="material-symbols-outlined arrow">
                  chevron_right
                </span>
              </div>
              <div className="line"></div>

              <div
                className="links"
                style={{ height: "calc(100%/2.5)" }}
                onClick={() => navigate(`/user/${data.username}/reviews`)}
              >
                <span className="material-symbols-outlined">star</span>{" "}
                {data.name ? data.name : data.username}'s Reviews
                <span className="material-symbols-outlined arrow">
                  chevron_right
                </span>
              </div>

              <div className="line"></div>

              <div
                className="links"
                style={{ height: "calc(100%/2.5)" }}
                onClick={showPopup}
              >
                <span className="material-symbols-outlined">chat</span>{" "}
                Chat with {data.name ? data.name : data.username}
                <span className="material-symbols-outlined arrow">
                  chevron_right
                </span>
              </div>
            </div>
          </ProfileDataMobileElement>
        {popupActive && <MessagePopup id={data._id} setPopupActive={setPopupActive} isMobile={true}/>}

        </>
      )}
    </>
  );
};
