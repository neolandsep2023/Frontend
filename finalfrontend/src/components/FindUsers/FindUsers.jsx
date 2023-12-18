import { useEffect, useState } from "react"
import { getUserByName } from "../../services/user.service"
import "./FindUsers.css"
import { Link } from "react-router-dom"
import { toggleRoommate } from "../../services/post.service"

export const FindUsers = ({postId}) => {
  const [findNameValue, setFindNameValue] = useState()
  const [res, setRes] = useState()
  const [resToggle, setResToggle] = useState();
  // const [added, setAdded] = useState()
  const [currentUser, setCurrentUser] = useState()

  const handleSubmit = async (e) => {
    let resUserByName = await getUserByName(findNameValue)
    setRes(resUserByName)
    e.target.value = ""
  }

  const addRoommate = async (userId) => {
    setResToggle(await toggleRoommate(postId, userId))
    isAdded(userId)
  }

  const isAdded = (userId) => {
    // console.log(resToggle?.data?.dataUpdate?.roommates)
    if (resToggle?.data?.dataUpdate?.roommates?.includes(userId)) {
      // setAdded(true)
      return true
    } else {
      // setAdded(false)
      return false
    }
  }

  // useEffect(() => { //? esto se hace para que el botón se renderize como add o unadd según ya esté o no en el post
  //   if (res?.status == 200) {
  //     isAdded(currentUser?._id)
  //   }
  // }, [currentUser])

  return (
    <div id="userFinderPage">
      <div id = "userFinderContainer">
        <input  id = "userFinderInput" placeholder = "enter a user's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmit(e)}>🔎</button>
      </div>
      <div id="padreSection">
        {res && res?.data?.map((user) => {
          // setCurrentUser(user) //? aquí seteamos el current user para acceder a su id. nos da el error de too many rerenders
          return (
            <div className="findUserMapResult" key = {user._id} >
              <section className="findUserMapSection">
                <img src={user.image} alt={user.name} className="userFinderImage"/>
                <h2 className="userFinderName">{user.name}</h2>
              </section>
              <section>
                <button className="addRoommateButton" onClick={() => addRoommate(user._id)}>{isAdded(user._id) ? "Unadd" : "Add"}</button>
              </section>
            </div>
          )
        })}
      </div>
    </div>
  )
}
