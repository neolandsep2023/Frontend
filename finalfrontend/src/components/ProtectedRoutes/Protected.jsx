import { Navigate } from "react-router-dom";
// import useAuth 

export const Protected = ({children}) => {
    const {user, isDeletedUser} = useAuth();
    if(isDeletedUser){
        return <Navigate to="/register"/>
    }
    if(user == null || user?.check == false) {
        return <Navigate to="/login"/>
    }
  return children;
}
