import { useEffect, useState } from "react";
import { getChatByID, getUserChats, newMessageChat } from "../../services/chats.service";
import { Loading } from "../../components";
import { useAuth } from "../../context/authContext";

import { useForm } from "react-hook-form";
import { ChatElement } from "./Chat.element";
import { ChatColumnElement } from "./ChatColumn.element";



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


    console.log("HOOLAAAAAAAAAAAAAAAAAAa", response)
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
  const totalDate = `${day}/${month + 1}/${year}`
  return totalDate
}


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

      <ChatColumnElement variant={"multiple"}>

    {isLoading && <Loading/>}
    {!isLoading && (
        res && res?.data?.chats?.map((chat)=> ( 
            <>
            
            <div key={chat._id} onClick={(e) => {setActiveChat(chat)}}>
            <h1>{chat?.userOne._id == user.id ? chat?.userTwo.username : chat?.userOne?.username}</h1> 
            <p> {chat?.comments[chat.comments.length - 1]?.textComment} </p>
            <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p>   
            <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p>
            </div>
            </>
         ))
     )}
    
    </ChatColumnElement>

    


     {activeChat != "" && (
        <>
        <ChatColumnElement variant={"individual"}>
        <h1>{activeChat.userOne.name}</h1>
        {activeChat.comments.map((comment) => (
            <>
            <h4 key={comment._id}>{comment?.creator?.username}</h4>
{console.log(comment?.creator?.username)}
            <p>{comment?.textComment}</p>
            <p>{getHourFunction(comment.createdAt)}</p>
            </>
        ))}

<form onSubmit={handleSubmit(newMessage)}>
    <textarea  type="text" name="textComment" defaultValue={textArea} id="textArea" {...register("textComment")}   />
  <button type="submit">
     Send
  </button>
  </form>
  </ChatColumnElement>
        </>
    )}



</ChatElement>
     </>

  )
}


