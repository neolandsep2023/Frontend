import { useEffect, useState } from "react";
import { getChatByID, getUserChats, newMessageChat } from "../../services/chats.service";
import { Loading } from "../../components";
import { useAuth } from "../../context/authContext";

import { useForm } from "react-hook-form";
import { ChatElement } from "./Chat.element";
import { ChatColumnElement } from "./ChatColumn.element";
import { ButtonPrimary, FlexAround, FlexDir, FlexEnd } from "../../components/StyleComponents";
import { ChatContainerElement } from "./ChatContainer.element";
import { ChatDetailElement } from "./ChatDetail.element";
import { MessageChatElement } from "./MessageChat.element";
import { FindUsers } from "../../components/FindUsers/FindUsers";
import { getUserByName } from "../../services/user.service";



export const Chat = () => {
//parte de chats activos
    //mappeo res usuario
    //cuando se manda un mensaje tambien hay que re-renderizar esta parte (refetch)
    //
  const { register, handleSubmit } = useForm();
  const { user } = useAuth()
  const [ isLoading, setIsLoading ] = useState(true)
  const [ res, setRes ] = useState({});
  const [ resMessage, setResMessage] = useState({})
  const [ activeChat, setActiveChat ] = useState("")
  const [ sentComment, setSentComment ] = useState(false)
  const [ textArea, setTextArea] = useState("");


  const [findNameValue, setFindNameValue] = useState()
  const [resSubmitNewChat, setResSubmitNewChat] = useState()
  const [resNewChat, setResNewChat] = useState();
  const [resCheck, setResCheck] = useState()

  const handleSubmitNewChat = async (e) => {
    let resUserByName = await getUserByName(findNameValue)
    setResSubmitNewChat(resUserByName)
    e.target.value = ""
  }

  console.log(resSubmitNewChat)

const formSubmit = async () =>{

    const customFormData ={
        otherUser: res._id,
        ...formData
    }

}

  
  
  const fetchres = async() => {
    const response = await getUserChats()
    setRes(response);

    setIsLoading(false)
  }


  const newMessage = async (formData) =>{
    console.log(formData)
    let customFormData = {
        textComment: formData.textComment,
        otherUser: activeChat?.userOne._id == user.id ? activeChat?.userTwo._id : activeChat?.userOne?._id
    }
    console.log(customFormData)

    const response = await newMessageChat(customFormData)
    if(response.status == 200){
        console.log("entroooooo", sentComment)
        setActiveChat("")
        setSentComment(!sentComment)
        setTextArea("");
        setActiveChat(response.data.chat)

    }
    
  }

  console.log(res?.data?.chats)

  useEffect(() => { 
    fetchres()
  }, [sentComment])


const getDateFunction = (date) => {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const totalDate = `${day}/${month + 1}`
  return totalDate
}

const actualDate = new Date()

console.log(getDateFunction(actualDate))

const getHourFunction = (date) => {
    const newDate = new Date(date)
    const hours = newDate.getHours()
    const minute = newDate.getMinutes()
    const totalTime = `${hours}:${minute}`
    return totalTime
  }



  return (

    <>

    <ChatElement>
    <ChatContainerElement variant={"multiple"} >
   

    {/* <input  id = "userFinderInput" placeholder = "enter a user's name" type="text" onChange={(e) => {setFindNameValue(e.target.value)}}/>
        <button type="submit" id = "findUsersButton" onClick={(e) => handleSubmitNewChat(e)}>🔎</button>

        {resSubmitNewChat && resSubmitNewChat?.data?.map((user) => {
            console.log(user)
          return (
            <div className="findUserMapResult" key = {user._id} >
              <section className="findUserMapSection" onClick={() => {""}}>
                <img src={user.image} alt={user.name} className="userFinderImage"/>
                <h2 className="userFinderName">{user.name}</h2>
              </section>
            </div>
          )
        })} */}



      <ChatColumnElement >
  
    {isLoading && <Loading/>}
    {!isLoading && (

        res && res?.data?.chats?.map((chat)=> ( 
            
            <>
            {console.log(chat)}
<div className="line"></div>

            <ChatDetailElement key={chat} variant={ activeChat?._id == chat?._id && "active"} onClick={(e) => {setActiveChat(chat)}}>
          
            <img alt="chat user logo" src={chat?.userOne._id == user?._id ? chat?.userTwo?.image : chat?.userOne?.image }/>
        
            <FlexDir direction={"column"} width={"75%"}>
                <FlexAround>
            <h1>{chat?.userOne?._id == user?._id ? chat?.userTwo?.username : chat?.userOne?.username}</h1> 
            {getDateFunction(actualDate) == getDateFunction(chat.comments[chat.comments.length - 1].createdAt) ? <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p> : <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p> }
            {/* <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p>    */}
            {/* <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p> */}
            </FlexAround>
            <FlexAround>
            <p> {chat?.comments[chat?.comments?.length - 1]?.textComment} </p>
            </FlexAround>
            </FlexDir>
            

            
            
          
        


            </ChatDetailElement>
           
            </>
         ))
     )}
<div className="line"></div>
    </ChatColumnElement>

    </ChatContainerElement>

    
    <ChatContainerElement variant={"individual"} >

     {activeChat != "" && (
        <>
        <FlexDir justifyContent={"flex-start"} width={"90%"} margin={"12px 0 0 0"}>
       <img alt="user logo " src={activeChat?.userOne?.image}/>
      
        <h1>{activeChat.userOne.name}</h1>
        
         </FlexDir>
         <div className="line"></div>
        <ChatColumnElement display={"grid"} >
        {activeChat.comments.map((comment) => (
            <>
            <MessageChatElement variant={comment?.creator?._id == user._id ? "own" : "otherUser"}>
                {console.log(comment?.creator?._id, user._id)}
            {/* <h4 key={comment._id}>{comment?.creator?.username}</h4> */}

            <p>{comment?.textComment}</p>
            {getDateFunction(actualDate) == getDateFunction(comment.createdAt) ? <p>{getHourFunction(comment.createdAt)}</p> : <p>{getDateFunction(comment.createdAt)}</p>}
            
            </MessageChatElement>
            </>
        ))}
</ChatColumnElement>
<div className="line"></div>
<FlexDir width={"100%"} margin="0">

<form  className="inputChat" onSubmit={handleSubmit(newMessage)}>
<FlexDir width={"100%"}>
    <textarea  className="textArea" type="text" name="textComment" defaultValue={textArea} id="textArea" {...register("textComment")}   />
  <ButtonPrimary variant="normal" type="submit">
     Send
  </ButtonPrimary >
  </FlexDir>
  </form>
  </FlexDir>
        </>
    )}

</ChatContainerElement>

</ChatElement>
     </>

  )
}


