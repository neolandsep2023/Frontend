  import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
  import { useThemeApp } from "../../context/themeContext";
  import { Login } from "../../pages/Login/Login";
  import { ButtonHeader, ButtonPrimary, FlexDir } from "../StyleComponents";
  import { HeaderStyle } from "./HeaderStyle";
  import { NavProfile } from "../NavProfile/NavProfile";
  import { useAuth } from "../../context/authContext";
  import { useEffect } from "react";

  export const Header = () => {
    const { toggleTheme, theme } = useThemeApp();
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const isDesktop = window.innerWidth < 4000 ? true : false
    const isTablet = window.innerWidth < 768 ? true : false
    const isMobile = window.innerWidth < 576 ? true : false 

    // console.log(user);
    const navigateToLogin = () => {
      navigate("/login");
    };
    const navigateToProfile = () => {
      (isDesktop || isTablet) && navigate("/profile/posted");
      isMobile && navigate("/profile")
    }

    return (
      <div>
        <HeaderStyle>
          <FlexDir>
            <Link to="/">
            <img
              alt="logo"
              src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"
            />
            </Link>
            <ButtonHeader
              
              onClick={toggleTheme}
            >{theme == "dark" ? "☀️" : "🌙"}
              
            </ButtonHeader>

              <ButtonHeader
                
                onClick={user == null ? navigateToLogin : logout}
              >
                {user == null ? "LOG IN" : "LOG OUT"}
              </ButtonHeader>

              <>
                {user !== null && (
                  <ButtonHeader
                   
                    onClick={navigateToProfile}
                  >
                    PROFILE
                  </ButtonHeader>
                )}
              </>
              {/* //no puede haber un navLink y un boton que te redirija. Si hay un navLink y le pones al navLink el redirect en onCLick
              //y tienes un boton, no pilla el redirect.  Si pones el onCLick en el styledComponent tampoco te lo pilla
              // solo te lo coge si quitas el navLink y metes el onClick en el boton. Es importante meterle el navigate
              //instanciado de useNavigate de react, porque solo con el componente <Navigate/> no funciona */}
          </FlexDir>
        </HeaderStyle>
      </div>
    );
  };
