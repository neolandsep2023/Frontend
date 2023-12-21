import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useThemeApp } from "../../context/themeContext";
import { useAuth } from "../../context/authContext";
import { HeaderSmall } from "./HeaderSmall";
import { HeaderElement } from "./Header.element";
import { ButtonPrimary } from "../StyleComponents";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 776);
  const { toggleTheme, theme } = useThemeApp();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 776);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <HeaderElement>
        <header className="headerDesktop">
          <Link to={"/"} className="headerImg">
            <img
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
              alt="Logo de la clínica"
            />
          </Link>
          <div className="navs">
            <div className="botonesH">
              <a>
              <img  onClick={toggleTheme}   src="https://res.cloudinary.com/djfkchzyq/image/upload/v1703067364/xgavzjkhbovd4tm1oryx.png"></img>
</a>
             
              {user != null ? (
                <>
                <Link to={"/profile"}>
                  <img
                  
                    src={user.image}
                    alt="User"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                  onClick={logout}
               
                    src={"https://res.cloudinary.com/djfkchzyq/image/upload/v1703085474/gofafal1tqzr9rcwzk96.png"}
                    alt="User"
                  />
                </Link>

                </>
              ): <ButtonPrimary
              className="buttonHeader"
              onClick={ navigateToLogin}
            >
              { "LOG IN"}
            </ButtonPrimary>}
            </div>
            <nav className="navDos">
              <ul className="mainNav">
                <NavLink to={"/feed"}>Feed</NavLink>
                <NavLink to={"/roomSearch"}>Room Search</NavLink>
                <NavLink to={"/createRoom"}>Create Room</NavLink>
                <NavLink to={"/createPost"}>Create Post</NavLink>
                <NavLink to={"/messages"}>Messages</NavLink>
              </ul>
            </nav>
          </div>
        </header>
        </HeaderElement>
      ) : (
        <HeaderSmall />
      )}
    </>
  );
};

