import { useEffect, useState } from "react";
import { Loading, MiniPosts } from "../../components";
import { FeedStyle } from "./Feed.element";
import {
  getAllPostByType,
  getAllPosts,
  getAllPostsPopulated,
  search,
} from "../../services/post.service";
import { usePaginacion } from "../../hooks/usePaginacion";
import {
    AddElement,
  FlexDir,
  LabelAndInput,
  RadioInput,
  SearchButtonCustom,
  SearchInputCustom,
} from "../../components/StyleComponents";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { addFavPost, getUserById, getUserByIdPLikes } from "../../services/user.service";

export const Feed = () => {
  const [res, setRes] = useState(null);  //!useState de todas las res
 
  const [feed, setFeed] = useState(null);   //!useState del feed
  const [send, setSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [sendSearch, setSendSearch] = useState(false); //! useState del Search
  const [searchInput, setSearchInput] = useState(null);
  const [resSearch, setResSearch] = useState([]);

  const [userLikedPosts, setUserLikedPosts] = useState([]); //! useState de los likes
  const [updatedLikes, setUpdatedLikes] = useState(false);
  const [resLike, setResLike] = useState([])
  const [userLikesRes, setUserLikesRes] = useState([])

  const { ComponentPaginacion, setGaleriaItems, dataPag } = usePaginacion(6);
  const { user } = useAuth();

  //-------------------------------- set Gallery segun el tipo (feed)
  const setGallery = async () => {
    setSend(true);
    setRes(await getAllPostByType(feed));

    setIsLoading(false);
    setSend(false);
  };


//------------------------------------ hace el search segun el tipo
  const handleSearch = async () => {
    setIsLoading(true);
    setSendSearch(true);
    // console.log(searchInput)
    setResSearch(await search(searchInput));
    console.log(resSearch);
    setIsLoading(false);
  };

//------------------------------------ save post


const addToSaved = async (id) => {
    setResLike(await addFavPost(id));
    console.log("id",id)
    setUpdatedLikes(!updatedLikes);
    // console.log(resLike)
  };

  const getSavedPosts = async () => {
    setUserLikesRes( await getUserById(user._id)); 
    setUserLikedPosts(userLikesRes?.data?.likedPosts)      //! tiene que ser un array
    console.log(userLikedPosts)
  };


  useEffect(() => {
    if (sendSearch == true && resSearch?.status == 200) {
      console.log(feed, resSearch?.data);

      feed == "RoomSeeker"
        ? setGaleriaItems(resSearch?.data?.resArrayRoommSeeker)  //aqui se setea la respuesta del search segun estes en room o roommate
        : setGaleriaItems(resSearch?.data?.resArrayRoommateSeeker);
    } else {
      res?.status == 200 && setGaleriaItems(res?.data?.allPosts);
      // console.log(res?.data?.allPosts)
    }
  }, [res, resSearch]);

  useEffect(() => {
    res?.status == 200 && setGaleriaItems(res?.data);
  }, [res, feed]);

  useEffect(() => {
    setGallery();
  }, [feed]);

  useEffect(() => {
    getSavedPosts();
  }, [updatedLikes, feed, res]);


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FlexDir direction={"column"} >
            <LabelAndInput alignItems={"center"} margin={(feed == null && "30vh")}>
              I'm looking for a
              <RadioInput minW="calc(100%/2.4)">
                <input
                  type="radio"
                  name="postType"
                  id="RoomSeeker"
                  value="RoomSeeker"
                />
                <label
                  htmlFor="RoomSeeker"
                  onClick={() => setFeed("RoomSeeker")}
                >
                  Room
                </label>
                <input
                  type="radio"
                  name="postType"
                  id="RoommateSeeker"
                  value="RoommateSeeker"
                />
                <label
                  htmlFor="RoommateSeeker"
                  onClick={() => setFeed("RoommateSeeker")}
                >
                  Roommie
                </label>
              </RadioInput>
            </LabelAndInput>
            <FlexDir>

                { (feed != null) && (
                    <>
                    <SearchInputCustom
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <SearchButtonCustom onClick={handleSearch}><span className="material-symbols-outlined">
    search
    </span></SearchButtonCustom>
    </>
                )}
              
            </FlexDir>

            {dataPag && (feed != null)  && (
                <>
            <ComponentPaginacion />
            <FeedStyle>
              {dataPag
                ? dataPag.map((item) => (
                    <MiniPosts
                      key={item?._id}
                      id={item?._id}
                      title={item?.title}
                      text={item?.text}
                      image={item?.image}
                      province={item?.province}
                      price={item?.price}
                      author={item?.author}
                      addToSaved={addToSaved}
                      userLikedPosts={userLikedPosts}
                      updatedLikes={updatedLikes}
                    ></MiniPosts>
                  ))
                : (res?.response?.status == 404 ||
                    res?.response?.status == 500 ||
                    resSearch?.response?.status == 404 ||
                    resSearch?.response?.status == 500) && <h1>Error 404</h1>}
            <Link to='/createPost'>
             <AddElement/>
             </Link>
            </FeedStyle>
            </>
            )
}
          </FlexDir>
        </>
      )}
    </>
  );
};
