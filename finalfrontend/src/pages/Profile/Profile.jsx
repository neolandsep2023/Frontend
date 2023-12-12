
import { Outlet } from "react-router-dom"
import { NavProfile } from "../../components/NavProfile/NavProfile"
import { FlexDir } from "../../components/StyleComponents"

export const Profile = () => {
  return (
    <FlexDir direction={"column"}>
        <div>
                 <NavProfile />
        </div>

     <div>
      <Outlet />
      </div>
    </FlexDir>
  )
}

