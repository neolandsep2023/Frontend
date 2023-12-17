import { useTheme } from "@emotion/react"
import { printIconsUser } from "../../utils/enumIcons"
import { FlexDir, H3Custom } from "../StyleComponents"
import { UlCustom } from "../StyleComponents/UL/Ul"
import { RoommateCardStyle } from "./RoommateCard.element"


export const RoommateCard = ({ roommate, index }) => {
  const { theme } = useTheme()
  return (
    <RoommateCardStyle>
      <FlexDir direction="row">
        {index%2 == 0 && <FlexDir>
          <img src={roommate?.image} alt="user image" style={{ objectFit: "cover", borderRadius: "50%", width:"15vw", height:"15vw"}}/>
        </FlexDir>}
        <FlexDir direction="column">
          <FlexDir margin="0px 32px" width="60vw" padding="0 10px" justifyContent={index%2 == 0 ? "start" : "end"}>
            <FlexDir width="fit-content" padding="4px" margin="0" border="4.5px solid #72cc89">
              <H3Custom>{roommate?.name} {roommate?.lastName}</H3Custom>
            </FlexDir>
          </FlexDir>
          <FlexDir margin="0px 32px" width="60vw" backgroundColor="#72cc89" padding="0 10px" borderRadius="10px">
            <p>{roommate?.description}</p>
          </FlexDir>
          <FlexDir>
            <UlCustom direction="row" margin="0px" fontSize="1vw" gap="3vw">
              <FlexDir border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser("Age")}<b>{roommate?.birthYear && 2023 - roommate?.birthYear} y/o</b></li>
              </FlexDir>
              <FlexDir border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser(roommate?.gender)}<b>{roommate?.gender}</b></li>
              </FlexDir>
              <FlexDir border="2px solid #72cc89" padding="2px 6px" borderRadius="10px" margin="0px">
                <li>{printIconsUser("Interest")}<b>{roommate?.interests && roommate?.interests?.slice(0, 3).join(", ")}</b></li>
              </FlexDir>
            </UlCustom>
          </FlexDir>
        </FlexDir>
        {index%2 !== 0 && <FlexDir>
          <img src={roommate?.image} alt="user image" style={{ objectFit: "cover", borderRadius: "50%", width:"15vw", height:"15vw"}}/>
        </FlexDir>}
      </FlexDir>
    </RoommateCardStyle>
  )
}