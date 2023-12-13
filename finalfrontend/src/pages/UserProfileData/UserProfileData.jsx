import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { getById, getUserById } from "../../services/user.service";
import { FlexDir } from "../../components/StyleComponents";

export const UserProfileData = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displaySection, setDisplaySection] = useState("followed")

  const fetchData = async () => {
    const dataForState = await getUserById(user?._id);
    setData(dataForState);
    setIsDataReady(true);

  };
  useEffect(() => {
    fetchData();

  }, [ ]);

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
    <FlexDir       gap={"40vw"} minHeight={"80vh"}>
    <FlexDir  direction={"column"}>
    
        <figure >
          <img style={{ width: '100px' }}
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
             followers
          </button>
          <button
            onClick={() => setDisplaySection("followed")}
          
          >
           following
          </button>
          <button
            onClick={() => setDisplaySection("comments")}
          
          >
           comments
          </button>

         
          </FlexDir>
      
      </FlexDir>
      {renderSection()}
      </FlexDir>
    </>
  );
};
