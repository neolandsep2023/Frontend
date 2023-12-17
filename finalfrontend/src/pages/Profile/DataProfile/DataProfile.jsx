import React, { useEffect, useState } from 'react'
import { getUserByIdP } from '../../../services/user.service';
import { useAuth } from '../../../context/authContext';
import { MiniPostProfile, MiniPostProfileContainerElement, MiniPosts } from '../../../components';
import { DataProfileElement } from './DataProfile.element';
import { FlexDir, ProfileContainer } from '../../../components/StyleComponents';
import { usePaginacion } from '../../../hooks/usePaginacion';

export const DataProfile = ({ page }) => {


    const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion(2)
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
  
    const fetchData = async () =>{
      setIsLoaded(false)
      setRes( await getUserByIdP(user?._id))
      console.log(res?.data)
      setIsLoaded(true)
    }
  
  useEffect(() => {
    fetchData()
    
  }, [])


useEffect(() => {

    if (res?.status == 200){
        console.log(res)
    page == "posted" ? setGaleriaItems(res?.data?.myPosts) :
    page == "rooms" ? setGaleriaItems(res?.data?.myRooms) :
    page == "reviews" ? setGaleriaItems(res?.data?.receivedComments) :
    page == "bookmarks" && setGaleriaItems(res?.data?.likedPosts)
console.log(dataPag)
    }

}, [res, page])







const renderSection = () =>{
    switch (page) {
        case "posted":
            
           return(
            <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} >
               <FlexDir>
                <h1>Posts you have made</h1>
                <MiniPaginacion/>
                </FlexDir>
                <div className="line"></div>
            {/* <DataProfileElement> */}
             <MiniPostProfileContainerElement>
                {dataPag && dataPag.map((post)=>(
                    <>
                   
                    <MiniPostProfile key={post._id}
                          id={post._id}
                          title={post.title}
                          text={post.text}
                          image={post.image}
                          province={post.province}
                          price={post.price}
                          type={post.type}></MiniPostProfile>
                    
                    </>
                ))   }
                </MiniPostProfileContainerElement>
                
             
                {/* </DataProfileElement> */}
                </ProfileContainer>
            </>
           )

           case "rooms":
            
           return(
            <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} >
               <FlexDir>
                <h1>Rooms you have posted</h1>
                <MiniPaginacion/>
                </FlexDir>
                <div className="line"></div>
            {/* <DataProfileElement> */}
             <MiniPostProfileContainerElement>
                {dataPag && dataPag.map((post)=>(
                    <>
                   
                    <MiniPostProfile key={post._id}
                          id={post._id}
                          title={post.title}
                          text={post.text}
                          image={post.image}
                          province={post.province}
                          price={post.price}
                          type={post.type}></MiniPostProfile>
                    
                    </>
                ))   }
                </MiniPostProfileContainerElement>
                
             
                {/* </DataProfileElement> */}
                </ProfileContainer>
            </>
           )

            case "reviews":
            
            return(
                <>
                <ProfileContainer heightTablet={"58vh"} height={"77vh"} >
                   <FlexDir>
                    <h1>Reviews of your profile</h1>
                    <MiniPaginacion/>
                    </FlexDir>
                    <div className="line"></div>
                {/* <DataProfileElement> */}
                 <MiniPostProfileContainerElement>
                    {dataPag && dataPag.map((post)=>(
                        <>
                       
                        <MiniPostProfile key={post._id}
                              id={post._id}
                              title={post.title}
                              text={post.text}
                              image={post.image}
                              province={post.province}
                              price={post.price}
                              type={post.type}></MiniPostProfile>
                        
                        </>
                    ))   }
                    </MiniPostProfileContainerElement>
                    
                 
                    {/* </DataProfileElement> */}
                    </ProfileContainer>
                </>
               )

            case "bookmarks":
                return(
                    <>
                    <ProfileContainer heightTablet={"58vh"} height={"77vh"} >
                       <FlexDir>
                        <h1>Bookmarks</h1>
                        <MiniPaginacion/>
                        </FlexDir>
                        <div className="line"></div>
                    {/* <DataProfileElement> */}
                     <MiniPostProfileContainerElement>
                        {dataPag && dataPag.map((post)=>(
                            <>
                           
                            <MiniPostProfile key={post._id}
                                  id={post._id}
                                  title={post.title}
                                  text={post.text}
                                  image={post.image}
                                  province={post.province}
                                  price={post.price}
                                  type={post.type}></MiniPostProfile>
                            
                            </>
                        ))   }
                        </MiniPostProfileContainerElement>
                        
                     
                        {/* </DataProfileElement> */}
                        </ProfileContainer>
                    </>
                )
            
    
        default:
            return(
                <h1>default</h1>
               )
            
    }
}

  return (
    <div>{dataPag && renderSection()}</div>
  )
}
