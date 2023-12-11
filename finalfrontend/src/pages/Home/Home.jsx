import { ButtonPrimary } from '../../components/StyleComponents'
import { useThemeApp } from '../../context/themeContext';
import './Home.css'

export const Home = () => {
    const { toggleTheme } = useThemeApp();

  return (
    <div>Home

<ButtonPrimary  variant={"normal"} size={"large"} onClick={toggleTheme}>TOGGLE THEME</ButtonPrimary>

    </div>
  )
}
