import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { UploadFile } from "../../components";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorUpdate } from "../../hooks/useErrorUpdate";
import { getUserById, updateUser } from "../../services/user.service";
import { FlexDir, Form } from "../../components/StyleComponents";



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
        <h3>Edit your information </h3>
        <Form  onSubmit={handleSubmit(editProfileFormSubmit)}>
          <FlexDir  direction={"column"}>
            <FlexDir  direction={"column"} >
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

                defaultValue={data?.data?.lastName}
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

                defaultValue={data?.data?.username}
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

                defaultValue={data?.data?.birthYear}
                {...register("birthYear")}
              />
             
          
            </FlexDir>
             
            </FlexDir>
            <img style={{ width: '200px' }} src={user?.image} alt={user?.name}/>
            <UploadFile />
            <FlexDir  direction={"column"} >
              
              <p>Gender</p>
              <FlexDir  >
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
