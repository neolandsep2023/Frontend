import React, { useEffect, useState } from 'react'
import { getUserByIdP } from '../../../services/user.service';
import { useAuth } from '../../../context/authContext';

export const PostedPage = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  const fetchData = async () =>{
    setIsLoaded(false)
    const response = await getUserByIdP(user?._id);
    setData(response.data)
    setIsLoaded(true)
  }

useEffect(() => {
  fetchData()
  
}, [])




  return (
    <div>PostedPage</div>
  )
}
