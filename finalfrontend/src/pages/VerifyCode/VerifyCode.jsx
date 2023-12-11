
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAutoLogin } from "../../hooks/useAutoLogin";
import { useResendCodeError } from "../../hooks/useResendCodeError";
import { useAuth } from "../../context/authContext";
import { Navigate, useNavigate } from "react-router";
import { useVerifyCodeError } from "../../hooks/useVerifyCodeError";
import { resendConfirmationCode, verifyConfirmationCode } from "../../services/user.service";
import { FlexDir, Form } from "../../components/StyleComponents";

export const VerifyCode = () => {
  const navigate = useNavigate();
  const { allUser, login, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [okCheck, setOkCheck] = useState(false);
  const [okDeleteUser, setOkDeleteUser] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem("user");

    if (userLocal == null) {
      
      const custFormData = {
     
        confirmationCode: parseInt(formData.confirmationCode),
        email: allUser.data.user.email,
      };

      setSend(true);
      setRes(await verifyConfirmationCode(custFormData));
      setSend(false);
    } else {
    
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
        confirmationCode: parseInt(formData.confirmationCode),
      };
      setSend(true);
      setRes(await verifyConfirmationCode(customFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem("user");
    if (userLocal != null) {
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        email: parseUser.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        email: allUser?.data?.user?.email,
      };

      setSend(true);
      setResResend(await resendConfirmationCode(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    
    useVerifyCodeError(
      res,
      setRes,
      setOkCheck,
      setOkDeleteUser,
      login,
      setUserNotFound
    );
  }, [res]);

  useEffect(() => {
 
    useResendCodeError(resResend, setResResend, setUserNotFound);
  }, [resResend]); 



  if (okCheck) {
   if (!localStorage.getItem("user")) {
     useAutoLogin(allUser);
    } else {
      return <Navigate to="/" />;
  }
}

if(okDeleteUser) {
  return <Navigate to="/register"/>
}


// if(userNotFound) {
// return <Navigate to="/login"/>
// }


  return (
    <>
     <FlexDir >
     
        <div >
        <h1 >Verify your code</h1>
        <p>Write the code sent to your email</p>
        </div>
        <Form onSubmit={handleSubmit(formSubmit)}>
        <FlexDir direction={"column"}>
        
          <label htmlFor="custom-input">
              Registration code
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("confirmationCode", { required: false })}
            />
           
          
        

<FlexDir direction={"column"}>
<button  type="submit"
            >
 Verify Code
</button>
        
  
          <button
             onClick={() => handleReSend()}>
 Resend Code
</button>
</FlexDir>

         

          

          <p>
            <small>
            If the code is not correct, your user will be deleted from the
              database and you will need to register again.{" "}
            </small>
          </p>
        </FlexDir>
         

        </Form>
        </FlexDir>
    </>
  );

}