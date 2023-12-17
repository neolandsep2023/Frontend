import { FlexDir, H3Custom } from "../StyleComponents"
import { UlCustom } from "../StyleComponents/UL/Ul"
import { RoommateCardStyle } from "./RoommateCard.element"


export const RoommateCard = ({ roommate, position }) => {
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
              <FlexDir>
                <li>{roommate?.birthYear && 2023 - roommate?.birthYear} y/o</li>
              </FlexDir>
              <FlexDir>
                <li>{roommate?.gender}</li>
              </FlexDir>
              <FlexDir>
                <li>{roommate?.interests && roommate?.interests?.slice(0, 3).join(", ")}</li>
              </FlexDir>
            </UlCustom>
          </FlexDir>
        </FlexDir>
      </FlexDir>
    </RoommateCardStyle>
  )
}