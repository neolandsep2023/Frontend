import React, { useState } from 'react'
import { SearchButtonCustom } from '../../components/SearchButton/SearchButton'
import { SearchInputCustom } from '../../components/SearchInput/SearchInput'

export const RoomSearch = () => {
  const [postCode, setPostCode] = useState()
  return (
    <>
      <section className='searchRoomContainer'>
        <form>
          {/* <input type="number" placeholder='find rooms in your area, enter postal code'/> */}
          <SearchInputCustom placeholder='find rooms in your area, enter postal code'/>
          <SearchButtonCustom>Find</SearchButtonCustom>
        </form>
      </section>
    </>
  )
}
