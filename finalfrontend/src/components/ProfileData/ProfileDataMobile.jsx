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
            <h3 className="interests">{interest}</h3>
          ))}
        </FlexDir>

        <div className="line"></div>

        <div className="links">
          <span class="material-symbols-outlined">article</span> My Posts
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links">
          <span class="material-symbols-outlined">star</span> Reviews
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links">
          <span class="material-symbols-outlined">bookmark</span> Bookmarks
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>

        <div className="links"
        onClick={() => navigate("/profile/mobile/edit")}>
          <span
            class="material-symbols-outlined"
            
          >
            edit
          </span>
          Edit Profile
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>

        <div className="line"></div>
        <div
          className="links"
          onClick={() => navigate("/profile/mobile/settings")}
        >
          <span class="material-symbols-outlined">settings</span> Settings
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>
        <div className="line"></div>
        <div className="links" onClick={logout}>
          <span class="material-symbols-outlined">move_item</span> Logout
          <span class="material-symbols-outlined arrow">chevron_right</span>
        </div>
      </ProfileDataMobileElement>
    </>
  );
};
