import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../services/room.service";
import { FlexDir, H3Custom, Small } from "../../components/StyleComponents";
import { UlCustom } from "../../components/StyleComponents/UL/Ul";
import { ConnectButtonCustom } from "../../components/StyleComponents/Buttons/ConnectButton";
import { Description } from "../../components/StyleComponents/Text/Small/Description";
import { ByIdMap } from "../Pruebas/ByIdMap";
import { printHomeIcons, printRoomIcons } from "../../utils/enumIcons";
import { AppCarousel } from "../../components/Carousel/Carousel";
import { RoomReview } from "../../components/Review/RoomReview";
export const RoomById = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------
  const { id } = useParams();
  let roomData

  const fetchRoom = async () => {
    setRes(await getRoomById(id))
  }

  useEffect(() => {
    fetchRoom()
  }, [])

  return (
    <>
      {res && 
      <FlexDir minHeight="100vh" direction="column" margin="0">
        <h1 style={{fontSize: "4vw"}}>{res?.data?.title}</h1>
        <FlexDir direction="row" gap="2rem" mediaqueryDirMobile="column">
          <FlexDir width="60vw">
            <AppCarousel src={res?.data?.image} alt={res?.data?.title}/>
          </FlexDir>
          <FlexDir direction="column" height="100%" width="25vw" mediaqueryWidthMobile="100vw" mediaqueryMarginMobile="-1rem 0 0 0">
            <UlCustom  mediaqueryDirMobile="row">
              <li><span>{res?.data?.post?.price}€/month</span></li>
              <li>🏠{res?.data?.type}</li>
              <li>{printRoomIcons("Surface")}{res?.data?.room?.surface}m²</li>
              <li>🗺️ {res?.data?.province}, {res?.data?.publicLocation}</li>
              <li>🪟 {res?.data?.exterior && "Exterior Room"}</li>
            </UlCustom>
            <ConnectButtonCustom>Connect</ConnectButtonCustom>
          </FlexDir>
        </FlexDir>
        <FlexDir direction = "row" width="100vw" margin="2.5rem 0 1rem 0" mediaqueryMarginMobile="0.3rem 0 0 0">
          <FlexDir direction="column" width="50%" height="50vh">
            <H3Custom textAlign="center">House Commodities</H3Custom>
            <UlCustom width="100%" height="90%" justifyContent="flex-start" alignItems="start" padding="0 0 0 30%">
              {res?.data?.commoditiesHome?.map((commodity) => (
                <li key={commodity}>{printHomeIcons(commodity)}{commodity}</li>
              ))}
            </UlCustom>
          </FlexDir>
          <FlexDir direction="column" width="50%" height="50vh">
            <H3Custom textAlign="center">Room Commodities</H3Custom>
            <UlCustom width="100%" height="90%" justifyContent="flex-start" alignItems="start" padding="0 0 0 30%">
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
          {res && <ByIdMap postcode = {res?.data?.postcode} province = {res?.data?.province} ccaa={res?.data?.publicLocation}/>}
        </FlexDir>
        <FlexDir mediaqueryMarginMobile="0" mediaqueryMarginTablet="1rem 0 0 0" margin="5rem 0 0 0">
          <RoomReview roomId = {res?.data?._id}/>
        </FlexDir>
      </FlexDir>
      }
    </>
  )
}