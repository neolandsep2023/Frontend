import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { UploadFile } from "../../components";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorUpdate } from "../../hooks/useErrorUpdate";
import { getUserById, updateUser } from "../../services/user.service";
import { ButtonPrimary, FlexDir, Form, H1Form, LabelAndInput, RadioInput } from "../../components/StyleComponents";



export const EditProfile = () => {
  //! ---- estados

  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);
  const [resEdit, setResEdit] = useState({});
  const [sendEdit, setSendEdit] = useState(false);
  const [data, setData] = useState(null);

  //! ----- hooks

  const { setUser, setIsDeletedUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();
  const [isDataReady, setIsDataReady] = useState(false);
  const [gender, setGender] = useState(user?.gender);
  const fetchData = async () => {
    const dataForState = await getUserById(user?._id);
    setData(dataForState);
    setIsDataReady(true);
    console.log(dataForState)
  };
  useEffect(() => {
    fetchData();

  }, [ ]);

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
    useErrorUpdate(resEdit, setResEdit, logout);
    console.log(data)
  }, [resEdit]);

  return (
    <>
      <FlexDir direction={"column"} >
        <H1Form>Edit your information </H1Form>
        <Form    width={"40vw"} onSubmit={handleSubmit(editProfileFormSubmit)}>
          <FlexDir  direction={"column"}>
          <img style={{ width: '200px' }} src={user?.image} alt={user?.name}/>
            <UploadFile />
            <LabelAndInput  direction={"column"} >
              <label htmlFor="custom-input">
                Name
              </label>
              <input
              
                type="text"
                id="name"
                name="name"
                autoComplete="false"

                defaultValue={data?.data?.name}
                {...register("name")}
              />
            
          
            </LabelAndInput>
            <LabelAndInput  direction={"column"} >
          
              Last Name
         
              <input
              
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="false"

                defaultValue={data?.data?.lastName}
                {...register("lastName")}
              />
              </LabelAndInput>
              <LabelAndInput  direction={"column"} >
             
              Username
            
              <input
              
                type="text"
                id="username"
                name="username"
                autoComplete="false"

                defaultValue={data?.data?.username}
                {...register("username")}
              />
             
             </LabelAndInput>
           
            <LabelAndInput  direction={"column"} >
           
              Birth Year
         
              <input
              
                type="number"
                id="birthYear"
                name="birthYear"
                autoComplete="false"

                defaultValue={data?.data?.birthYear}
                {...register("birthYear")}
              />
             
          
            </LabelAndInput>
             
          
          
            <FlexDir  direction={"column"} >
          
              <FlexDir  >
              <RadioInput minW={"68%"}>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="hombre"
                  {...register("gender")}
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
                  {...register("gender")}
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
                  {...register("gender")}
                />
                <label
                  htmlFor="otros"
                
                  onClick={() => setGender("otros")}
                 
                >
                  Others
                </label>
                </RadioInput>
              </FlexDir>
            </FlexDir>
            <LabelAndInput inputHeight={"60px"}>
              Brief description of you
              <textarea
                type="text" 
                defaultValue={data?.data?.description}
                name="description"
                autoComplete="false"
                {...register("description")}
              />
            </LabelAndInput>
          </FlexDir>
          <FlexDir >
          <ButtonPrimary type="submit"
           >
Save changes
</ButtonPrimary>

          </FlexDir>
        </Form>
      </FlexDir>
    </>
  );
};
