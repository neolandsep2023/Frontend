import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addFavPost, getUserById, getUserByIdP } from '../../services/user.service';
import { MiniPostProfile, MiniPostProfileContainerElement } from '../../components';
import { DataProfileElement } from '../Profile/DataProfile/DataProfile.element';
import { FlexDir, ProfileContainer } from '../../components/StyleComponents';
import { usePaginacion } from '../../hooks/usePaginacion';
import { useAuth } from '../../context/authContext';
import { NothingHere } from '../../components/NothingHere/NothingHere';
import { UserReview } from '../../components/UserReview/UserReview';
import"./UserReview.css"
import { Rating } from "primereact/rating";

export const UserDataProfile = ({ page }) => {
    const isMobile = window.innerWidth < 576 ? true : false;
  const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion( isMobile ? 1 : 2);
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLikedPosts, setUserLikedPosts] = useState([]); //! useState de los likes
  const [updatedLikes, setUpdatedLikes] = useState(false);
    const { id } = useParams();
  
    const fetchData = async () =>{
      setIsLoaded(false)
      setRes( await getUserByIdP(id))
      console.log(res?.data)
      setIsLoaded(true)
    }



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
  
  
  useEffect(() => {
    fetchData()
    
  }, [])


  useEffect(() => {
    if (res?.status == 200) {
      page == "posted"
        ? setGaleriaItems(res?.data?.myPosts)
        : page == "rooms"
        ? setGaleriaItems(res?.data?.myRooms)
        : page == "reviews"
        ? setGaleriaItems(res?.data?.receivedComments)
        : page == "createComment"
    
    }
  }, [res, page]);





  const renderSection = () => {
    switch (page) {
      case "posted":
        return (
          <>
            <ProfileContainer heightTablet={"38vh"} height={"77vh"} key={page}>
              <FlexDir>
                <h1>Posts {res?.data?.name ? res?.data?.name : res?.data?.username} has made</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
                  dataPag?.map((post) => (
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
                <h1>Rooms {res?.data?.name ? res?.data?.name : res?.data?.username} has posted</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <MiniPostProfileContainerElement>
                {dataPag[0] ?
                  dataPag?.map((room) => (
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
                <h1>Reviews of  {res?.data?.name ? res?.data?.name : res?.data?.username}'s profile</h1>
                <MiniPaginacion />
              </FlexDir>
              <div className="line"></div>
              {/* <DataProfileElement> */}
              <div className='cajonComentarios'>
                {dataPag[0] ?
                  dataPag?.map((review) => (
                    <div key={review._id} className="commentContainer">
                      <div className='commentHeader'>
                      <img src={review.creatorImage} className="commentImage" alt="Creator" />
                    <span className="commentUser">{review.creatorName}</span>
                    <Rating
                        
                          value={review?.rating}
                          readOnly
                          cancel={false}
                        />
                      </div>
                      
                    <p className="commentText">{review.textComment}</p>
                   
                  </div>
                  )) :
                  <NothingHere path={"/feed"}/>
                  }
              </div>

              {/* </DataProfileElement> */}
            </ProfileContainer>
          </>
        );


        case "createComment":
          return (
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} key={page}>
            <UserReview/>

            {/* </DataProfileElement> */}
          </ProfileContainer>
          );
  
      default:
        return <h1>default</h1>;
    }
  };

  return dataPag && renderSection();
};
