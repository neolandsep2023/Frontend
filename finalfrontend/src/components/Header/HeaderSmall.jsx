import React, { useState } from "react";
import "./HeaderSmall.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ButtonHeader } from "../StyleComponents";
import { useThemeApp } from "../../context/themeContext";
import { useAuth } from "../../context/authContext";


export const HeaderSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const { toggleTheme, theme } = useThemeApp();
  const { user, logout } = useAuth();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="headerSmall">
      <div className="smallUno">
        <button className="hamburguesa" onClick={handleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>

        <img
          src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
          alt="Logo "
        />
        <div className="botonesHS">
        <button className="buttonHeader" onClick={toggleTheme}>
          {theme == "dark" ? "☀️" : "🌙"}
        </button>
        <button className="buttonHeader" onClick={user == null ? navigateToLogin : logout}>
          {user == null ? "LOG IN" : "LOG OUT"}
        </button>
        </div>

        
      </div>

      {showMenu && (
        <div className="zonaMobile mostrar">
          <nav className="navMobile">
            <figure className="figureNav">
              <span className="material-symbols-outlined">home</span>
              <NavLink to={"/"} onClick={() => setShowMenu(false)}>
                Home
              </NavLink>
            </figure>
            {user != null ? (
              <figure className="figureNav">
                <span className="material-symbols-outlined">
                  person
                </span>
                <NavLink to={"/profile"} onClick={() => setShowMenu(false)}>
                  Profile
                </NavLink>
              </figure>
            ) : (
              <figure className="figureNav">
                <span className="material-symbols-outlined">badge</span>
                <NavLink to={"/login"} onClick={() => setShowMenu(false)}>
                  Login
                </NavLink>
              </figure>
            )}

            <figure className="figureNav">
              <span className="material-symbols-outlined">edit_note</span>
              <NavLink to={"/feed"} onClick={() => setShowMenu(false)}>
                Feed
              </NavLink>
            </figure>

            <figure className="figureNav">
              <span className="material-symbols-outlined">source_environment</span>
              <NavLink to={"/roomSearch"} onClick={() => setShowMenu(false)}>
                Room Search
              </NavLink>
            </figure>

            <figure className="figureNav">
              <span className="material-symbols-outlined">handshake</span>
              <NavLink to={"/createRoom"} onClick={() => setShowMenu(false)}>
                Create Room
              </NavLink>
            </figure>
            <figure className="figureNav">
              <span className="material-symbols-outlined">reduce_capacity</span>
              <NavLink to={"/createPost"} onClick={() => setShowMenu(false)}>
                Create Post
              </NavLink>
            </figure>

            <figure className="figureNav">
              <span className="material-symbols-outlined">mail</span>
              <NavLink to={"/messages"} onClick={() => setShowMenu(false)}>
                Messages
              </NavLink>
            </figure>
          </nav>
        </div>
      )}
    </header>
  );
};
