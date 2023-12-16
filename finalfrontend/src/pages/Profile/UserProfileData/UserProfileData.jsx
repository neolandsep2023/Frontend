import { useEffect, useState } from "react";
import { useAuth } from "../../../context/authContext";
import { getById, getUserByIdP } from "../../../services/user.service";
import {
  ButtonPrimary,
  FlexDir,
  MiniCards,
} from "../../../components/StyleComponents";

export const UserProfileData = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [displaySection, setDisplaySection] = useState("followed");

  const fetchData = async () => {
    const dataForState = await getUserByIdP(user?._id);
    setData(dataForState);
    setIsDataReady(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data?.data?.myRooms);

  const renderSection = () => {
    switch (displaySection) {
      case "myRooms":
        return (
          <FlexDir direction={"column"}>
            {data?.data?.myRooms?.map((room) => (
              <MiniCards key={room}>
                <img src={room?.image} />
                <h3>{room?.title}</h3>
              </MiniCards>
            ))}
          </FlexDir>
        );
      case "myPosts":
        return (
          <FlexDir direction={"column"}>
            {data?.data?.myPosts?.map((room) => (
              <MiniCards key={room}>
                <img src={room?.image} />
                <h3>{room?.title}</h3>
              </MiniCards>
            ))}
          </FlexDir>
        );
      case "sentComments":
        return (
          <FlexDir direction={"column"}>
            <h3>Comentarios enviados</h3>
          </FlexDir>
        );
      case "receivedComments":
        return (
          <FlexDir direction={"column"}>
            <h3>Comentarios recibidos</h3>
          </FlexDir>
        );
      default:
        return (
          <FlexDir direction={"column"}>
            {data?.data?.myRooms?.map((room) => (
              <MiniCards key={room}>
                <img src={room?.image} />
                <h3>{room?.title}</h3>
              </MiniCards>
            ))}
          </FlexDir>
        );
    }
  };

  return (
    <>
      <FlexDir gap={"0vw"} minHeight={"80vh"}>
        <FlexDir direction={"column"}>
          <figure>
            <img
              style={{ width: "100px" }}
              src={user?.image}
              alt="user image"
            />
            <div>
              <p>{user?.name}</p>
            </div>
          </figure>
          <FlexDir direction={"column"}>
            <ButtonPrimary
              width={"200px"}
              onClick={() => setDisplaySection("myRooms")}
            >
              My rooms
            </ButtonPrimary>
            <ButtonPrimary
              width={"200px"}
              onClick={() => setDisplaySection("myPosts")}
            >
              My posts
            </ButtonPrimary>
            <ButtonPrimary
              width={"200px"}
              onClick={() => setDisplaySection("sentComments")}
            >
              Sent comments
            </ButtonPrimary>
            <ButtonPrimary
              width={"200px"}
              onClick={() => setDisplaySection("receivedComments")}
            >
              Comments
            </ButtonPrimary>
          </FlexDir>
        </FlexDir>

        {renderSection()}
      </FlexDir>
    </>
  );
};
