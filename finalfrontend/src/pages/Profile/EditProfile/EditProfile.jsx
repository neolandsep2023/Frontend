import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { UploadFile } from "../../../components";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorUpdate } from "../../../hooks/useErrorUpdate";
import { getUserById, updateUser } from "../../../services/user.service";
import {
  ButtonPrimary,
  FlexDir,
  Form,
  H1Form,
  H1Profile,
  LabelAndInput,
  RadioInput,
} from "../../../components/StyleComponents/index";

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
  const [interests, setInterests] = useState(user?.interests)
 
  const fetchData = async () => {
    const dataForState = await getUserById(user?._id);
    setData(dataForState);
  
    setIsDataReady(true);

  };
  useEffect(() => {
    fetchData();
  }, []);

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
  }, [resEdit]);

  


  return (
    <>
      <FlexDir direction={"column"}>
      <Form width={"40vw"} onSubmit={handleSubmit(editProfileFormSubmit)}>
        <H1Profile>Edit your information </H1Profile>
       
          <FlexDir direction={"column"}>
            <img
              style={{ width: "200px" }}
              src={user?.image}
              alt={user?.name}
            />
            <UploadFile />
            <LabelAndInput direction={"column"}>
              <label htmlFor="custom-input">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                defaultValue={data?.data?.name}
                {...register("name")}
              />
            </LabelAndInput>
            <LabelAndInput direction={"column"}>
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
            <LabelAndInput direction={"column"}>
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

            <LabelAndInput direction={"column"}>
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

            <FlexDir direction={"column"}>
              <FlexDir>

                <RadioInput minW={"68%"}>
                  <input
                   defaultChecked={gender == "male" && true }
                 
                    type="radio"
                    name="gender"
                    id="male"
                    value="hombre"
                    {...register("gender")}
                  />
                  <label htmlFor="male" onClick={() => setGender("hombre")}>
                    Male
                  </label>

                  <input
                  defaultChecked={gender == "female" && true }
                    type="radio"
                    name="gender"
                    id="female"
                    value="mujer"
                    {...register("gender")}
                  />
                  <label htmlFor="female" onClick={() => setGender("mujer")}>
                    Female
                  </label>

                  <input
                  defaultChecked={gender == "other" && true }
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    {...register("gender")}
                  />
                  <label htmlFor="other" onClick={() => setGender("other")}>
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
            <FlexDir
              width={"40vw"}
              mediaqueryWidthMobile={"95vw"}
              direction={"column"}
            >
              Interests
              <FlexDir>
                <LabelAndInput gap={"4px"}>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Art
                      <input
                      defaultChecked={interests?.includes("Art") ? true : false}
                        type="checkbox"
                        name="Art"
                        value="Art"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Climbing
                      <input
                      defaultChecked={interests?.includes("Climbing") ? true : false}
                        type="checkbox"
                        name="Climbing"
                        value="Climbing"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Concerts
                      <input
                      defaultChecked={interests?.includes("Concerts") ? true : false}
                        type="checkbox"
                        name="Concerts"
                        value="Concerts"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Cooking
                      <input
                       defaultChecked={interests?.includes("Cooking") ? true : false}
                        type="checkbox"
                        name="Cooking"
                        value="Cooking"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Dancing
                      <input
                      defaultChecked={interests?.includes("Dancing") ? true : false}
                        type="checkbox"
                        name="Dancing"
                        value="Dancing"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Fashion
                      <input
                      defaultChecked={interests?.includes("Fashion") ? true : false}
                        type="checkbox"
                        name="Fashion"
                        value="Fashion"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Gaming
                      <input
                       defaultChecked={interests?.includes("Gaming") ? true : false}
                        type="checkbox"
                        name="Gaming"
                        value="Gaming"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Gym
                      <input
                      defaultChecked={interests?.includes("Gym") ? true : false}
                        type="checkbox"
                        name="Gym"
                        value="Gym"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Movies
                      <input
                      defaultChecked={interests?.includes("Movies") ? true : false}
                        type="checkbox"
                        name="Movies"
                        value="Movies"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Music
                      <input
                       defaultChecked={interests?.includes("Music") ? true : false}
                        type="checkbox"
                        name="Music"
                        value="Music"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                </LabelAndInput>
                <LabelAndInput gap={"4px"}>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Nature
                      <input
                      defaultChecked={interests?.includes("Nature") ? true : false}
                        type="checkbox"
                        name="Nature"
                        value="Nature"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>

                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Party
                      <input
                      defaultChecked={interests?.includes("Party") ? true : false}
                        type="checkbox"
                        name="Party"
                        value="Party"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Pets
                      <input
                      defaultChecked={interests?.includes("Pets") ? true : false}
                        type="checkbox"
                        name="Pets"
                        value="Pets"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Photography
                      <input
                      defaultChecked={interests?.includes("Photography") ? true : false}
                        type="checkbox"
                        name="Photography"
                        value="Photography"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Reading
                      <input
                      defaultChecked={interests?.includes("Reading") ? true : false}
                        type="checkbox"
                        name="Reading"
                        value="Reading"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Socializing
                      <input
                      defaultChecked={interests?.includes("Socializing") ? true : false}
                        type="checkbox"
                        name="Socializing"
                        value="Socializing"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Sports
                      <input
                      defaultChecked={interests?.includes("Sports") ? true : false}
                        type="checkbox"
                        name="Sports"
                        value="Sports"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Technology
                      <input
                      defaultChecked={interests?.includes("Technology") ? true : false}
                        type="checkbox"
                        name="Technology"
                        value="Technology"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Travel
                      <input
                      defaultChecked={interests?.includes("Travel") ? true : false}
                        type="checkbox"
                        name="Travel"
                        value="Travel"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                  <div className="inputContainer">
                    <label className="inputLabel inputLabel--checkbox">
                      Writing
                      <input
                      // defaultChecked
                      defaultChecked={interests?.includes("Writing") ? true : false}
                        type="checkbox"
                        name="Writing"
                        value="Writing"
                        {...register("interests")}
                      />
                      <div className="div"></div>
                    </label>
                  </div>
                </LabelAndInput>
              </FlexDir>
            </FlexDir>
          </FlexDir>
          <FlexDir>
            <ButtonPrimary type="submit" width={"70%"}
              
              disabled={sendEdit}
              variant={sendEdit ? "loading" : "normal"}>SAVE CHANGES</ButtonPrimary>
          </FlexDir>
        </Form>
      </FlexDir>
    </>
  );
};
