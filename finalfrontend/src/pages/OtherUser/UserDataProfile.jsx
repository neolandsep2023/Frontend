import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserByIdP } from '../../services/user.service';
import { MiniPostProfile, MiniPostProfileContainerElement } from '../../components';
import { DataProfileElement } from '../Profile/DataProfile/DataProfile.element';
import { ProfileContainer } from '../../components/StyleComponents';
import { usePaginacion } from '../../hooks/usePaginacion';

export const UserDataProfile = ({ page }) => {


    const { MiniPaginacion, setGaleriaItems, dataPag } = usePaginacion(2)
    const [data, setData] = useState(null);
    const [res, setRes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
  
    const fetchData = async () =>{
      setIsLoaded(false)
      setRes( await getUserByIdP(id))
      console.log(res?.data)
      setIsLoaded(true)
    }
  
  useEffect(() => {
    fetchData()
    
  }, [])


useEffect(() => {

    if (res?.status == 200){
        console.log(res)
    page == "posted" && setGaleriaItems(res?.data?.myPosts)
console.log(dataPag)
    }

}, [res])







const renderSection = () =>{
    switch (page) {
        case "posted":
            
           return(
            <>
            <ProfileContainer heightTablet={"58vh"} height={"77vh"} >
                <MiniPaginacion/>
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
                          price={post.price}></MiniPostProfile>
                    
                    </>
                ))   }
                </MiniPostProfileContainerElement>
                <div className="line"></div>
                <MiniPostProfileContainerElement>
                {dataPag && dataPag.map((post)=>(
                    <>
                   
                    <MiniPostProfile key={post._id}
                          id={post._id}
                          title={post.title}
                          text={post.text}
                          image={post.image}
                          province={post.province}
                          price={post.price}></MiniPostProfile>
                    
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
                <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
                <h1>reviews</h1>
                </ProfileContainer>
                </>
               
               )

            case "bookmarks":
                return(
                    <>
                    <ProfileContainer heightTablet={"58vh"} height={"77vh"}>
                    <h1>bookmarks</h1>
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
