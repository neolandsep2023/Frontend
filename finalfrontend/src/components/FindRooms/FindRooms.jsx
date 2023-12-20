import { useEffect, useState } from "react"
import { getUserByName } from "../../services/user.service"
import { NothingHere } from "../NothingHere/NothingHere"
// import "./FindRooms.css"
import { getPostByIdUnpopulated, toggleRoom, toggleRoommate } from "../../services/post.service"
import { FindRoomsStyle } from "./FindRooms.element"
import { getRoomByName } from "../../services/room.service"

export const FindRooms = ({ postId, resCheck, setResCheck }) => {
  const [findNameValue, setFindNameValue] = useState()
  const [res, setRes] = useState()
  const [resToggle, setResToggle] = useState();

  const handleSubmit = async (e) => {
    let resUserByName = await getRoomByName(findNameValue)
    setRes(resUserByName)
    e.target.value = ""
  }

  const addRoom = async (userId) => {
    setResToggle(await toggleRoom(postId, userId))
  }

  const checkRoom = async () => {
    setResCheck(await getPostByIdUnpopulated(postId))
  }

  useEffect(() => {
    checkRoom()
  }, [res, resToggle])

  return (
    // <div id="userFinderPage">
    <FindRoomsStyle>
      <div id = "userFinderContainer">
        <input  id = "userFinderInput" placeholder = "enter a user's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmit(e)}>🔎</button>
      </div>
      {res?.data?.length > 0 ? <div id="padreSection">
        {res?.data?.map((room) => {
          return (
            <div className="findUserMapResult" key = {room._id} >
              <section className="findUserMapSection">
                <img src={room?.image[0]} alt={room?.title} className="userFinderImage"/>
                <h2 className="userFinderName">{room?.title?.slice(0,40)}</h2>
              </section>
              <section>
                <button className="addRoommateButton" onClick={() => addRoom(postId)}>{resCheck?.data?.post?.includes(postId) ? "Unadd" : "Add"}</button>
              </section>
            </div>
          )
        })}
      </div>
      : res && <NothingHere page="post"/>}
    </FindRoomsStyle>
    // </div>
  )
}
