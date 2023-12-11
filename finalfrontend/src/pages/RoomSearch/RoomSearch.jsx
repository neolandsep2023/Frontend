import React, { useState } from 'react'
import { SearchButtonCustom } from '../../components/StyleComponents/Buttons/SearchButton'
import { SearchInputCustom } from '../../components/StyleComponents/Inputs/SearchInput'
import { FlexDir } from '../../components/StyleComponents'

export const RoomSearch = () => {
  const [postCode, setPostCode] = useState()
  return (
    <>
      <FlexDir>
        <form>
          <SearchInputCustom/>
          <SearchButtonCustom>🔎</SearchButtonCustom>
        </form>
      </FlexDir>
      <FlexDir>
        
      </FlexDir>
    </>
  )
}
