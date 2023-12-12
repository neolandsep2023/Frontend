import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { updateUser } from "../../../services/user.service";
import { useErrorRegisterpt2 } from "../../../hooks/useErrorRegisterpt2";


export const Registerpt2 = () => {
  //! ---- estados


  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  //! ----- hooks

  const { setUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();


  const formSubmit = async (formData) => {
   
          setSend(true);
          setRes(await updateUser(formData));
          setSend(false);
        
    }
  

  useEffect(() => {
    useErrorRegisterpt2(res, setRes);
  }, [res]);











  return (
    <div>Registerpt2</div>
  )
}
