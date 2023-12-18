import React, { useEffect, useState } from "react";
import { addFavPost, getUserById, getUserByIdP } from "../../../services/user.service";
import { useAuth } from "../../../context/authContext";
import {
  MiniPostProfile,
  MiniPostProfileContainerElement,
  MiniPosts,
} from "../../../components";
import { DataProfileElement } from "./DataProfile.element";
import { FlexDir, ProfileContainer } from "../../../components/StyleComponents";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { NothingHere } from "../../../components/NothingHere/NothingHere";

export const DataProfile = ({ page }) => {
    const isMobile = window.innerWidth < 576 ? true : false;

  const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion( isMobile ? 1 : 2);
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //! useState de los likes
  const [updatedLikes, setUpdatedLikes] = useState(false);

  

  const fetchData = async () => {
    setIsLoaded(false);
    setRes(await getUserByIdP(user?._id));
    setIsLoaded(true);
  };



 //------------------------------------ save post

 const addToSaved = async (id) => {
  const response = await addFavPost(id); //! TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
  setUpdatedLikes(!updatedLikes);
};

const getSavedPosts = async () => {
  const userSavedPosts = await getUserById(user._id); //! TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
  setUserLikedPosts(userSavedPosts?.data?.likedPosts); //! tiene que ser un array - BACK NO POPULADO

};



useEffect(() => {
  getSavedPosts();
}, [updatedLikes,res]);


console.log(dataPag[0] ? true : false)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (res?.status == 200) {
      page == "posted"
        ? setGaleriaItems(res?.data?.myPosts)
        : page == "rooms"
        ? setGaleriaItems(res?.data?.myRooms)
        : page == "reviews"
        ? setGaleriaItems(res?.data?.receivedComments)
        : page == "bookmarks" && setGaleriaItems(res?.data?.likedPosts);
    
    }
  }, [res, page]);

  const renderSection = () => {
    switch (page) {
      case "posted":
        return (
          <>
            <ProfileContainer heightTablet={"38vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Posts you have made</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
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
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                        
                      ></MiniPostProfile>
                    </>
                  )) :
                  <NothingHere path={"/createPost"}/>
                  }
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "rooms":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Rooms you have posted</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
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
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                      ></MiniPostProfile>
                      {console.log(typeof(room?.image))}
                    </>
                  )) :
                  <NothingHere path={"/createRoom"}/>
                  }
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "reviews":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Reviews of your profile</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
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
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                      ></MiniPostProfile>
                    </>
                  )) :
                  <NothingHere path={"/feed"}/>
                  }
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      case "bookmarks":
        return (
          <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Bookmarks</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
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
                        addToSaved={addToSaved}
                        userLikedPosts={userLikedPosts}
                      ></MiniPostProfile>
                    </>
                  )) : 
                  <NothingHere path={"/feed"}/>
                  }

                  
              </MiniPostProfileContainerElement>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );

      default:
        return <h1>default</h1>;
    }
  };

  return dataPag && renderSection();
};
