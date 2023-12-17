import { FlexDir, H3Custom } from "../StyleComponents"
import { RoommateCardStyle } from "./RoommateCard.element"


export const RoommateCard = ({ roommate, position }) => {
  return (
    <RoommateCardStyle>
      <FlexDir><H3Custom>{roommate?.name} {roommate?.lastName}</H3Custom></FlexDir>
    </RoommateCardStyle>
  )
}