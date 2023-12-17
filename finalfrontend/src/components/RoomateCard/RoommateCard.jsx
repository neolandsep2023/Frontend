import { useTheme } from "@emotion/react"
import { printIconsUser } from "../../utils/enumIcons"
import { FlexDir, H3Custom } from "../StyleComponents"
import { UlCustom } from "../StyleComponents/UL/Ul"
import { RoommateCardStyle } from "./RoommateCard.element"


export const RoommateCard = ({ roommate, position }) => {
  const { theme } = useTheme()
  return (
    <RoommateCardStyle>
      <FlexDir direction="row">
        <FlexDir>
          <img src={roommate?.image} alt="user image" />
        </FlexDir>
        <FlexDir direction="column">
          <FlexDir width="fit-content" padding="4px">
            <H3Custom>{roommate?.name} {roommate?.lastName}</H3Custom>
          </FlexDir>
          <FlexDir>
            <p>{roommate?.description}</p>
          </FlexDir>
          <FlexDir>
            <UlCustom direction="row">
              <FlexDir border={`4.5px solid ${({theme}) => theme.palette.button.mediumGreen}`} padding="4px 6px" borderRadius="10px">
                <li>{printIconsUser("Age")}{roommate?.birthYear && 2023 - roommate?.birthYear} y/o</li>
              </FlexDir>
              <FlexDir border="4.5px solid #72cc8999" padding="4px 6px" borderRadius="10px">
                <li>{printIconsUser(roommate?.gender)}{roommate?.gender}</li>
              </FlexDir>
              <FlexDir border="4.5px solid #72cc8999" padding="4px 6px" borderRadius="10px">
                <li>{printIconsUser("Interest")}{roommate?.interests && roommate?.interests?.slice(0, 3).join(", ")}</li>
              </FlexDir>
            </UlCustom>
          </FlexDir>
        </FlexDir>
      </FlexDir>
    </RoommateCardStyle>
  )
}