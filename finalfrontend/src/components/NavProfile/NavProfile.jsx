import { Link, NavLink, useNavigate } from "react-router-dom";
import { ButtonPrimary, FlexDir, Pagination } from "../StyleComponents";
import { useState } from "react";

export const NavProfile = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("profile");

  return (
    <>
      <FlexDir
        width={"100vw"}
        gap={"0.5vw"}
        margin={"16px 0 0 0 "}
        height={"40px"}
      >
        <NavLink to="/profile/user">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            height={""}
            onClick={() => setPage("profile")}
            variant={page == "profile" ? "clicked" : "normal"}
          >
            Profile
          </Pagination>
        </NavLink>
        <NavLink to="/profile/favourites">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("favourites")}
            variant={page == "favourites" ? "clicked" : "normal"}
          >
            Saved
          </Pagination>
        </NavLink>
        <NavLink to="/profile/edit">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("edit")}
            variant={page == "edit" ? "clicked" : "normal"}
          >
            Edit
          </Pagination>
        </NavLink>
        <NavLink to="/profile/settings">
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("settings")}
            variant={page == "settings" ? "clicked" : "normal"}
          >
            Settings
          </Pagination>
        </NavLink>
      </FlexDir>
    </>
  );
};
