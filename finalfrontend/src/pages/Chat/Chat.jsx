import { useEffect, useState } from "react";
import { getUserChats, newMessageChat } from "../../services/chats.service";
import { Loading } from "../../components";
import { useAuth } from "../../context/authContext";
import "./Chat.css"
import { useForm } from "react-hook-form";


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBTypography,
    MDBTextArea,
    MDBCardHeader,
  } from "mdb-react-ui-kit";
 

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
    console.log(response)
    if(response.status == 200){
        setSentComment(!sentComment)
    }
    
  }

  console.log(res?.data?.chats)

  useEffect(() => { 
    fetchres()
  }, [sentComment])


  //   const isUser = res?.data?.chats[0]?.comments[0]?.creator == user._id ? true : false


//parte de chat abierto
    //mappeo del chat seleccionado, de sus comentarios.
        //se re-renderiza cuando mandas un mensaje, es decir, se hace otro fetch


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

  /**
            <h1>{chat?.userOne._id == user.id ? chat?.userTwo.name : chat?.userOne?.name}</h1> // nati mario
 * 
 */


  return (

    // <>
    // {isLoading && <Loading/>}
    // {!isLoading && (
    //     res && res?.data?.chats?.map((chat)=> ( )
    //         <>
    //         <div key={chat._id} onClick={(e) => {setActiveChat(chat)}}>
    //         <h1>{chat?.userOne._id == user.id ? chat?.userTwo.username : chat?.userOne?.username}</h1> 
    //         <p> {chat?.comments[chat.comments.length - 1]?.textComment} </p>
    //         <p> {getDateFunction(chat.comments[chat.comments.length - 1].createdAt)} </p>   
    //         <p>{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p>
    //         </div>


    //         </>
            
    
    //     ))
    // )}
    
    // {activeChat != "" && ()}
    //     <>
    //     <h1>{activeChat.userOne.name}</h1>
    //     {activeChat.comments.map((comment) => ()}
    //         <>
    //         <h4 key={comment._id}>{comment?.creator?.username}</h4>

    //         <p>{comment?.textComment}</p>
    //         <p>{getHourFunction(comment.createdAt)}</p>
    //         </>
    //     ))}
    //     </>
    // )}


    // </>
   //res?.data?.chats?.map((chat)=> (
  

    <MDBContainer fluid className="py-5">
      <MDBRow>
         <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center ">
            Active <span style={{color: 'green'}}> Chats </span>
          </h5>
       {!isLoading && res?.data?.chats?.map((chat)=> (
            
                      <MDBCard className="mask-custom" background='light' id="card" onClick={(e) => {setActiveChat(chat)}}>
                        <MDBCardBody>
                          <MDBTypography listUnStyled className="mb-0">
                            <li
                              className="p-2 border-bottom"
                              style={{
                                borderBottom: "1px solid rgba(255,255,255,.3) !important",
                              }}
                            >
                            
                                <div className="d-flex flex-row">
                                  <img
                                    src={chat?.userOne._id == user.id ? chat?.userTwo.image : chat?.userOne?.image}
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                    style={{objectFit: "cover", width:"5vw", height:"5vw"}}
                                  />
                                  <div className="pt-1">
                                    <p className="">{chat?.userOne._id == user.id ? chat?.userTwo.username : chat?.userOne?.username}</p>
                                    <p className="small ">
                                    {chat?.comments[chat.comments.length - 1]?.textComment}
                                    </p>
                                  </div>
                                </div>
                                <div className="pt-1">
                                  <p className="small mb-1 ">{getHourFunction(chat.comments[chat.comments.length - 1].createdAt)}</p>
                                  {/* <span className="badge bg-danger float-end">1</span> */}
                                </div>
                            
                            </li>
                          </MDBTypography>
                        </MDBCardBody>
                      </MDBCard>
                     )
         
        )}
                     </MDBCol>
        
 
        <MDBCol md="6" lg="7" xl="8">
   {!isLoading && 
   
   
        activeChat != "" &&
            activeChat.comments.map((comment) => ( 
            <MDBTypography listUnStyled>
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src={comment?.creator?.image}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                    width="60"
                  />
                  <MDBCard className="mask-custom">
                    <MDBCardHeader
                      className="d-flex justify-content-between p-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
                    >
                      <p className="fw-bold mb-0">{comment?.creator?.username}</p>
                      <p className=" small mb-0">
                        <MDBIcon far icon="clock" /> {getHourFunction(comment.createdAt)}
                      </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <p className="mb-0">
                      {comment?.textComment}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </li>
    
    
              </MDBTypography>))}
    
    { activeChat != "" && <MDBTypography listUnStyled>
    <form onSubmit={handleSubmit(newMessage)}>
<li className="mb-3">
    <MDBTextArea type="text" id="textAreaExample" rows={4} name="textComment" {...register("textComment")} />
  </li>
  <MDBBtn color="light" size="lg" rounded className="float-end" type="submit">
    Send
  </MDBBtn>
  </form>
</MDBTypography> }
              
        
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
// </>



  )
}


