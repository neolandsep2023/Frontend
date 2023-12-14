import { useThemeApp } from "../../context/themeContext"
import { ButtonPrimary, FlexDir } from "../StyleComponents"
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {
    const { toggleTheme } = useThemeApp()

  return (
    <div>
        <HeaderStyle>
            <FlexDir>
            <img alt="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550400/Untitled_Artwork_34_nlwysx.png"/>
            <img alt="logo" src="https://res.cloudinary.com/daxddugwt/image/upload/v1702550399/Untitled_Artwork_33_nmkluc.png"/>
        <ButtonPrimary  variant={"normal"} size={"large"} onClick={toggleTheme}>TOGGLE THEME</ButtonPrimary>
        </FlexDir>
        </HeaderStyle>
    </div>
  )
}
