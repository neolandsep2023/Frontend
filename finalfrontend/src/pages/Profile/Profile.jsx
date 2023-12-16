
import { Outlet } from "react-router-dom"
import { NavProfile } from "../../components/NavProfile/NavProfile"
import { ButtonPrimary, FlexDir, ProfileContainer } from "../../components/StyleComponents"
import { UserProfileData } from "./UserProfileData/UserProfileData"
import { useAuth } from "../../context/authContext"
import { useThemeApp } from "../../context/themeContext"
import { useTheme } from "@emotion/react"

export const Profile = () => {
  const { theme } = useTheme();

//  console.log("hola", theme.mediaquery.mobile)
  const { user } = useAuth()
  const isDesktop = window.innerWidth < 4000 ? true : false
  const isTablet = window.innerWidth < 768 ? true : false
  const isMobile = window.innerWidth < 576 ? true : false 
  console.log(isDesktop, isTablet, isMobile)
  console.log(user)

  return (
    <>
    <FlexDir width={"98vw"} height={"86vh"} mediaqueryDirTablet={"column"}>
      {/* <UserProfileData/> */}
      <ProfileContainer  width={"32vw"} height={"83vh"} margin={"10px 0 10px 20px"} heightTablet={"38vh"}>
<FlexDir direction={"column"} mediaqueryDirTablet={"row"}>
        <h3> hola </h3>
 <h3> hola </h3>
 <h3> hola </h3>
 <h3> hola </h3>
 <h3> hola </h3>
 </FlexDir>
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

