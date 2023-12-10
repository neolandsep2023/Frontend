import './Registerpt1.css'


import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react";
import { registerGoogle, registerUser, registerUserWithGoogle } from "../../../services/user.service";
import { UploadFile } from "../../../components/index";
import { useErrorRegister } from "../../../hooks/useErrorRegister";
import { GoogleLogin } from '@react-oauth/google'
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"


import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



export const Registerpt1 = () => {

//!estados
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [okRegister, setRegisterOk] = useState(false);
    const [googleUser, setGoogleUser] = useState([])
    // const [googleProfile, setGoogleProfile] = useState ([])
    const [resGoogle, setResGoogle] = useState({})
    const [googlePassword, setGooglePassword] = useState("")
    const [username, setUsername] = useState("")
  


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
      const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => setGoogleUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });


    const formGoogle = async () =>{
      if (resGoogle?.status == 200){
console.log(resGoogle)
       const customFormData = {
          isVerified: resGoogle.data.verified_email,
          email: resGoogle.data.email,
          name: resGoogle?.data?.given_name,
          lastName: resGoogle?.data?.family_name ? resGoogle?.data?.family_name : null ,
          image: resGoogle.data.picture,
          username: resGoogle.data.email.split('@')[0],
          password: googlePassword,
        }
        //he tenido que meterle


        setSend(true);
        console.log(customFormData)
        setRes(await registerUserWithGoogle(customFormData));
        console.log(res)
        setSend(false);

      }
    }



const handleGoogleRegister = async () =>{

//         const credentialDecoded = jwtDecode(googleUser.credential)
// console.log(credentialDecoded)

  setSend(true)
  setResGoogle( await registerGoogle(googleUser.access_token))
  setSend(false)

}



      useEffect(() => {
        console.log('entro aqui', res)
        useErrorRegister(res, setRegisterOk, setRes);
        //si es un 200 llama a la funcion puente
        if (res?.status == 200) bridgeData("ALLUSER");
      }, [res]);
      //este useEffect nos da un console para ver que esta pasando.Lo dejo comentado para futuras pruebas
    
    useEffect(() => {
      setIsDeletedUser(()=> false);
    }, [])
    

    useEffect(() => {
      formGoogle()
    }, [resGoogle])
    
    

    useEffect(() => {
  //  console.log('hola use effect', googleUser)
      if (googleUser.length != 0){
        console.log(googleUser, 'ENTROOOOOOOOOO')
        handleGoogleRegister()
      }

    }, [googleUser])
    


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
            {/* <GoogleLogin onClick={() => handleGoogleLogin()} /> */}
          <br />
          <p>
            We require a new password so your Google account always stays safe. It is better if you provide a password you have not used anywhere else.
          </p>
          <input
            type="password"
            id="googlePassword"
            name="googlePassword"
            placeholder="Password"
            onChange={(e) => setGooglePassword(e.target.value)}
          /> 
          <br />
            <button onClick={() => handleGoogleLogin()} disabled={googlePassword.length<8}>Sign in with Google 🚀 </button>
            {/**cuando la contrasena es menor que el minimo requerido no te deja hacer login con google */}
            {/* {console.log(googleUser.credential)} EL TOKEN !!!! */}
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
              <Button size="large" style= {{color: 'black', margin: '1.5rem'}}  type="submit"
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
