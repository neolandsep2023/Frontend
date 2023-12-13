import React, { useEffect, useState } from 'react'
import { NavFav } from '../../components'
import { useAuth } from '../../context/authContext';
import { getUserByIdP } from '../../services/user.service';
import { FlexDir } from '../../components/StyleComponents';

export const FavGallery = () => {
  const { user } = useAuth();
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [res, setRes] = useState(null);
  const [mainFav,setMainFav]=useState("savedRoom")
  const [datos,setDatos]=useState([])

  const fetchData = async () => {
    setGalleryLoading(true);
    setRes(await getUserByIdP (user._id));
    setGalleryLoading(false);
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    res?.status == 200 && setDatos(res?.data[mainFav]);
  }, [res]);
  useEffect(() => {
    setDatos(res?.data[mainFav]);
    
  }, [mainFav]);

  return (<FlexDir direction={"column"}>  
  <NavFav  setFav={setMainFav}/>
     { datos&& datos?.map((item)=>(
      //!!Meter Componente para favoritos o lo que sea
      <FlexDir key={item._id} direction={"column"}> 
        <h2 >{item?.title}</h2>
        <img style={{ width: '500px' }} src={item.image}/>
        </FlexDir>

     ))}

  </FlexDir>

  )
}
