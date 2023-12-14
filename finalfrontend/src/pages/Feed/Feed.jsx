import { useEffect, useState } from "react"
import { Loading, MiniPosts } from "../../components"
import { FeedStyle } from "./Feed.element"
import { getAllPosts, getAllPostsPopulated } from "../../services/post.service"
import { usePaginacion } from "../../hooks/usePaginacion"

export const Feed = () => {

const [res, setRes] = useState(null)
const [posts, setPosts] = useState([])
const [send, setSend] = useState(false)
const [isLoading, setIsLoading] = useState(true)
 
const{ ComponentPaginacion, setGaleriaItems, dataPag } = usePaginacion(6)

const setGallery = async () =>{
setSend(true)
setRes( await getAllPostsPopulated())
setSend(false)
setIsLoading(false)
}


useEffect(() => {
    res?.status == 200 && setGaleriaItems(res?.data?.allPosts)
    console.log(res?.data?.allPosts)
  }, [res]); 

  useEffect(() => {
setGallery()
  }, [])
  



  return (
 <>
    { isLoading ? ( <Loading/ > ) : (
    <FeedStyle>
        
<ComponentPaginacion/>


{dataPag.map((item)=>(
    <MiniPosts key={item?._id} id={item?._id} title={item?.title} text={item?.text} image={item?.image} location={item?.location} price={item?.price} author={item?.author}></MiniPosts>
))}

 
    </FeedStyle>
  )}
  </>
  )
}
