import { useEffect, useState } from "react"
import { getUserByName } from "../../services/user.service"
import { NothingHere } from "../NothingHere/NothingHere"
// import "./FindUsers.css"
import { getPostByIdUnpopulated, toggleRoommate } from "../../services/post.service"
import { FindUserStyle } from "./FindUsers.element"

export const FindUsers = ({ postId, resCheck, setResCheck }) => {
  const [findNameValue, setFindNameValue] = useState()
  const [res, setRes] = useState()
  const [resToggle, setResToggle] = useState();

  const handleSubmit = async (e) => {
    let resUserByName = await getUserByName(findNameValue)
    setRes(resUserByName)
    e.target.value = ""
  }

  const addRoommate = async (userId) => {
    setResToggle(await toggleRoommate(postId, userId))
  }

  const checkRoommates = async () => {
    setResCheck(await getPostByIdUnpopulated(postId))
  }

  useEffect(() => {
    checkRoommates()
  }, [res, resToggle])

  return (
    // <div id="userFinderPage">
    <FindUserStyle>
      <div id = "userFinderContainer">
        <input  id = "userFinderInput" placeholder = "enter a user's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmit(e)}>🔎</button>
      </div>
      {res?.data?.length > 0 ? <div id="padreSection">
        {res?.data?.map((user) => {
          return (
            <div className="findUserMapResult" key = {user._id} >
              <section className="findUserMapSection">
                <img src={user.image} alt={user.name} className="userFinderImage"/>
                <h2 className="userFinderName">{user.name}</h2>
              </section>
              <section>
                {console.log(resCheck?.data?.roommates)}
                <button className="addRoommateButton" onClick={() => addRoommate(user._id)}>{resCheck?.data?.roommates?.includes(user._id) ? "Unadd" : "Add"}</button>
              </section>
            </div>
          )
        })}
      </div>
      : res && <NothingHere page="post"/>}
    </FindUserStyle>
    // </div>
  )
}
