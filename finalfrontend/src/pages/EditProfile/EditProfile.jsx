import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { UploadFile } from "../../components";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from "../../hooks/useErrorChangePassword";
import { useErrorUpdate } from "../../hooks/useErrorUpdate";
import { updateUser } from "../../services/user.service";
import { FlexDir, Form } from "../../components/StyleComponents";



export const EditProfile = () => {
  //! ---- estados

  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);
  const [resEdit, setResEdit] = useState({});
  const [sendEdit, setSendEdit] = useState(false);

  //! ----- hooks

  const { setUser, setIsDeletedUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();

  const [gender, setGender] = useState(user?.gender);

const editProfileFormSubmit = async (formData) => {
    Swal.fire({
      title: "Save changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#DB3236",
      cancelButtonText: "Cancel",
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputFile = document.getElementById("file-upload").files;
        if (inputFile.length != 0) {


          const customFormData = {
            ...formData,
            image: inputFile[0],
          };

          setSendEdit(true);
          setResEdit(await updateUser(customFormData));
          setSendEdit(false);
        } else {
          const customFormData = {
            ...formData,
            image: user?.image,
          };
          setSendEdit(true);
          setResEdit(await updateUser(customFormData));
          setSendEdit(false);
        }
      }
    });
  };
  //! ----- useEffect

  useEffect(() => {
    useErrorChangePassword(resPassword, setResPassword, setUser);
  }, [resPassword]);

  useEffect(() => {
    useErrorUpdate(resEdit, setResEdit, logout);
  }, [resEdit]);

  return (
    <>
      <FlexDir direction={"column"} >
        <h3>Edit your information </h3>
        <Form  onSubmit={handleSubmit(editProfileFormSubmit)}>
          <FlexDir  direction={"column"}>
            <FlexDir  direction={"column"} >
              <label htmlFor="custom-input" >
                Name
              </label>
              <input
              
                type="text"
                id="name"
                name="name"
                autoComplete="false"

                defaultValue={user?.name}
                {...register("name")}
              />
            
          
            </FlexDir>
            <FlexDir  direction={"column"} >
              <label htmlFor="custom-input" >
              Last Name
              </label>
              <input
              
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="false"

                defaultValue={user?.lastName}
                {...register("lastName")}
              />
             
              <FlexDir  direction={"column"} >
              <label htmlFor="custom-input" >
              Username
              </label>
              <input
              
                type="text"
                id="username"
                name="username"
                autoComplete="false"

                defaultValue={user?.username}
                {...register("username")}
              />
             
          
            </FlexDir>
            <FlexDir  direction={"column"} >
              <label htmlFor="custom-input" >
              Birth Year
              </label>
              <input
              
                type="number"
                id="birthYear"
                name="birthYear"
                autoComplete="false"

                defaultValue={user?.birthYear}
                {...register("birthYear")}
              />
             
          
            </FlexDir>
             
            </FlexDir>
            <img  style={{padding: '0'}} src={user?.image} alt={user?.name}/>
            <UploadFile />
            <FlexDir  direction={"column"} >
              
              <p>Gender</p>
              <FlexDir  >
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="hombre"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="male"
                  onClick={() => setGender("hombre")}
                  
                >
                  Male
                </label>

                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="mujer"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="female"
                  onClick={() => setGender("mujer")}
              
                  
                >
                  Female
                </label>

                <input
                  type="radio"
                  name="gender"
                  id="otros"
                  value="otros"
                  {...register("gender", { required: true })}
                />
                <label
                  htmlFor="otros"
                
                  onClick={() => setGender("otros")}
                 
                >
                  Others
                </label>
              </FlexDir>
            </FlexDir>
          </FlexDir>
          <FlexDir >
          <button type="submit"
           >
Save changes
</button>

          </FlexDir>
        </Form>
      </FlexDir>
    </>
  );
};
