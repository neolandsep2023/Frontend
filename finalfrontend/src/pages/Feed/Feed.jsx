import { useEffect, useState } from "react"
import { Loading, MiniPosts } from "../../components"
import { FeedStyle } from "./Feed.element"
import {  getAllPostByType, getAllPosts, getAllPostsPopulated, search } from "../../services/post.service"
import { usePaginacion } from "../../hooks/usePaginacion"
import { FlexDir, LabelAndInput, RadioInput, SearchButtonCustom, SearchInputCustom } from "../../components/StyleComponents"

export const Feed = () => {

const [res, setRes] = useState(null)
const [sendSearch, setSendSearch] = useState(false)
const [searchInput, setSearchInput] = useState(null)
const [resSearch, setResSearch] = useState([])
const [feed, setFeed] = useState('RoomSeeker')
const [send, setSend] = useState(false)
const [isLoading, setIsLoading] = useState(true)
 
const{ ComponentPaginacion, setGaleriaItems, dataPag } = usePaginacion(6)

const setGallery = async () =>{
setSend(true)
setRes( await getAllPostByType(feed))

setIsLoading(false)
setSend(false)
}

// ['RoomSeeker', 'RoommateSeeker']


const handleSearch = async () =>{
    setIsLoading(true)
    setSendSearch(true)
    // console.log(searchInput)
    setResSearch( await search(searchInput))
    // console.log(resSearch?.data?.resArr)
    setIsLoading(false)
}


useEffect(() => {
    if(sendSearch == true && resSearch?.status == 200){
        console.log(feed, resSearch?.data)
       
       feed ==  'RoomSeeker' ? setGaleriaItems(resSearch?.data?.resArrayRoommSeeker) : setGaleriaItems(resSearch?.data?.resArrayRoommateSeeker)
    }else{
    res?.status == 200 && setGaleriaItems(res?.data?.allPosts)
    // console.log(res?.data?.allPosts)
    }
  }, [res, resSearch]); 



  useEffect(() => {
    res?.status == 200 && setGaleriaItems(res?.data)
  }, [res, feed])
  

  useEffect(() => {
setGallery()
  }, [feed])
  



  return (
 <>
    { isLoading ? ( <Loading/ > ) : (
    
        

<>
<FlexDir direction={"column"} margin={"0"}>
<LabelAndInput alignItems={"center"} >
I'm looking for a
            <RadioInput minW="calc(100%/2.3)" >
              <input
                type="radio"
                name="postType"
                id="RoomSeeker"
                value="RoomSeeker"
                
              />
              <label htmlFor="RoomSeeker" onClick={() => setFeed('RoomSeeker')}>Room</label>
              <input
                type="radio"
                name="postType"
                id="RoommateSeeker"
                value="RoommateSeeker"

              />
              <label htmlFor="RoommateSeeker" onClick={() => setFeed('RoommateSeeker')}>Roommie</label>
            </RadioInput>
          </LabelAndInput>
    <FlexDir>
    <SearchInputCustom onChange = {(e) => setSearchInput(e.target.value)}/>
              <SearchButtonCustom onClick={handleSearch}>🔎</SearchButtonCustom>
              </FlexDir>



<FeedStyle>


              <ComponentPaginacion/>
{dataPag.map((item)=>(
    <MiniPosts type={item?.type} key={item?._id} id={item?._id} title={item?.title} text={item?.text} image={item?.image} location={item?.location} price={item?.price} author={item?.author}></MiniPosts>
))}

 
    </FeedStyle>
    </FlexDir>

    </>
  )}
  </>
  )
}
