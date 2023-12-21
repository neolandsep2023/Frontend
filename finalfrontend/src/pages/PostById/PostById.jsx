import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FlexDir,
  H3Custom,
  SaveElement,
  Small,
} from "../../components/StyleComponents";
import { ByIdImageCustom } from "../../components/StyleComponents/Images/ImageById";
import { UlCustom } from "../../components/StyleComponents/UL/Ul";
import { ConnectButtonCustom } from "../../components/StyleComponents/Buttons/ConnectButton";
import { Description } from "../../components/StyleComponents/Text/Small/Description";
import { ByIdMap } from "../Pruebas/ByIdMap";
import {
  printHomeIcons,
  printIconsUser,
  printRoomIcons,
} from "../../utils/enumIcons";
import { RoomReview } from "../../components/Review/RoomReview";
import { getPostById } from "../../services/post.service";
import { RoommateCard } from "../../components/RoomateCard/RoommateCard";
import { H3PerfectFit } from "../../components/StyleComponents/Text/H3/H3PerfectFit";
import { NoRoomate } from "../../components/RoomateCard/NoRoomateCard";
import { useAuth } from "../../context/authContext";
import { UpdateButton } from "../../components/StyleComponents/Buttons/Update";
import { addFavPost, getUserById } from "../../services/user.service";
import { SavePostElement } from "../../components/StyleComponents/AddElement/SavePost.element";
import { MessagePopup } from "../../components/OtherUser/MessagePopup";
import { LinkRoomButton } from "../../components/StyleComponents/Buttons/LinkRoom";
import { PopUpLink } from "../../components/PopUp/PopUpLink";

