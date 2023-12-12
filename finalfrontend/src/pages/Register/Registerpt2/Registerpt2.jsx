import './Registerpt2.css'
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { useEffect, useState } from "react";
import { updateUser } from "../../../services/user.service";
import { useErrorRegisterpt2 } from "../../../hooks/useErrorRegisterpt2";
import { Anchor, ButtonPrimary, CheckboxInput, FlexDir, Form, H1Form, LabelAndInput, RadioInput } from "../../../components/StyleComponents";
import { Link } from "react-router-dom";


export const Registerpt2 = () => {


  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);


  const { setUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();


  const formSubmit = async (formData) => {
    console.log(formData)
   
          setSend(true);
          setRes(await updateUser(formData));
          setSend(false);
        
    }
  

  useEffect(() => {
    console.log(res)
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
      mediaqueryWidthMobile={"95vw"} direction={"column"}>

              <LabelAndInput alignItems={"center"}>
                I'm looking for a
              <RadioInput>
                <input
                  type="radio"
                  name="gender"
                  id="room"
                  value="roomSeeker"
                  {...register("role", { required: true })}
                />
                <label htmlFor="room">
                  Room
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="mate"
                  value="roommateSeeker"
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

            <LabelAndInput inputHeight={"60px"}>
              Brief description of you
              <textarea
                type="text" 
                placeholder="I'm very clean and organized and love cats..."
                name="description"
                autoComplete="false"
                {...register("description")}
              />
            </LabelAndInput>
              
              
              </FlexDir>
              <FlexDir width={"40vw"}
      mediaqueryWidthMobile={"95vw"} direction={"column"} >
      Interests

      <FlexDir>
      <LabelAndInput>
              

              <CheckboxInput {...register("interests")} value={"Art"}>
              <label className=".label" htmlFor={"Art"}>
              <input className="inputCheckBox" type="checkbox" name={"Art"}
    value={"Art"}
     id={"Art"} />
     <div className="div"></div>
     </label>
              </CheckboxInput>
              <CheckboxInput {...register("interests")}  value={"Climbing"}></CheckboxInput>

              
              <div class="checkboxDiv">
  <label class="label label--checkbox" htmlFor="Climbing">
  Climbing
    <input type="checkbox" name="Climbing" value={"Climbing"} {...register("interests")}/>
    <div class="endDiv"></div>
  </label>
</div>

//! EL QUE VA BIEN
<div class="checkbox-wrapper-21">
  <label class="control control--checkbox" >
    Checkbox
    <input type="checkbox" name="Climbing" value={"Climbing"} {...register("interests")}/>
    <div class="control__indicator"></div>
  </label>
</div> 
//! EL QUE VA BIEN//! EL QUE VA BIEN
              <CheckboxInput value={"Concerts"}>
              </CheckboxInput>
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





            <ButtonPrimary
              // width={"200px"}
              type="submit"
              disabled={send}
              variant={send ? "loading" : "normal"}
            >
              {send ? "Loading..." : "COMPLETE PROFILE"}
            </ButtonPrimary>

            <FlexDir margin={"0"}>
              <Link to="/profile">
                <Anchor>Skip</Anchor>
              </Link>
            </FlexDir>

        

         

          </FlexDir>




        </Form>


    </FlexDir>
    
    
    </>

  )
}
