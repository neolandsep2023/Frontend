import { useThemeApp } from "../../context/themeContext"
import { ButtonPrimary, FlexDir } from "../StyleComponents"
import { HeaderStyle } from "./HeaderStyle"

export const Header = () => {
    const { toggleTheme } = useThemeApp()

  return (
    <div>
        <HeaderStyle>
            <FlexDir>
            LOGO TO WAPO
        <ButtonPrimary  variant={"normal"} size={"large"} onClick={toggleTheme}>TOGGLE THEME</ButtonPrimary>
        </FlexDir>
        </HeaderStyle>
    </div>
  )
}
