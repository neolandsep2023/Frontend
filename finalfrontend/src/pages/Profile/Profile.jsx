
import { Outlet, useNavigate } from "react-router-dom"
import { NavProfile } from "../../components/NavProfile/NavProfile"
import { ButtonPrimary, FlexDir, ProfileContainer } from "../../components/StyleComponents"
import { UserProfileData } from "./UserProfileData/UserProfileData"
import { useAuth } from "../../context/authContext"
import { useThemeApp } from "../../context/themeContext"
import { useTheme } from "@emotion/react"
import { ProfileDataDesktop, ProfileDataMobile } from "../../components"
import { useEffect } from "react"
import { useUserVerify } from "../../hooks/useUserVerify"

export const Profile = () => {
  const { theme } = useTheme();

//  console.log("hola", theme.mediaquery.mobile)
  const { user, logout } = useAuth()
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 576 ? true : false 
  
  console.log(user)


  useEffect(() => {
    useUserVerify(user, logout, navigate)
  }, [])




  return (
    <>
    <FlexDir width={"98vw"} height={"86vh"} mediaqueryDirTablet={"column"} mediaqueryMarginMobile={"0"} mediaqueryWidthMobile={"100vw"} mediaqueryWidthminiMobile={"100vw"} mediaqueryHeightMobile={"100vh"}>
      {/* <UserProfileData/> */}
      <ProfileContainer  width={"32vw"} height={"83vh"} margin={"10px 0 10px 20px"} heightTablet={"38vh"}>


{!isMobile && <ProfileDataDesktop/>}
{isMobile && <ProfileDataMobile/>}

      </ProfileContainer>

    
        
    { (!isMobile) &&  (
      <>
    <FlexDir direction={"column"} width={"66vw"} height={"83vh"} >
    <NavProfile />
      <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
    <Outlet />
    </ProfileContainer>
    </FlexDir>
    </>
    )
        } 

  
      
    
    
    </FlexDir>
    </>
  )
}

