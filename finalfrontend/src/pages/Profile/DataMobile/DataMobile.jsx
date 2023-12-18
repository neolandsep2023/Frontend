import { useState } from "react";
import { useAuth } from "../../../context/authContext";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { getUserByIdP } from "../../../services/user.service";
import { FlexDir, ProfileContainer } from "../../../components/StyleComponents";
import { MiniPostProfile, MiniPostProfileContainerElement } from "../../../components";


export const DataMobile = ({ page }) => {
  const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion(2);
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    setIsLoaded(false);
    setRes(await getUserByIdP(user?._id));
    console.log(res?.data);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (res?.status == 200) {
      console.log(res);
      page == "posted"
        ? setGaleriaItems(res?.data?.myPosts)
        : page == "rooms"
        ? setGaleriaItems(res?.data?.myRooms)
        : page == "reviews"
        ? setGaleriaItems(res?.data?.receivedComments)
        : page == "bookmarks" && setGaleriaItems(res?.data?.likedPosts);
      console.log(dataPag);
    }
  }, [res, page]);

  const renderSection = () => {
    switch (page) {
      case "posted":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
              <FlexDir>
                <h1>Posts you have made</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag &&
                  dataPag.map((post) => (
                    <>
                      <MiniPostProfile
                        key={post._id}
                        page={"post"}
                        id={post._id}
                        title={post.title}
                        text={post.text}
                        image={post.image}
                        province={post.province}
                        price={post.price}
                        type={post.type}
                      ></MiniPostProfile>
                    </>
                  ))}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "rooms":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
              <FlexDir>
                <h1>Rooms you have posted</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag &&
                  dataPag.map((room) => (
                    <>
                      <MiniPostProfile
                        key={room._id}
                        page={"room"}
                        id={room._id}
                        title={room.title}
                        text={room.text}
                        image={typeof(room?.image) == 'string' ? room?.image : room?.image[0] }
                        province={room.province}
                        price={room.price}
                        type={room.type}
                      ></MiniPostProfile>
                      {console.log(typeof(room?.image))}
                    </>
                  ))}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "reviews":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
              <FlexDir>
                <h1>Reviews of your profile</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag &&
                  dataPag.map((review) => (
                    <>
                      <MiniPostProfile
                        key={review._id}
                        page={"review"}
                        id={review._id}
                        title={review.title}
                        text={review.text}
                        image={review.image}
                        province={review.province}
                        price={review.price}
                        type={review.type}
                      ></MiniPostProfile>
                    </>
                  ))}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "bookmarks":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
              <FlexDir>
                <h1>Bookmarks</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag &&
                  dataPag.map((bookmark) => (
                    <>
                      <MiniPostProfile
                        key={bookmark._id}
                        page={"bookmark"}
                        id={bookmark._id}
                        title={bookmark.title}
                        text={bookmark.text}
                        image={bookmark.image}
                        province={bookmark.province}
                        price={bookmark.price}
                        type={bookmark.type}
                      ></MiniPostProfile>
                    </>
                  ))}
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      default:
        return <h1>default</h1>;
    }
  };

  return <div>{dataPag && renderSection()}</div>;
};
