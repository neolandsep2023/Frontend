import React, { useEffect, useState } from 'react'
import { SearchInputCustom, FlexDir, SearchImgCustom, SearchButtonCustom, H1Custom, H3Custom, MiniCards } from '../../components/StyleComponents/index'
import { useThemeApp } from '../../context/themeContext'
import { getAllRooms, getRoomByLocation, getRoomByPostCode, getRoomByProvince } from '../../services/room.service';
import { useErrorFindRoom } from '../../hooks/useErrorFindRoom';
import { roomData } from '../../data/Rooms.data';
import { GalleryCustom } from '../../components';


export const RoomSearch = () => {
  //! ---------- Estados ----------
  const [res, setRes] = useState();
  const [findOK, setFindOk] = useState();
  const [send, setSend] = useState();
  const [valueInput, setValueInput] = useState("");
  const [submit, setSubmit] = useState()
  const [postCode, setPostCode] = useState()

  //! ---------- Destructuring ----------
  const {theme} = useThemeApp()

  const handleSearch = async () => {
    setSubmit(true)
    setSend(true)
    //? -------- condicional para llamar al controlador que toque --------
    if (valueInput.length > 0) {
      if (valueInput.includes("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")) {
        setRes(await getRoomByPostCode(valueInput))
      } else if (roomData.publicLocation.includes(valueInput)) {
        setRes(await getRoomByLocation(valueInput))
      } else if (roomData.province.includes(valueInput)) {
        setRes(await getRoomByProvince(valueInput))
      }
    } else {
      setRes(await getAllRooms())
    } //? ----------------------------------------------------------------
    setSend(false)
  }

  useEffect(() => {
    useErrorFindRoom(res, setFindOk, setRes)
  }, [res])

  return (
    <>
      <FlexDir minHeight="100vh" width="100vw" direction="column" margin="0">
        <FlexDir direction="row" gap="5vw" height = "100%" width="100%" padding="3rem" mediaqueryDir="column">
          <FlexDir direction = "column" width="45vw" mediaqueryWidth="90vw" wrap="wrap">
            <H1Custom>Perfect <span style={{color: theme == "dark" ? "#72cc89" : "#396644"}}>rooms</span> await you</H1Custom>
            <H3Custom>Discover Your Ideal Living Space with HousePal's varied offers</H3Custom>
            <FlexDir width="100%" direction="row">
              <SearchInputCustom onChange = {(e) => setValueInput(e.target.value)}/>
              <SearchButtonCustom onClick={handleSearch}>🔎</SearchButtonCustom>
            </FlexDir>
          </FlexDir>
          <FlexDir height= "90%" mediaqueryWidth= "90vw">
            <SearchImgCustom marginTop = "0" src = "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"/>
            <SearchImgCustom marginTop = "-10rem" src = "https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404.jpg?crop=0.733xw:1.00xh;0.121xw,0&resize=980:*"/>
            <SearchImgCustom marginTop = "10rem" src = "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-lb-avery-cox-virginia-highlands2576-v2-1670968227.jpg"/>
          </FlexDir>
        </FlexDir>
        {submit == true && <FlexDir direction="column">
          <h1>Top Rooms in your Area</h1>
          <FlexDir wrap="wrap" gap="2rem">
            {console.log(res)}
            {res && res?.data?.map((room)=> (
              <MiniCards>
                <img src={room.image[0]} alt={room.title}/>
                <h4>{room.title.slice(0, 25)}...</h4>
                <ul>
                  <li>{room.province}, {room.publicLocation}</li>
                  {room.roomates > 0 ? <li>{room.roomates} 🙍🏻‍♂️</li> : <li>{room.type}</li>}
                  <li>{room.surface}m²</li>
                </ul>
              </MiniCards>
            ))}
          </FlexDir>
        </FlexDir>}
      </FlexDir>
    </>
  )
}
