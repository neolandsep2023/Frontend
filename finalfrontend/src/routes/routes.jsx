import { createBrowserRouter } from "react-router-dom";
//import App
//import pages
//import components
import React from 'react'
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";
import { Registerpt1 } from "../pages/Register/Registerpt1/Registerpt1";
import App from "../App";

import { MapCreation, ForgotPassword, ByIdMap, Home, RoomSearch, CreateRoom, Login, VerifyCode,Registerpt2, Profile,UserProfileData,FavGallery,EditProfile, AccountSettings, RoomById, Feed, NotFound, PostedPage, ReviewPage, Bookmarks } from "../pages";
import { AppCarousel } from "../components/Carousel/Carousel";
import { RoomReview } from "../components/Review/RoomReview";
import { CreatePost } from "../pages/CreatePost/CreatePost";
import { AppCarouselReview } from "../components/Carousel/ReviewsCarousel";
import { Estrellas } from "../components/Estrellas/Estrellas";
import { About } from "../pages/About/About";
import { PostById } from "../pages/PostById/PostById";
import { User } from "../pages/OtherUser/User";
import { UpdatePost } from "../pages/Update/UpdatePost";
import { UpdateRoom } from "../pages/Update/UpdateRoom";




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
                element: <About />,
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
                  <PostById/>
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
                element: 
                (<Protected>
                  <CreateRoom />
                </Protected>),
              },
              {
                path: "/updateRoom/:id",
                element: 
                (<Protected>
                  <UpdateRoom />
                </Protected>),
              },
              {
                path: "/createPost",
                element: 
                (<Protected>
                <CreatePost />
                </Protected>),
              },
              {
                path: "/updatePost/:id",
                element: 
                (<Protected>
                  <UpdatePost />
                </Protected>),
              },
              {
                path: "/messages",
                element: 
                (<Protected>
                  {/* </> */}
                  </Protected>)
              },
              {
                path: "/user/:id",
                element: (
                  <Protected>
                    <User />
                  </Protected>
                ),
                children: [
                  {
                    path: "/user/:id/posted",
                    element: (
                      <Protected>
                        <PostedPage />
                      </Protected>
                    ),
                  },
                  {
                    path: "/user/:id/reviews",
                    element: (
                      <Protected>
                        <ReviewPage />
                      </Protected>
                    ),
                  },
                ],
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
                    path: "/profile/posted",
                    element: 
                    (<Protected>
                    <PostedPage/>
                    </Protected>),
                  },
                  {
                    path: "/profile/reviews",
                    element: 
                    (<Protected>
            <ReviewPage/>
            </Protected>),
                  },
                  {
                    path: "/profile/bookmarks",
                    element: 
                    (<Protected>
            <Bookmarks/>
            </Protected>),
                  },
        
                ],
              },
              {
                path: "/profile/mobile/posts",
                element: 
                (<Protected>
                <PostedPage/>
                </Protected>),
              },
              {
                path: "/profile/mobile/reviews",
                element: 
                (<Protected>
        <ReviewPage/>
        </Protected>),
              },
              {
                path: "/profile/mobile/bookmarks",
                element: 
                (<Protected>
        <Bookmarks/>
        </Protected>),
              },
              {
                path: "/profile/edit",
                element: 
                (<Protected>
                  <EditProfile />
                  </Protected>)
              },
              {
                path: "/profile/settings",
                element: 
                (<Protected>
                  <AccountSettings />
                  </Protected>)
              },
              {
                path: "*",
                element: <NotFound />,
              },
              {path: "/pruebas/create",
            element: <MapCreation/>},
            {path: "/pruebas/view",
          element: <ByIdMap/>},
          {
            path: "/pruebas/styledcomponents",
            element: <Estrellas/>
          }
        ],
    },
]);
