import React, { useState } from 'react'
import { SearchInputCustom, FlexDir, SearchImgCustom, SearchButtonCustom, H1Custom, H3Custom } from '../../components/StyleComponents/index'


export const RoomSearch = () => {
  const [postCode, setPostCode] = useState()
  return (
    <>
      <FlexDir gap="5rem" height = "100vh">
        <FlexDir direction = "column">
          <H1Custom>Perfect rooms await you</H1Custom>
          <H3Custom>"Discover Your Ideal Living Space with HousePal's varied offers"</H3Custom>
          <form>
            <SearchInputCustom/>
            <SearchButtonCustom>🔎</SearchButtonCustom>
          </form>
        </FlexDir>
        <FlexDir height= "90%">
          <SearchImgCustom src = "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"/>
          <SearchImgCustom src = "https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404.jpg?crop=0.733xw:1.00xh;0.121xw,0&resize=980:*"/>
          <SearchImgCustom src = "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg"/>
        </FlexDir>
      </FlexDir>
    </>
  )
}
