import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { updateUser } from "../../../services/user.service";
import { useErrorRegisterpt2 } from "../../../hooks/useErrorRegisterpt2";
import { CheckboxInput, FlexDir, Form, H1Form, LabelAndInput, RadioInput } from "../../../components/StyleComponents";


export const Registerpt2 = () => {


  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);


  const { setUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();


  const formSubmit = async (formData) => {
   
          setSend(true);
          setRes(await updateUser(formData));
          setSend(false);
        
    }
  

  useEffect(() => {
    useErrorRegisterpt2(res, setRes);
  }, [res]);











  return (
    <>
    <FlexDir>
    <Form
          heightTablet={"80vh"}
          width={"80vw"}
          height={"80vh"}
          mediaqueryWidth={"90vw"}
          onSubmit={handleSubmit(formSubmit)}
        >
          <FlexDir direction={"column"}>
          <H1Form margin={"8px 0 0 0"}>Finish Signing up</H1Form>


            <FlexDir mediaqueryDirMobile={"column"}>
              <FlexDir  width={"40vw"}
      mediaqueryWidthMobile={"95vw"} direction={"column"}>COLUMNA 1

              <LabelAndInput alignItems={"center"}>
              <RadioInput>
                <input
                  type="radio"
                  name="gender"
                  id="room"
                  value="room"
                  {...register("role", { required: true })}
                />
                <label htmlFor="room">
                  Room
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="mate"
                  value="roommate"
                  {...register("role", { required: true })}
                />
                <label htmlFor="mate">
                  Roommate
                </label>
              </RadioInput>
            </LabelAndInput>



              <LabelAndInput>
              Name
              <input
                type="text"
                name="name"
                autoComplete="false"
                {...register("name")}
              />
            </LabelAndInput>
            <LabelAndInput>
              Last name
              <input
                type="text"
                name="lastName"
                autoComplete="false"
                {...register("lastName")}
              />
            </LabelAndInput>
            <LabelAndInput>
              Date of birth
              <input
                type="number" min="1900" max="2005"
                placeholder="YYYY"
                name="birthYear"
                autoComplete="false"
                {...register("birthYear")}
              />
            </LabelAndInput>
              
              
              </FlexDir>
              <FlexDir width={"40vw"}
      mediaqueryWidthMobile={"95vw"} direction={"column"} >
      Interests

      <FlexDir>
      <LabelAndInput>
              

              <CheckboxInput value={"Art"}></CheckboxInput>
              <CheckboxInput value={"Climbing"}></CheckboxInput>
              <CheckboxInput value={"Concerts"}></CheckboxInput>
              <CheckboxInput value={"Cooking"}></CheckboxInput>
              <CheckboxInput value={"Dancing"}></CheckboxInput>
              <CheckboxInput value={"Fashion"}></CheckboxInput>
              <CheckboxInput value={"Gaming"}></CheckboxInput>
              <CheckboxInput value={"Gym"}></CheckboxInput>
              <CheckboxInput value={"Movies"}></CheckboxInput>
              <CheckboxInput value={"Music"}></CheckboxInput>
              </LabelAndInput>
              <LabelAndInput>

              <CheckboxInput value={"Nature"}></CheckboxInput>
              <CheckboxInput value={"Party"}></CheckboxInput>
              <CheckboxInput value={"Pets"}></CheckboxInput>
              <CheckboxInput value={"Photography"}></CheckboxInput>
              <CheckboxInput value={"Reading"}></CheckboxInput>
              <CheckboxInput value={"Socializing"}></CheckboxInput>
              <CheckboxInput value={"Sports"}></CheckboxInput>
              <CheckboxInput value={"Technology"}></CheckboxInput>
              <CheckboxInput value={"Travel"}></CheckboxInput>
              <CheckboxInput value={"Writing"}></CheckboxInput>


            </LabelAndInput>
      
            </FlexDir>
      
      
      </FlexDir>

            </FlexDir >



            <div>INPUT DESCRIPTTION</div>

          <div>BOTONES</div>
          </FlexDir>




        </Form>


    </FlexDir>
    
    
    </>

  )
}
