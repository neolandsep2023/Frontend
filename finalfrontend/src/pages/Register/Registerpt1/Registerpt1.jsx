import './Registerpt1.css'


import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { registerUser } from "../../services/user.service";
import { UploadFile } from "../../components";
import { useErrorRegister } from "../../hooks/useErrorRegister";




export const Registerpt1 = () => {

//!estados
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [okRegister, setRegisterOk] = useState(false);


//!hooks
    const { register, handleSubmit } = useForm();


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







  return (
    <div>Registerpt1</div>
  )
}
