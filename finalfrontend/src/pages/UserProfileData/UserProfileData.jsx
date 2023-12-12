import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getById } from "../../services/user.service";

import Button from "@mui/material/Button";
import { FlexDir } from "../../components/StyleComponents";

export const UserProfileData = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displaySection, setDisplaySection] = useState("followed")
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = async () => {
    const dataForState = await getById(user._id);
    setData(dataForState);
    setIsDataReady(true);
  };
  useEffect(() => {
    fetchData();
 
  }, [ data]);

  const renderSection = () => {
    switch (displaySection) {
      case "followers":
        return <div>Componente followers</div>;
      case "followed":
        return <div>Componente followed</div>;
      case "comments":
        return    <div>Componente comments</div>;;
      default:
        return <div >DDDD</div>;
    }
  };

  return (
    <>
    <FlexDir>
    <FlexDir  direction={"column"}>
    
        <figure >
          <img
            src={user?.image}
            alt="user image"
           
          />
          <div>
            <p>{user?.name}</p>
      
          </div>
        </figure>
        <FlexDir  direction={"column"}>
          <button
            onClick={() => setDisplaySection("followers")}
           
          >
            {data?.data?.followers?.length} followers
          </button>
          <button
            onClick={() => setDisplaySection("followed")}
          
          >
            {data?.data?.followed?.length} following
          </button>
          <button
            onClick={() => setDisplaySection("comments")}
          
          >
            {data?.data?.comments?.length} comments
          </button>

         
          </FlexDir>
      
      </FlexDir>
      {renderSection()}
      </FlexDir>
    </>
  );
};
