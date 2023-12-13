import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordNoAuth } from "../../services/user.service";
import { useForgotPasswordError } from "../../hooks/useForgotPasswordError";
import { ButtonPrimary, FlexDir, Form, H1Form, LabelAndInput, Small } from "../../components/StyleComponents";


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
            <Form onSubmit={handleSubmit(formSubmit)}>
            <div>
            <H1Form margin={"8px 0 0 0"}> FORGOT PASSWORD?</H1Form>
                <Small>Don't worry! We will send you a new one to your email</Small>
            </div>
                <FlexDir direction={"column"}>
                <LabelAndInput>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        autoComplete="false"
                        {...register("email", { required: true })}
                        />
                </LabelAndInput>
                
                    <FlexDir direction={"column"}>
                        <ButtonPrimary type="submit">SEND</ButtonPrimary>
                    </FlexDir>
                </FlexDir>
                <Small>Please set a new password as soon as you log into your account.</Small>
            </Form>
        </FlexDir>
        </>
      )
    }