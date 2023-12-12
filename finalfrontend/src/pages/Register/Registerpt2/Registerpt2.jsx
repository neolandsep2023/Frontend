import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { updateUser } from "../../../services/user.service";
import { useErrorRegisterpt2 } from "../../../hooks/useErrorRegisterpt2";
import { FlexDir, Form, H1Form } from "../../../components/StyleComponents";


export const Registerpt2 = () => {


  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);


  const { setUser, user, logout } = useAuth();
  const { handleSubmit } = useForm();


  const formSubmit = async (formData) => {
   
          setSend(true);
          setRes(await updateUser(formData));
          setSend(false);
        
    }
  

  useEffect(() => {
    useErrorRegisterpt2(res, setRes);
  }, [res]);











  return (
    <>
    <FlexDir>
    <Form
          width={"40vw"}
          height={"80vh"}
          onSubmit={handleSubmit(formSubmit)}
        >
          <FlexDir direction={"column"}>
          <H1Form margin={"8px 0 0 0"}>Finish Signing up</H1Form>


            <FlexDir>
              <FlexDir direction={"column"}>COLUMNA 1</FlexDir>
              <FlexDir direction={"column"}>COLUMNA 2</FlexDir>

            </FlexDir>



            <div>INPUT DESCRIPTTION</div>

          <div>BOTONES</div>
          </FlexDir>




        </Form>


    </FlexDir>
    
    
    </>

  )
}
