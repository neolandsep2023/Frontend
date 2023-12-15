  import { NavLink, Navigate, useNavigate } from "react-router-dom";
  import { useThemeApp } from "../../context/themeContext";
  import { Login } from "../../pages/Login/Login";
  import { ButtonPrimary, FlexDir } from "../StyleComponents";
  import { HeaderStyle } from "./HeaderStyle";
  import { NavProfile } from "../NavProfile/NavProfile";
  import { useAuth } from "../../context/authContext";
  import { useEffect } from "react";

  export const Header = () => {
    const { toggleTheme } = useThemeApp();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    console.log(user);
    const navigateToLogin = () => {
      navigate("/login");
    };

    return (
      <div>
        <HeaderStyle>
          <FlexDir>
            <img
              alt="logo"
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550400/Untitled_Artwork_34_nlwysx.png"
            />
            <img
              alt="logo"
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
            />
            <ButtonPrimary
              variant={"normal"}
              size={"large"}
              onClick={toggleTheme}
            >
              TOGGLE THEME
            </ButtonPrimary>

              <ButtonPrimary
                variant={user == null ? "normal" : "loading"}
                size={"normal"}
                onClick={user == null ? navigateToLogin : logout}
              >
                {user == null ? "LOG IN" : "LOG OUT"}
              </ButtonPrimary>
              {/* //no puede haber un navLink y un boton que te redirija. Si hay un navLink y le pones al navLink el redirect en onCLick
              //y tienes un boton, no pilla el redirect.  Si pones el onCLick en el styledComponent tampoco te lo pilla
              // solo te lo coge si quitas el navLink y metes el onClick en el boton. Es importante meterle el navigate
              //instanciado de useNavigate de react, porque solo con el componente <Navigate/> no funciona */}
          </FlexDir>
        </HeaderStyle>
      </div>
    );
  };
