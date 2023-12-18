//<!--IMP                     Libraries                            -->
import L from "leaflet";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";

//<!--IMP                     Components                            -->
import {
  FlexDir,
  Form,
  LabelAndInput,
  RadioInput,
} from "../../components/StyleComponents";
import { SelectAndOptions } from "../../components/StyleComponents/Select/SelectAndOptions";
import { UploadFile } from "../../components";

//<!--IMP                     Services                            -->
import { createPost } from "../../services/post.service";


//<!--IMP                     Data                            -->
import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";
import { useErrorCreatePost } from "../../hooks/useErrorCreatePost";
import { postData } from "../../data/Posts.data";
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";
import { useIsAuthor } from "../../hooks/useIsAuthor";

//<!--IMP                     Component                            -->
export const UpdatePost = () => {
  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [createdPostSuccesfully, setCreatedPostSuccesfully] = useState(false);
  const { register, handleSubmit } = useForm();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = async() => {

  }

  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    console.log("formData en el componente", formData);
    console.log("inputFile en el componente", inputFile);
    if (inputFile.length != 0) {
      //- !=0 -- hay una imagen en el form
      const customFormData = {
        ...formData,
        image: inputFile[0],
      };

      setSend(true);
      setRes(await createPost(customFormData));
      setSend(false);
    } else {
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createPost(customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->
  useEffect(() => {
    useErrorUpdatePost(res, setRes, setCreatedPostSuccesfully, navigate);
  }, [res]);

  useEffect(() => {
  useUserVerify(user, logout, navigate)
  useCanUserPost(user, navigate)
  useIsAuthor(user, id, navigate)
  }, [])
  
//   if (createdPostSuccesfully) {
//     return <Navigate to={`/postFinds/${id}` }/>;
//  }

  //<!--Sec                       RETURN                                                             -->
  return (
    <FlexDir direction="column">
      <Form onSubmit={handleSubmit(formSubmit)} width="90%">
        <FlexDir direction={"column"} gap={"2rem"}>
          <LabelAndInput>
            <label htmlFor="title">Post title</label>
            <input
              id="title"
              name="title"
              placeholder="Looking for..."
              {...register("title", { required: true, maxLength: 50 })}
            />
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="postType">
              Are you looking for a flatmate or are you looking for a room?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="postType"
                id="RoomSeeker"
                value="RoomSeeker"
                onInput={(e) => {
                  console.log("soy target", e.target.value);
                  //este set timeout y el del siguiente radio es porque leaflet (la libreria de mapas), no muestra
                  //bien el mapa por el hidden y el renderizado condicional. El rpoblema de raiz se genera en que
                  //el div que contiene el id de map para que leaflet renderice ahi su mapa tiene que aparecer en la pagina
                  //desde el principio, porque si no, no lo encuentra. Podia probablemente haber componetizado el create map 
                  //y haberlo llamado en una funcion solo cuando el estado se settease a x o cualquier cosa, pero ya tenia
                  //toda la estructura hecha de esta manera. Tratare de implementarlo si tenemos tiempo.
                  //y bueno, tenia problemas tambien con los select, porque si un usuario dejaba por defecto la provincia o 
                  //el codigo postal, no se setteaba el estado a esa provincia o codigo postal, porque no se detecta como un
                  //on Input ni onChange, es solo un renderizado condicional, por lo tanto, no se renderizaba el resto de selects
                  //que dependian de los valores anteriores. 
                  //La libreria no carga bien el mapa si el div con id map no esta visible o renderizado desde el principio,
                  //pero con el resize lo carga bien
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize"));
                 }, 500);
                  setPostType(e.target.value);
                }}
                {...register("type", { required: true })}
              />
              <label htmlFor="RoomSeeker">I am looking for a room.</label>
              <input
                type="radio"
                name="postType"
                id="RoommateSeeker"
                value="RoommateSeeker"
                onInput={(e) => {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize"));
                 }, 500);
                  console.log("soy target", e.target.value);
                  setPostType(e.target.value);
                }}
                {...register("type", { required: true })}
              />
              <label htmlFor="RoommateSeeker">I am looking for a roommate.</label>
            </RadioInput>
          </LabelAndInput>

     {postType != "" && (
        <>
             <LabelAndInput>
            <label htmlFor="text">
              Show us a bit of who you are, and who you are looking for!
            </label>
            <textarea
              minLength={100}
              id="text"
              name="text"
              style={{ width: "100%" }}
              placeholder="Hi, we are a group of four searching for a flatmate..."
              {...register("text", {
                required: true,
                minLength: 50,
                maxLength: 300,
              })}
            />
          </LabelAndInput>

              

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="deposit">
             { postType == 'RoommateSeeker' ? 'Are you asking for a deposit?' : 'Are you willing to pay a deposit?'}
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="deposit"
                id="Yes"
                value="true"
                {...register("deposit", { required: true })}
              />
              <label htmlFor="Yes">Yes.</label>
              <input
                type="radio"
                name="deposit"
                id="No"
                value="false"
                {...register("deposit", { required: true })}
              />
              <label htmlFor="No">No.</label>
            </RadioInput>
          </LabelAndInput>

          <LabelAndInput>
          <label htmlFor="depositPrice">
          { postType == 'RoommateSeeker' ? 'How much is the deposit?' : 'How much can you pay for a deposit?'}

          </label>
          <input
            type="number"
            id="depositPrice"
            name="depositPrice"
            {...register("depositPrice", { required: true })}
          />
        </LabelAndInput>

        <LabelAndInput>
          <label htmlFor="price">
          { postType == 'RoommateSeeker' ? 'How much is the monthly fee?' : 'How much can you pay for the monthly fee?'}

          </label>
          <input
            type="number"
            id="price"
            name="price"
            {...register("price", { required: true })}
          />
        </LabelAndInput>


          <SelectAndOptions>
            <label htmlFor="preferredAge">
              What age range are you looking for in your roommates?
            </label>
            <select
              name="preferredAge"
              id="preferredAge"
              defaultValue="18-25"
              {...register("preferredAge", { required: true })}
            >
              {postData?.preferredAge?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectAndOptions>

          <LabelAndInput alignItems={"center"}>
          <label htmlFor="preferredGender">
          { postType == 'RoommateSeeker' ? 'What gender are you looking for in your roommate?' : 'What gender do you identify as?'}
            
          </label>
          <RadioInput minW="calc(100% / 2.2)">
            <input
              type="radio"
              name="preferredGender"
              id="female"
              value="female"
              {...register("preferredGender", { required: true })}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="preferredGender"
              id="male"
              value="male"
              {...register("preferredGender", { required: true })}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              name="preferredGender"
              id="irrelevant"
              value="irrelevant"
              {...register("preferredGender", { required: true })}
            />
            <label htmlFor="irrelevant">{postType == 'RoommateSeeker' ? 'Irrelevant' : 'None of those'}</label>
          </RadioInput>
        </LabelAndInput>      
        </>
     )}


          <UploadFile />
          <button type="submit" disabled={send}>
            {send ? "Loading..." : "Upload Room"}
          </button>
        </FlexDir>
      </Form>
    </FlexDir>
  );
};
