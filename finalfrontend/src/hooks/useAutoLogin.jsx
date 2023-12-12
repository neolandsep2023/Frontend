import { Navigate } from "react-router-dom";
import { autoLoginUser } from "../services/user.service";
import { useAuth } from "../context/authContext";

export const useAutoLogin = async (allUser) => {
const {login} = useAuth();
  try {
    const customFormData = {
      email: allUser?.data?.user?.email,
      password: allUser?.data?.user?.password
    };



    const sentAutoLoginData = await autoLoginUser(customFormData);
    if (sentAutoLoginData?.status == 200) {
      const { name, email, image, isVerified, gender} = sentAutoLoginData.data.user;
        
      const customUser = {
        token: sentAutoLoginData.data.token,
        name,
        email,
        image,
        isVerified,
        _id: sentAutoLoginData.data.user._id,
        gender,
      
      };

      const userToJSONString = JSON.stringify(customUser)
      login(userToJSONString);
      return <Navigate to="/"/>
    } else {
        return <Navigate to="/login"/>
    }
} catch (error) {
    return (
        error.message
    )
}
}