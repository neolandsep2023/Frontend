import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoomById } from "../../services/room.service";
import { FlexDir, H3Custom, Small } from "../../components/StyleComponents";
import { UlCustom } from "../../components/StyleComponents/UL/Ul";
import { ConnectButtonCustom } from "../../components/StyleComponents/Buttons/ConnectButton";
import { Description } from "../../components/StyleComponents/Text/Small/Description";
import { ByIdMap } from "../Pruebas/ByIdMap";
import { printHomeIcons, printRoomIcons } from "../../utils/enumIcons";
import { AppCarousel } from "../../components/Carousel/Carousel";
import { RoomReview } from "../../components/Review/RoomReview";
import { UpdateButton } from "../../components/StyleComponents/Buttons/Update";
import { useAuth } from "../../context/authContext";
import { UserReview } from '../../components/UserReview/UserReview';
import { AddReview } from "../../components/StyleComponents/Buttons/AddReview";
export const RoomById = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();
  const [isOwner, setIsOwner] = useState()

  //! ---------- Destructuring ----------
  const { id } = useParams();
  const { user } = useAuth()
  let roomData

  const fetchRoom = async () => {
    setRes(await getRoomById(id))
  }

  const isOwnerFunction = () => {
    if (res?.data?.post?.author[0]?.email == user?.email) {
      setIsOwner(true)
    } else {
      setIsOwner(false)
    }
  }

  useEffect(() => {
    fetchRoom()
  }, [])

  useEffect(() => {
    if (res?.status == 200) {
      isOwnerFunction()
    }
  }, [res])

  return (
    <>
      {res &&
        <FlexDir minHeight="100vh" direction="column" margin="0">
          <h1 style={{ fontSize: "4vw" }}>{res?.data?.title}</h1>
          <FlexDir direction="row" gap="2rem" mediaqueryDirMobile="column">
            <FlexDir width="60vw">
              <AppCarousel src={res?.data?.image} alt={res?.data?.title} />
            </FlexDir>
            <FlexDir 
              direction="column" 
              height="100%" 
              width="25vw" 
              mediaqueryWidthMobile="100vw" 
              mediaqueryMarginMobile="-1rem 0 0 0">
              <UlCustom mediaqueryDirMobile="row">
                <li><span>{res?.data?.post?.price}€/month</span></li>
                <li>🏠{res?.data?.type}</li>
                <li>{printRoomIcons("Surface")}{res?.data?.room?.surface}m²</li>
                <li>🗺️ {res?.data?.province}, {res?.data?.publicLocation}</li>
                <li>🪟 {res?.data?.exterior && "Exterior Room"}</li>
              </UlCustom>
              <ConnectButtonCustom>Connect</ConnectButtonCustom>
              {isOwner && <Link to={`/updateRoom/${id}`}><UpdateButton page="room" /></Link>}
            </FlexDir>
          </FlexDir>
          <FlexDir 
            direction="row" 
            width="100vw" 
            margin="2.5rem 0 1rem 0" 
            mediaqueryMarginMobile="0.3rem 0 0 0"
            minHeight="20vh">
            <FlexDir direction="column" width="50%" minHeight="30vh" height="fit-content">
              <H3Custom textAlign="center">House Commodities</H3Custom>
              <UlCustom 
                width="100%" 
                height="90%" 
                justifyContent="flex-start" 
                alignItems="start" 
                padding="0 0 0 30%">
                {res?.data?.commoditiesHome?.map((commodity) => (
                  <li key={commodity}>{printHomeIcons(commodity)}{commodity}</li>
                ))}
              </UlCustom>
            </FlexDir>
            <FlexDir direction="column" width="50%" height="50vh" minHeight="30vh">
              <H3Custom textAlign="center">Room Commodities</H3Custom>
              <UlCustom 
                width="100%" 
                height="90%" 
                justifyContent="flex-start" 
                alignItems="start" 
                padding="0 0 0 30%">
                {res?.data?.commoditiesRoom?.map((commodity) => (
                  <li key={commodity}>{printRoomIcons(commodity)}{commodity}</li>
                ))}
              </UlCustom>
            </FlexDir>
          </FlexDir>
          <FlexDir direction="column" margin="5rem 0 0 0" width="100vw">
            <H3Custom padding="0 0 0 5vw">Description</H3Custom>
            <Description>{res?.data?.description}</Description>
          </FlexDir>
          <FlexDir direction="column" margin="7vh">
            <H3Custom padding="0 0 0 5vw" margin="0 0 -2.5rem 0">Location</H3Custom>
            {res && <ByIdMap postcode={res?.data?.postcode} province={res?.data?.province} ccaa={res?.data?.publicLocation} />}
          </FlexDir>
          <FlexDir 
            mediaqueryMarginMobile="0 0 5vw 0" 
            mediaqueryMarginTablet="1rem 0 5vw 0" 
            margin="5vw 0"
            direction="column">
            {res?.data?.comments?.length > 0
              ? 
              <>
                <RoomReview roomId={res?.data?._id}/>
                { res?.data?.post?.roommates?.includes(user._id) && <AddReview width="5vw" height="5vw"/>}
              </>
              : <UserReview action="roomcomment" />}
          </FlexDir>
        </FlexDir>
      }
    </>
  )
}