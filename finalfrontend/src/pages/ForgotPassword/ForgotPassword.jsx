import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordNoAuth } from "../../services/user.service";
import { useForgotPasswordError } from "../../hooks/useForgotPasswordError";
import { ButtonPrimary, FlexDir, Form } from "../../components/StyleComponents";

export const ForgotPassword = () => {
    const {handleSubmit, register} = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [forgotOk, setForgotOk] = useState(false);
  
    const formSubmit = async (formData) => {
      setSend(true);
      setRes(await forgotPasswordNoAuth(formData));
      setSend(false);
    }
  
    useEffect(() => {
      useForgotPasswordError(res, setRes, setForgotOk); 
    }, [res]);
  
    if (forgotOk) {
      return <Navigate to="/login" />;
    }
    return (
        <>
        <FlexDir direction={"column"}>
            <div>
                <h1>FORGOT PASSWORD?</h1>
                <p>Don't worry! We will send you a new one to your email</p>
            </div>
            <Form onSubmit={handleSubmit(formSubmit)}>
                <FlexDir direction={"column"}>
                <label htmlFor="custom-input">Email</label>
                <input type="text" id="email" name="email" autoComplete="false" {...register("email", { required: true })}/>
                
                    <FlexDir direction={"column"}>
                        <ButtonPrimary type="submit">SEND</ButtonPrimary>
                    </FlexDir>
                </FlexDir>
                <p><small>Please set a new password as soon as you log into your account.</small></p>
            </Form>
        </FlexDir>
        </>
      )
    }