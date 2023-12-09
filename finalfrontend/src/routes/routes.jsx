import { createBrowserRouter } from "react-router-dom";
//import App
//import pages
//import components
import React from 'react'
import { Protected } from "../components/ProtectedRoutes/Protected";
import { ProtectedCheckChildren } from "../components/ProtectedRoutes/ProtectedCheckChildren";

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
                element: <Register />,
              },
              {
                path: "/registertwo",
                // element: <RegisterTwo />,
              },
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/forgotPassword",
                // element: < />,
              },
              {
                path: "/roomSearch",
                // element: < />,
              },
              {
                path: "/roomFinds",
                // element: < />,
              },
              {
                path: "/roomFinds/:id",
                element: 
                (<Protected>
                  {/* < /> */}
                </Protected>)
              },
              {
                path: "/feed",
                // element: < />,
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
                (<ProtectedCheckChildren>
                  <VerifyCode />
                </ProtectedCheckChildren>),
              },
              {
                path: "/createRoom",
                element: 
                (<Protected>
                  {/* </> */}
                </Protected>),
              },
              {
                path: "/messages",
                element: 
                (<Protected>
                  {/* </> */}
                </Protected>),
              },
              {
                path: "/profile",
                element: 
                (<Protected>
                  <Profile />
                </Protected>),
                children: [
                  {
                    path: "/profile/user",
                    element: 
                    (<Protected>
                      {/* <UserProfileData /> */} 
                    </Protected>),
                  },
                  {
                    path: "/profile/favourites",
                    element: 
                    (<Protected>
                      {/* <FavGallery/> */}
                    </Protected>),
                  },
                  {
                    path: "/profile/edit",
                    element: 
                    (<Protected>
                      {/* <EditProfile /> */}
                    </Protected>),
                  },
                  {
                    path: "/profile/settings",
                    element: 
                    (<Protected>
                      {/* <AccountSettings /> */}
                    </Protected>),
                  },
        
                ],
              },
              {
                path: "*",
                element: <NotFound />,
              },
        ],
    },
]);