export const PostById = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();
  const [isOwner, setIsOwner] = useState();
  const [popupActive, setPopupActive] = useState(false);
  const [popupLinkActive, setPopupLinkActive] = useState(false);
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("");
  const [publicLocation, setPublicLocation] = useState("");

  const [userLikedPosts, setUserLikedPosts] = useState([]);
  const [updatedLikes, setUpdatedLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const [resCheck, setResCheck] = useState();

  //! ---------- Destructuring ----------
  const { id } = useParams();
  const { user } = useAuth();

  let acc = 0;
  let isMobile = window.innerWidth < 575

  //todo ------------- Get Post --------------
  const fetchPost = async () => {
    const data = await getPostById(id);
    console.log(data);
    setRes(data);
    setPublicLocation(data.data.publicLocation);
    setProvince(data.data.province);
    setPostcode(data.data.postcode);
    // console.log(postcode)
  };

  //todo ------------- Check if OWNER -------------
  const isOwnerFunction = () => {
    if (res?.data?.author[0]?.email == user?.email) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  //todo ------------- Toggle Saved & Get Saved -----------
  const addToSaved = async () => {
    const response = await addFavPost(id); //? TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
    setUpdatedLikes(!updatedLikes);
  };

  const getSavedPosts = async () => {
    const userSavedPosts = await getUserById(user._id); //? TIENE QUE IR EN CONSTANTE POR ASINCRONIA DE REACT, NO EN USE STATE
    setUserLikedPosts(userSavedPosts?.data?.savedPosts); //? tiene que ser un array - BACK NO POPULADO
  };

  const isSaved = userLikedPosts?.includes(id);

  const showPopup = () => {
    console.log(res.data.author[0]._id);
    setPopupActive(true);
  };

  const showPopupLink = () => {
    console.log("holaa estoy aqui");
    setPopupLinkActive(true);
  };

  //todo -------------- UseEffects ---------------
  useEffect(() => {
    //? nada más entrar para hacer fetch de la room y pintar todo
    fetchPost();
  }, [resCheck]);

  useEffect(() => {
    //? al cambiar la res y al montarse para checkear si el user encontrado ya es roomate
    if (res?.status == 200) {
      isOwnerFunction();
    }
  }, [res]);

  useEffect(() => {
    setSaved(userLikedPosts?.includes(id));
    getSavedPosts();
  }, [updatedLikes, saved]);

  return (
    <>
      {res && (
        <FlexDir minHeight="100vh" direction="column" margin="0" >
          <h1  style={{maxHeight:"30vh", fontSize: "35px", textAlign:"center", width:"80vw" }}>{res?.data?.title}</h1>
          <FlexDir width="80vw"  direction="row" gap="2rem" mediaqueryDirMobile="column">
            <FlexDir width="60vw" direction="column">
              <ByIdImageCustom src={res?.data?.image} />
              <UlCustom
                direction="row"
                justifyContent="space-between"
                width="60vw"
              >
                <li>
                  {printHomeIcons("Location")}
                  {res?.data?.province}, {res?.data?.publicLocation} -{" "}
                  {res?.data?.postcode}
                </li>
                <FlexDir>
                  <li>
                    <SavePostElement
                      onClick={() => addToSaved(id)}
                      variant={isSaved ? "saved" : "normal"}
                    />
                  </li>
                </FlexDir>
              </UlCustom>
            </FlexDir>
            <FlexDir
              direction="column"
              height="100%"
              width="25vw"
              mediaqueryWidthMobile="60vw"
              mediaqueryMarginMobile="-2rem 0 0 0"
            >
              <UlCustom
                mediaqueryDirMobile="column"
                justifyContent="flex-start"
                alignItems="start"
              >
                <li>
                  <span>{res?.data?.price}€/month</span>
                </li>
                <li>📍{res?.data?.postcode}</li>
                {res?.data?.type == "RoommateSeeker" && (
                  <li>
                    {printRoomIcons("Surface")}
                    {res?.data?.room[0]?.surface}m²
                  </li>
                )}
                <li>🗺️ {res?.data?.province}</li>
                <li>⌛ {res?.data?.preferredAge}</li>
              </UlCustom>
              {!isOwner && (
                <ConnectButtonCustom onClick={showPopup}>
                  Connect
                </ConnectButtonCustom>
              )}
              {isOwner && (
                <Link to={`/updatePost/${id}`}>
                  <UpdateButton page="post" />
                </Link>
              )}
              {isOwner && res?.data?.type == "RoommateSeeker" && (
                <LinkRoomButton setPopupLinkActive={setPopupLinkActive} />
              )}
            </FlexDir>
          </FlexDir>
          <FlexDir margin="0" width="100vw">
            <Description>{res?.data?.text}</Description>
          </FlexDir>
          {res?.data?.type == "RoommateSeeker" && (
            <FlexDir width="100vw" margin="3vw 0 0 0">
              <UlCustom
                width="100%"
                direction="row"
                gap="2rem"
                padding="0 1rem"
              >
                <li>{printRoomIcons("Private Room")}Private Room</li>
                {res?.data?.room[0]?.commoditiesRoom?.includes("Double Bed") ? (
                  <li>{printRoomIcons("Double Bed")}Double Bed</li>
                ) : (
                  <li>{printRoomIcons("Single Bed")}Single Bed</li>
                )}
                {res?.data?.room[0]?.exterior ? (
                  <li>{printRoomIcons("Natural Light")}Exterior</li>
                ) : (
                  <li>{printRoomIcons("Interior")}Interior</li>
                )}
                {isMobile && <li>
                  {printRoomIcons("Surface")}
                  {res?.data?.room[0]?.surface}m²
                </li>}
                {res?.data?.room[0]?.commoditiesRoom?.includes(
                  "Private Bathroom"
                ) ? (
                  <li>{printRoomIcons("Private Bathroom")}Private Room</li>
                ) : (
                  <li>{printRoomIcons("Private Bathroom")}Shared Bathroom</li>
                )}
              </UlCustom>
            </FlexDir>
          )}

          {res?.data?.type == "RoommateSeeker" && (
            <FlexDir
              direction="column"
              width="100vw"
              margin="7vw 0"
              mediaqueryMarginMobile="4vw 0"
              mediaqueryMarginTablet="6vw 0"
            >
              <H3Custom margin="0 0 1vw 0">The roomates</H3Custom>
              {res?.data?.roommates?.length > 0 && isOwner && (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <NoRoomate
                    width="5vw"
                    height="5vw"
                    id={res?.data?._id}
                    resCheck={resCheck}
                    setResCheck={setResCheck}
                  />
                </div>
              )}
              {res?.data?.roommates?.length > 0
                ? res?.data?.roommates?.map((roommate) => {
                    acc++;
                    return (
                      <RoommateCard
                        key={roommate._id}
                        roommate={roommate}
                        index={acc - 1}
                      />
                    );
                  })
                : isOwner && <NoRoomate id={res?.data?._id} />}
            </FlexDir>
          )}

          <hr
            style={{
              border: "none",
              borderTop: "3px dashed #72cc8999",
              width: "100vw",
              margin: "0",
            }}
          />
          <FlexDir justifyContent="center" alignItems="center" textAlign="center"   mediaqueryWidthMobile="80vw" direction="column" >
            <H3Custom margin="3vw 0 1vw 0">The perfect fit</H3Custom>
            <FlexDir direction="row">
              <FlexDir
                justifyContent="flex-start"
                alignItems="start"
                width="30vw"
                direction="column"
                height="100%"
              >
                <H3PerfectFit>
                  {res?.data?.type == "RoommateSeeker"
                    ? "Who we would love to find"
                    : "What I would love to find:"}
                </H3PerfectFit>
                <UlCustom
            justifyContent="flex-start"
            alignItems="flex-start"
                  height="75%"
                  direction="column"
                 
                  gap="1vw"
                >
                  <li>
                    {printIconsUser("Check")}
                    {`${res?.data?.preferredAge} age gap`}
                  </li>
                  <li>
                    {printIconsUser("Check")}
                    {res?.data?.preferredGender == "irrelevant"
                      ? "Irrelevant gender"
                      : res?.data?.preferredGender}
                  </li>
                  {res?.data?.type == "RoommateSeeker" && (
                    <li>
                      {printIconsUser("Check")}
                      {res?.data?.room?.petsAllowed ? "Pets" : "No pets"}
                    </li>
                  )}
                </UlCustom>
              </FlexDir>
              <FlexDir width="15vw">
                <img
                  style={{ width: "20vw", objectFit: "cover" }}
                  src={
                    res?.data?.preferredGender == "male"
                      ? "https://www.flaticon.com/free-icon/boy_1999625"
                      : "https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                  }
                  alt="preferred gender image"
                />
              </FlexDir>
              <FlexDir
                justifyContent="flex-start"
                alignItems="start"
                width="30vw"
                direction="column"
                mediaqueryMarginMobile="0 1rem 0 0"
                height="100%"
              >
                <H3PerfectFit >
                  {" "}
                  {res?.data?.type == "RoommateSeeker"
                    ? "Aligned interests:"
                    : "My interests:"}
                </H3PerfectFit>
                <FlexDir height="75%"  width="100%">
                  <UlCustom
                    direction="row"
                    wrap="wrap"
                    fontSize="1.5vw"
                    gap="0.5vw"
                  >
                    {res?.data?.type == "RoommateSeeker"
                      ? res?.data?.roommates.map((roommate) =>
                          roommate?.interests.slice(0, 3).map((interest) => {
                            return (
                              <FlexDir
                                padding="2px"
                                margin="0"
                                border="1px solid green"
                                borderRadius="2px"
                                key={`FlexDir ${interest}`}
                              >
                                <li key={interest}>{interest}</li>
                              </FlexDir>
                            );
                          })
                        )
                      : res?.data?.author[0]?.interests
                          .slice(0, 3)
                          .map((interest) => {
                            return (
                              <FlexDir
                                padding="2px"
                                margin="0"
                                border="1px solid green"
                                borderRadius="2px"
                                key={`FlexDir ${interest}`}
                              >
                                <li key={interest}>{interest}</li>
                              </FlexDir>
                            );
                          })}
                  </UlCustom>
                </FlexDir>
              </FlexDir>
            </FlexDir>

            {res?.data?.type == "RoommateSeeker" && (
              <FlexDir width="90vw" height="15vw" direction="column" gap="0">
                <H3PerfectFit>Description:</H3PerfectFit>
                <Description>{res?.data?.text}</Description>
              </FlexDir>
            )}
          </FlexDir>
          <hr
            style={{
              border: "none",
              borderTop: "3px dashed #72cc8999",
              width: "100vw",
              margin: "3vh 0",
            }}
          />
          <FlexDir direction="column" margin="7vh">
            <H3Custom margin="0 0 -1rem 0">
              {res?.data?.type == "Room"
                ? "Location"
                : "Location I'm searching for"}
            </H3Custom>
            {postcode != "" && (
              <ByIdMap
                type="repeat"
                postcode={postcode}
                province={province}
                ccaa={publicLocation}
              />
            )}
          </FlexDir>
          {res?.data?.type == "RoommateSeeker" &&
            res?.data?.comments?.length > 0 && (
              <FlexDir
                mediaqueryMarginMobile="0"
                mediaqueryMarginTablet="1rem 0 0 0"
                margin="5rem 0 0 0"
              >
                <RoomReview roomId={res?.data?._id} />
              </FlexDir>
            )}

          {popupLinkActive && (
            <PopUpLink id={id} setPopupLinkActive={setPopupLinkActive} resCheck={resCheck} setResCheck={setResCheck}/>
          )}
          {popupActive && (
            <MessagePopup
              id={res.data.author[0]._id}
              setPopupActive={setPopupActive}
            />
          )}
        </FlexDir>
      )}
    </>
  );
};
