import { createBrowserRouter } from "react-router-dom";
//import App
//import pages
//import components
import React from 'react'
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";
import { Registerpt1 } from "../pages/Register/Registerpt1/Registerpt1";
import App from "../App";

import { MapCreation, ForgotPassword, ByIdMap, Home, RoomSearch, CreateRoom, Login, VerifyCode,Registerpt2, Profile,UserProfileData,FavGallery,EditProfile, AccountSettings, RoomById, Feed } from "../pages";
import { AppCarousel } from "../components/Carousel/Carousel";
import { RoomReview } from "../components/Review/RoomReview";
import { CreatePost } from "../pages/CreatePost/CreatePost";



export const router = createBrowserRouter ([

    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home />,
              },
              {
                path: "/about",
                // element: <About />,
              },
              {
                path: "/register",
                element: <Registerpt1 />,
              },
              {
                path: "/register/complete",
                element: <Registerpt2 />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/forgotpassword",
                element: <ForgotPassword />,
              },
              {
                path: "/roomSearch",
                element: <RoomSearch/>,
              },
              {
                path: "/roomFinds",
                // element: < />,
              },
              {
                path: "/roomFinds/:id",
                element: 
                (<Protected>
                  < RoomById/>
                </Protected>)
              },
              {
                path: "/feed",
                 element: <Feed />,
              },
              {
                path: "/feed/:id",
                element: 
                (<Protected>
                  {/* < /> */}
                </Protected>),
              },
              {
                path: "/verifyCode",
                element: 
                // (<ProtectedCheckChildren>
                  <VerifyCode />
                // </ProtectedCheckChildren>),
              },
              {
                path: "/createRoom",
                element: <CreateRoom />
                // (<Protected>
                //   {/* </> */}
                // </Protected>),
              },
              {
                path: "/createPost",
                element: <CreatePost />
                // (<Protected>
                //   {/* </> */}
                // </Protected>),
              },
              {
                path: "/messages",
                element: 
                (<Protected>
                  {/* </> */}
                  </Protected>)
              },
              {
                path: "/profile",
                element: 
                (<Protected>
                  <Profile />
                  </Protected>)
              ,
                children: [
                  {
                    path: "/profile/user",
                    element: 
                    (<Protected>
                    <UserProfileData/>
                    </Protected>),
                  },
                  {
                    path: "/profile/favourites",
                    element: 
                    (<Protected>
            <FavGallery/>
            </Protected>),
                  },
                  {
                    path: "/profile/edit",
                    element: 
                    (<Protected>
                      <EditProfile />
                      </Protected>),
                  },
                  {
                    path: "/profile/settings",
                    element: 
                    (<Protected>
                     <AccountSettings/>
                    </Protected>),
                  },
        
                ],
              },
              {
                path: "*",
                // element: <NotFound />,
              },
              {path: "/pruebas/create",
            element: <MapCreation/>},
            {path: "/pruebas/view",
          element: <ByIdMap/>},
          {
            path: "/pruebas/styledcomponents",
            element: <RoomReview/>
          }
        ],
    },
]);
