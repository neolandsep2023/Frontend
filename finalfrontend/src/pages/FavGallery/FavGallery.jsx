import React, { useEffect, useState } from 'react'
import { NavFav } from '../../components'
import { useAuth } from '../../context/authContext';
import { getUserById } from '../../services/user.service';

export const FavGallery = () => {
  const { user } = useAuth();
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [res, setRes] = useState(null);
  const [mainFav,setMainFav]=useState("savedRoom")
  const [datos,setDatos]=useState([])

  const fetchData = async () => {
    setGalleryLoading(true);
    setRes(await getUserById(user._id));
    setGalleryLoading(false);
    
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    res?.status == 200 && setDatos(res?.data[mainFav]);
  }, [res]);
console.log(datos)
console.log(mainFav)
  return (<>
      <div>FavGallery</div>
  <NavFav  setFav={setMainFav}/>
  </>

  )
}
