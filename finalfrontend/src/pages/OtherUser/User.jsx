import { Outlet, useNavigate, useParams } from "react-router-dom";
import { NavProfile } from "../../components/NavProfile/NavProfile";
import {
  ButtonPrimary,
  FlexDir,
  ProfileContainer,
} from "../../components/StyleComponents";
import { useAuth } from "../../context/authContext";
import { useThemeApp } from "../../context/themeContext";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { useUserVerify } from "../../hooks/useUserVerify";
import { getUserByIdP } from "../../services/user.service";
import { OtherUserProfileDataDesktop } from "../../components/OtherUser/OtherUserProfileDataDesktop";
import { OtherUserProfileDataMobile } from "../../components/OtherUser/OtherUserProfileDataMobile";
import { UserDataProfile } from "./UserDataProfile";
import { Pagination } from "@mui/material";

export const User = () => {
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id, "fuera de funcion")
  const [page, setPage] = useState("posted");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
      const response = await getUserByIdP(id);
      console.log(id, "id dentro de dataFetch")
      console.log(response);
      setUserData(response.data);
      setLoading(false);
  };

  const isMobile = window.innerWidth < 576 ? true : false;

  useEffect(() => {
    useUserVerify(user, logout, navigate);
    dataFetch();
  }, []);

  useEffect(() => {}, [userData]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {!loading && userData && (
        <FlexDir
          width={"98vw"}
          height={"86vh"}
          mediaqueryDirTablet={"column"}
          mediaqueryMarginMobile={"0"}
          mediaqueryWidthMobile={"100vw"}
          mediaqueryWidthminiMobile={"100vw"}
          mediaqueryHeightMobile={"100vh"}
        >
          <ProfileContainer
            width={"32vw"}
            height={"83vh"}
            margin={"10px 0 10px 20px"}
            heightTablet={"38vh"}
          >
            {!isMobile && <OtherUserProfileDataDesktop data={userData} />}
            {isMobile && <OtherUserProfileDataMobile data={userData} />}
          </ProfileContainer>

          {!isMobile && (
            <>
              <FlexDir direction={"column"} width={"66vw"} height={"83vh"}>
                <NavProfile />
                <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
                  <Outlet />
                </ProfileContainer>
              </FlexDir>
            </>
          )}

<FlexDir
        
        gap={"0.5vw"}

      >
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            height={""}
            onClick={() => setPage("posted")}
            variant={page == "posted" ? "clicked" : "normal"}
          >
            Posted
          </Pagination>

          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("reviews")}
            variant={page == "reviews" ? "clicked" : "normal"}
          >
            Reviews
          </Pagination>
   
          <Pagination
            width={"9.5vw"}
            mediaQueryWTablet={"15.75vw"}
            mediaQueryWMobile={"23vw"}
            onClick={() => setPage("bookmarks")}
            variant={page == "bookmarks" ? "clicked" : "normal"}
          >
            Bookmarks
          </Pagination>
  

      </FlexDir>



      {/* <ProfileContainer heightTablet={"58vh"} height={"77vh"}> */}

          <UserDataProfile page={page}/>
        
        </FlexDir>
      )}

    </>
  );
};
