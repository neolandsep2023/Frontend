import React from "react";
import { ProfileDataMobileElement } from "./ProfileDataMobile.element";
import { useAuth } from "../../context/authContext";
import { ButtonPrimary, FlexDir } from "../StyleComponents";
import { ConnectButtonCustom } from "../StyleComponents/Buttons/ConnectButton";
import { useNavigate } from "react-router-dom";

export const ProfileDataMobile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <>
      <ProfileDataMobileElement>
        <img alt="user logo" src={user.image} />
        <h1>@{user.username}</h1>
        <p>{user.description}</p>
        <FlexDir wrap={"wrap"}>
          {user.interests.map((interest) => (
            <h3 className="interests" key={interest}>{interest}</h3>
          ))}
        </FlexDir>

        <div className="line"></div>

        <div className="links" onClick={() => navigate("/profile/mobile/posts")}>
          <span className="material-symbols-outlined">article</span> My Posts
          <span className="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>

<div className="links" onClick={() => navigate("/profile/mobile/posts")}>
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
    </>
  );
};
