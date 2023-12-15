import { NavLink } from "react-router-dom"
import { useThemeApp } from "../../context/themeContext"
import { Login } from "../../pages/Login/Login"
import { ButtonPrimary, FlexDir } from "../StyleComponents"
import { HeaderStyle } from "./HeaderStyle"
import { NavProfile } from "../NavProfile/NavProfile"
import { useAuth } from "../../context/authContext"



export const Header = () => {
    const { toggleTheme } = useThemeApp()
    const {user, logout} = useAuth

  return (
    <div>
        <HeaderStyle>
            <FlexDir>
            <img alt="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550400/Untitled_Artwork_34_nlwysx.png"/>
            <img alt="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"/>
        <ButtonPrimary  variant={"normal"} size={"large"} onClick={toggleTheme}>TOGGLE THEME</ButtonPrimary>
        {user == null && (
        <NavLink to="/login" variant={"normal"} size={"normal"}>LOG IN</NavLink>)}
        
        </FlexDir>
        </HeaderStyle>
    </div>
  )
}
