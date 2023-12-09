import './Registerpt1.css'


import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react";
import { registerUser } from "../../../services/user.service";
import { UploadFile } from "../../../components/index";
import { useErrorRegister } from "../../../hooks/useErrorRegister";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



export const Registerpt1 = () => {

//!estados
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [okRegister, setRegisterOk] = useState(false);


//!hooks
    const { register, handleSubmit } = useForm();
    const { bridgeData, setIsDeletedUser } = useAuth();


    const formSubmit = async (formData) => {
        const inputFile = document.getElementById("file-upload").files;
    
        if (inputFile.length != 0) {
          //- !=0 -- hay una imagen en el form
          const customFormData = {
            ...formData,
            image: inputFile[0],
          };
    
          setSend(true);
          setRes(await registerUser(customFormData));
          setSend(false);
        } else {
          // no hay imagen 
          const customFormData = {
            ...formData,
          };
    
          setSend(true);
          setRes(await registerUser(customFormData));
          setSend(false);
        }
      };


      useEffect(() => {
        useErrorRegister(res, setRegisterOk, setRes);
        //si es un 200 llama a la funcion puente
        if (res?.status == 200) bridgeData("ALLUSER");
      }, [res]);
      //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas
    
    useEffect(() => {
      setIsDeletedUser(()=> false);
    }, [])
    
    
      if (okRegister) {
        //si todo esta ok navega a la pagina del codigo
        return <Navigate to="/verifyCode" />;
      }






      return (
        <div className="allForm register">
          <div className="formMain">
            <div className="formTitle">
            <h1 className="titleFormH1">SIGN UP</h1>
            <p>Champion Within, Victories Begin</p>
            </div>
            <form className="form" onSubmit={handleSubmit(formSubmit)}>
              <div className="inputPlaceHolderForm">
    
              <label htmlFor="name" className="customPlaceholder">
                  Username
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="false"
                  {...register("name", { required: true })}
                />
               
    
      
              <label htmlFor="email" className="customPlaceholder">
                  E-mail
                </label>
                <input
                  className="inputForm"
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="false"
                  {...register("email", { required: true })}
                />
    
              <label htmlFor="password" className="customPlaceholder">
                  Password
                </label>
                <input
                  className="inputForm"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="false"
                  {...register("password", { required: true })}
                />
                
      
              </div>
    
               <p className="customPlaceholder">Gender</p>
                <div className="formGroup">
                <div className="gender">
                  <input
                    type="radio"
                    name="gender"
                    id="woman"
                    value="woman"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="woman" className="labelRadio">
                    WOMAN
                  </label>
    
                  <input
                    type="radio"
                    name="gender"
                    id="man"
                    value="man"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="man" className="labelRadio">
                    MAN
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    {...register("gender", {required: true})}
                  />
                  <label htmlFor="other" className="labelRadio">
                    OTHER
                  </label>
                </div>
                </div>
                
              
              <UploadFile />
              <div className="btnContainer">
              <Button size="large" style= {{backgroundColor: 'var(--color-boton-motogp)', margin: '1.5rem'}}  type="submit"
                  disabled={send} variant="contained" endIcon={<SendIcon />}>
     {send ? "Loading..." : "SING UP"}
    </Button>
    
                <div className="loginForm">
            <p className="loginParagraph">
              Already a member? <Link to="/login">Login Here</Link>
            </p>
          </div>
              </div>
    
              <p className="bottomText">
                <small className="terms">
                  By clicking the Sign Up button, you agree to our{" "} <br />
                  <Link to="/terms" className="anchorCustom">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="anchorCustom">
                    Privacy Policy
                  </Link>
                  .
                </small>
              </p>
            </form>
          </div>
        </div>
      );
}
