import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FlexDir, H3Custom, Small } from "../../components/StyleComponents";
import { ByIdImageCustom } from "../../components/StyleComponents/Images/ImageById";
import { UlCustom } from "../../components/StyleComponents/UL/Ul";
import { ConnectButtonCustom } from "../../components/StyleComponents/Buttons/ConnectButton";
import { Description } from "../../components/StyleComponents/Text/Small/Description";
import { ByIdMap } from "../Pruebas/ByIdMap";
import { printHomeIcons, printRoomIcons } from "../../utils/enumIcons";
import { AppCarousel } from "../../components/Carousel/Carousel";
import { RoomReview } from "../../components/Review/RoomReview";
import { getPostById } from "../../services/post.service";
export const PostById = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();

  //! ---------- Destructuring ----------
  const { id } = useParams();
  let roomData

  const fetchPost = async () => {
    setRes(await getPostById(id))
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      {res &&
        <FlexDir minHeight="100vh" direction="column" margin="0">
          <h1 style={{ fontSize: "4vw" }}>{res?.data?.title}</h1>
          <FlexDir direction="row" gap="2rem" mediaqueryDirMobile="column">
            <FlexDir width="60vw">
              <ByIdImageCustom src={res?.data?.image}/>
            </FlexDir>
            <FlexDir direction="column" height="100%" width="25vw" mediaqueryWidthMobile="100vw" mediaqueryMarginMobile="-1rem 0 0 0">
              <UlCustom mediaqueryDirMobile="row">
                <li><span>{res?.data?.price}€/month</span></li>
                <li>🏠{res?.data?.postcode}</li>
                <li>{printRoomIcons("Surface")}{res?.data?.room?.surface}m²</li>
                <li>🗺️ {res?.data?.province}</li>
                <li>⌛ {res?.data?.preferredAge}</li>
              </UlCustom>
              <ConnectButtonCustom>Connect</ConnectButtonCustom>
            </FlexDir>
          </FlexDir>
          <FlexDir direction="column" margin="0 0 0 0" width="100vw">
            <H3Custom padding="0 0 0 5vw">Description</H3Custom>
            <Description>{res?.data?.text}</Description>
          </FlexDir>
          <FlexDir direction="column" width="100vw">
            <H3Custom padding="0 0 0 5vw">House Commodities</H3Custom>
            <UlCustom width="100%" direction="row">
                <li>{printRoomIcons("Private Room")}Private Room</li>
                {res?.data?.room?.commoditiesRoom?.includes("Double Bed") ? <li>{printRoomIcons("Double Bed")}Double Bed</li> : <li>{printRoomIcons("Single Bed")}Single Bed</li>}
                {res?.data?.room?.exterior ? <li>{printRoomIcons("Natural Light")}Exterior</li> : <li>{printRoomIcons("Interior")}Interior</li>}
                <li>{printRoomIcons("Surface")}{res?.data?.room?.surface}m²</li>
                {res?.data?.room?.commoditiesRoom?.includes("Private Bathroom") ? <li>{printRoomIcons("Private Bathroom")}Private Room</li> : <li>{printRoomIcons("Private Room")}Shared Bathroom</li>}
            </UlCustom>
          </FlexDir>
          <FlexDir direction="column" margin="7vh">
            <H3Custom padding="0 0 0 5vw" margin="0 0 -2.5rem 0">Location</H3Custom>
            {/* {res && <ByIdMap postcode={res?.data?.postcode} province={res?.data?.province} ccaa={res?.data?.publicLocation} />} */}
          </FlexDir>
          <FlexDir mediaqueryMarginMobile="0" mediaqueryMarginTablet="1rem 0 0 0" margin="5rem 0 0 0">
            <RoomReview roomId={res?.data?._id} />
          </FlexDir>
        </FlexDir>
      }
    </>
  )
}