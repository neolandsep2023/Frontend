import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import {
  registerGoogle,
  registerUser,
  registerUserWithGoogle,
} from "../../../services/user.service";
import { UploadFile } from "../../../components/index";
import { useErrorRegister } from "../../../hooks/useErrorRegister";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {
  Anchor,
  ButtonPrimary,
  FlexDir,
  Form,
  H1Custom,
  H1Form,
  LabelAndInput,
  RadioInput,
  Small,
} from "../../../components/StyleComponents";
import { useAutoLogin } from "../../../hooks/useAutoLogin";

export const Registerpt1 = () => {
  //!estados
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okRegister, setRegisterOk] = useState(false);
  const [okRegisterGoogle, setRegisterGoogleOK] = useState(false)
  const [googleUser, setGoogleUser] = useState([]);
  // const [googleProfile, setGoogleProfile] = useState ([])
  const [resGoogle, setResGoogle] = useState({});

  //!hooks
  const { register, handleSubmit } = useForm();
  const { bridgeData, setIsDeletedUser, allUser } = useAuth();

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile?.length != 0) {
      //- !=0 -- hay una imagen en el form
      const customFormData = {
        ...formData,
        name: "", 
        lastName: "",
        description: "",
        birthYear: 2000,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      // no hay imagen
      const customFormData = {
        ...formData,
        name: "", 
        lastName: "",
        description: "",
        birthYear: 2000,
      };

      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };


  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const formGoogle = async () => {

      console.log(resGoogle);
      const customFormData = {
        isVerified: resGoogle.data.verified_email,
        email: resGoogle.data.email,
        name: resGoogle?.data?.given_name,
        lastName: resGoogle?.data?.family_name
          ? resGoogle?.data?.family_name
          : null,
        image: resGoogle.data.picture,
        username: resGoogle.data.email.split("@")[0],
        password: `${resGoogle.data.email}1A`,
      }
      //he tenido que meterle

      setSend(true);
      setRes(await registerUserWithGoogle(customFormData));
      console.log(res);
      setSend(false);
    
  };

  const handleGoogleRegister = async () => {
    //         const credentialDecoded = jwtDecode(googleUser.credential)
    // console.log(credentialDecoded)

    setSend(true);
    setResGoogle(await registerGoogle(googleUser.access_token));
    setSend(false);
  };


  useEffect(() => {
    resGoogle?.status == 200 && formGoogle();
  }, [resGoogle]);

  useEffect(() => {
    //  console.log('hola use effect', googleUser)
    if (googleUser.length != 0) {
      console.log(googleUser, "ENTROOOOOOOOOO");
      handleGoogleRegister();
    }
  }, [googleUser]);



  useEffect(() => {
    console.log("entro aqui", res);
    useErrorRegister(res, setRegisterOk, setRegisterGoogleOK, setRes);
    //si es un 200 llama a la funcion puente
    if (res?.status == 200) bridgeData("ALLUSER");
  }, [res]);



  useEffect(() => {
    setIsDeletedUser(() => false);
  }, []);

  if (okRegisterGoogle) {
    if (!localStorage.getItem("user")) {
      console.log(allUser)
      useAutoLogin(allUser);
     } else {
       return <Navigate to="/register/complete" />;
   }
    } else if (okRegister) {
    //si todo esta ok navega a la pagina del codigo
    return <Navigate to="/verifyCode" />;
  }




  return (
    <>
      <FlexDir>
        <Form
          width={"40vw"}
          height={"80vh"}
          onSubmit={handleSubmit(formSubmit)}
        >
          <FlexDir direction={"column"} gap={"2px"}>
            <H1Form margin={"8px 0 0 0"}>SIGN UP</H1Form>

            <FlexDir margin={"0 0 8px 0"}></FlexDir>
            {/* <GoogleLogin onClick={() => handleGoogleLogin()} /> */}
            <button onClick={() => handleGoogleLogin()} scope="profile email">
              Sign in with Google 🚀{" "}
            </button>
            <LabelAndInput>
    
              Username
              <input
                type="text"
                name="username"
                autoComplete="false"
                {...register("username", { required: true })}
              />
            </LabelAndInput>

            <LabelAndInput>
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="false"
                {...register("email", { required: true })}
              />
            </LabelAndInput>

            <LabelAndInput>
              Password
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
            </LabelAndInput>

            <LabelAndInput alignItems={"center"}>
              <RadioInput>
                <input
                  type="radio"
                  name="gender"
                  id="woman"
                  value="female"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="woman" className="labelRadio">
                  WOMAN
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="man"
                  value="male"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="man" className="labelRadio">
                  MAN
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="other" className="labelRadio">
                  OTHER
                </label>
              </RadioInput>
            </LabelAndInput>

            <UploadFile />

            <ButtonPrimary
              width={"70%"}
              type="submit"
              disabled={send}
              variant={send ? "loading" : "normal"}
            >
              <div type="submit"></div>
              {send ? "Loading..." : "SIGN UP"}
            </ButtonPrimary>
            <FlexDir margin={"0"}>
              Already a member?
              <Link to="/login">
                <Anchor>Login Here</Anchor>
              </Link>
            </FlexDir>

            <FlexDir>
              <Small>
                By clicking the Sign Up button, you agree to our <br />
                <Link to="/terms" className="anchorCustom">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="anchorCustom">
                  Privacy Policy
                </Link>
                .
              </Small>
            </FlexDir>
          </FlexDir>
        </Form>
      </FlexDir>
    </>

    //     <div className="allForm register">
    //       <div className="formMain">
    //         <div className="formTitle">
    //         <h1 className="titleFormH1">SIGN UP</h1>

    //         {/* <GoogleLogin onClick={() => handleGoogleLogin()} /> */}

    //       <br />
    //         <button onClick={() => handleGoogleLogin()} >Sign in with Google 🚀 </button>
    //         {/**cuando la contrasena es menor que el minimo requerido no te deja hacer login con google */}
    //         {/* {console.log(googleUser.credential)} EL TOKEN !!!! */}
    //         </div>
    //         <form className="form" onSubmit={handleSubmit(formSubmit)}>
    //           <div className="inputPlaceHolderForm">

    //           <label htmlFor="name" className="customPlaceholder">
    //               Username
    //             </label>
    //             <input
    //               className="inputForm"
    //               type="text"
    //               id="name"
    //               name="name"
    //               autoComplete="false"
    //               {...register("name", { required: true })}
    //             />

    //           <label htmlFor="email" className="customPlaceholder">
    //               E-mail
    //             </label>
    //             <input
    //               className="inputForm"
    //               type="email"
    //               id="email"
    //               name="email"
    //               autoComplete="false"
    //               {...register("email", { required: true })}
    //             />

    //           <label htmlFor="password" className="customPlaceholder">
    //               Password
    //             </label>
    //             <input
    //               className="inputForm"
    //               type="password"
    //               id="password"
    //               name="password"
    //               autoComplete="false"
    //               {...register("password", { required: true })}
    //             />

    //           </div>

    //            <p className="customPlaceholder">Gender</p>
    //             <div className="formGroup">
    //             <div className="gender">
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 id="woman"
    //                 value="woman"
    //                 {...register("gender", {required: true})}
    //               />
    //               <label htmlFor="woman" className="labelRadio">
    //                 WOMAN
    //               </label>

    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 id="man"
    //                 value="man"
    //                 {...register("gender", {required: true})}
    //               />
    //               <label htmlFor="man" className="labelRadio">
    //                 MAN
    //               </label>
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 id="other"
    //                 value="other"
    //                 {...register("gender", {required: true})}
    //               />
    //               <label htmlFor="other" className="labelRadio">
    //                 OTHER
    //               </label>
    //             </div>
    //             </div>

    //           <UploadFile />
    //           <div className="btnContainer">
    //           <button  type="submit"
    //               disabled={send} variant="contained">
    //  {send ? "Loading..." : "SING UP"}
    // </button>

    //             <div className="loginForm">
    //         <p className="loginParagraph">
    //           Already a member? <Link to="/login">Login Here</Link>
    //         </p>
    //       </div>
    //           </div>

    //           <p className="bottomText">
    //             <small className="terms">
    //               By clicking the Sign Up button, you agree to our{" "} <br />
    //               <Link to="/terms" className="anchorCustom">
    //                 Terms & Conditions
    //               </Link>{" "}
    //               and{" "}
    //               <Link to="/privacy" className="anchorCustom">
    //                 Privacy Policy
    //               </Link>
    //               .
    //             </small>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
  );
};
