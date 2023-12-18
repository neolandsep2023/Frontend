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
import { createRoom } from "../../services/room.service";

//<!--IMP                     Data                            -->
import { roomData } from "../../data/Rooms.data";
import { useErrorCreateRoom } from "../../hooks/useErrorCreateRoom";
import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";
import { useAuth } from "../../context/authContext";
import { useUserVerify } from "../../hooks/useUserVerify";
import { useCanUserPost } from "../../hooks/useCanUserPost";
import { useIsAuthor } from "../../hooks/useIsAuthor";

//<!--IMP                     Component                            -->
export const UpdateRoom = () => {
  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [createdRoomSuccesfully, setCreatedRoomSuccesfully] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  let id = useParams();

  //estos estados son para re-renderizar el componente si cambia la referencia
  const mapRef = useRef(null);
  const markerRef = useRef(null);




  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
    console.log("formData en el componente", formData);
    console.log("inputFile en el componente", inputFile);
    if (inputFile.length != 0) {
      let customFormData = {
        ...formData,
      };
      for (let i = 0; i < inputFile.length; i++) {
        // customFormData = {...customFormData, ['image'] : inputFile[i]}
      }

      console.log("custom form data con imagen", customFormData);
      setSend(true);
      setRes(await createRoom(customFormData));
      setSend(false);
    } else {
      // no hay imagen
      const customFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await createRoom(customFormData));
      setSend(false);
    }
  };

  //<!--sec                     UseEffect(gestion errores)                         -->


  useEffect(() => {
    useErrorCreateRoom(res, setRes, setCreatedRoomSuccesfully, setId, logout, navigate);
  }, [res]);

  useEffect(() => {
    useUserVerify(user, logout, navigate)
    useCanUserPost(user, navigate)
    useIsAuthor(user, id, navigate)
    }, [])



  if (createdRoomSuccesfully) {
    return <Navigate to={`/roomFinds/${id}` }/>;
 }

  //<!--Sec                       RETURN                                                             -->
  return (
    <FlexDir direction="column">
      <Form onSubmit={handleSubmit(formSubmit)} width="90%">
        <FlexDir direction={"column"} gap={"2rem"}>
          <LabelAndInput>
            <label htmlFor="title">Room title</label>
            <input
              id="title"
              name="title"
              placeholder="Spacious flat in Chamartin"
              {...register("title", { required: true, maxLength: 50 })}
            />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              style={{ width: "100%" }}
              placeholder="Lovely flat in the middle of Chamartin, near the train station, and with a shopping mall 200m away. The flat has full commodities and fees ar..."
              {...register("description", {
                required: true,
                minLength: 50,
                maxLength: 300,
              })}
            />
          </LabelAndInput>

          <SelectAndOptions>
            <label htmlFor="type">Location type.</label>
            <select
              name="type"
              id="type"
              defaultValue="Apartment"
              onInput={(e) => {
                //no se puede hacer un onChange, no funciona
                console.log("soy target", e.target.value);
                setRoomType(e.target.value);
              }}
              {...register("type", { required: true })}
            >
              {roomData?.type?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectAndOptions>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="available">
              Is the {roomType.toLowerCase()} available right now?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                defaultChecked
                type="radio"
                name="available"
                id="Yes"
                value="true"
                {...register("available", { required: true })}
              />
              <label htmlFor="Yes">Yes, it is ready for rental.</label>
              <input
                type="radio"
                name="available"
                id="No"
                value="false"
                {...register("available", { required: true })}
              />
              <label htmlFor="No">
                No, this {roomType.toLowerCase()} is occupied.
              </label>
            </RadioInput>
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="surface">
              {roomType} surface in square meters.
            </label>
            <input
              type="number"
              id="surface"
              name="surface"
              placeholder="150m2"
              defaultValue={"100"}
              {...register("surface", { required: true })}
            />
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="bathrooms">
              How many bathrooms are there in the {roomType.toLowerCase()}?
            </label>
            <RadioInput minW="calc(100% / 3)">
              <input
                type="radio"
                name="bathrooms"
                id="0"
                value="0"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="0">0</label>

              <input
                type="radio"
                name="bathrooms"
                id="1"
                value="1"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="1">1</label>

              <input
                type="radio"
                name="bathrooms"
                id="2"
                value="2"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="2">2</label>

              <input
                type="radio"
                name="bathrooms"
                id="3+"
                value="3+"
                {...register("bathrooms", { required: true })}
              />
              <label htmlFor="3+">3 +</label>
            </RadioInput>
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="roommates">
              How many people can the {roomType.toLowerCase()} hold?
            </label>
            <input
              type="number"
              id="roommates"
              name="roommates"
              {...register("roommates", { required: true })}
            />
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="petsAllowed">
              Are pets allowed in the {roomType.toLowerCase()}?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="petsAllowed"
                id="YesPetsAllowed"
                value="true"
                {...register("petsAllowed", { required: true })}
              />
              <label htmlFor="YesPetsAllowed">Yes, pets are allowed!</label>
              <input
                type="radio"
                name="petsAllowed"
                id="NoPetsAllowed"
                value="false"
                {...register("petsAllowed", { required: true })}
              />
              <label htmlFor="NoPetsAllowed">No, pets are not allowed.</label>
            </RadioInput>
          </LabelAndInput>

          <LabelAndInput alignItems={"center"}>
            <label htmlFor="exterior">
              Does the {roomType.toLowerCase()} have a balcony, patio, or any
              other outside structure?
            </label>
            <RadioInput minW="calc(100% / 1.4)">
              <input
                type="radio"
                name="exterior"
                id="YesOutside"
                value="true"
                {...register("exterior", { required: true })}
              />
              <label htmlFor="YesOutside">Yes, it has one.</label>
              <input
                type="radio"
                name="exterior"
                id="NoOutside"
                value="false"
                {...register("exterior", { required: true })}
              />
              <label htmlFor="NoOutside">No, it does not have it.</label>
            </RadioInput>
          </LabelAndInput>

          <FlexDir direction="row" width={"100%"}>
            <LabelAndInput gap={"4px"} width={"100%"} wrap="wrap">
              <label>What commodities does the house offer?</label>
              {roomData?.commoditiesHome?.map((item) => (
                <div
                  key={item}
                  className="inputContainer"
                  style={{ width: "300px" }}
                >
                  <label className="inputLabel inputLabel--checkbox">
                    {item}
                    <input
                      type="checkbox"
                      name={item}
                      value={item}
                      {...register("commoditiesHome")}
                    />
                    <div className="div"></div>
                  </label>
                </div>
              ))}
            </LabelAndInput>
          </FlexDir>

          <FlexDir>
            <LabelAndInput gap={"4px"}>
              <label>What commodities do the rooms offer?</label>
              {roomData?.commoditiesRoom?.map((item) => (
                <div key={item} className="inputContainer">
                  <label className="inputLabel inputLabel--checkbox">
                    {item}
                    <input
                      type="checkbox"
                      name={item}
                      value={item}
                      {...register("commoditiesRoom")}
                    />
                    <div className="div"></div>
                  </label>
                </div>
              ))}
            </LabelAndInput>
          </FlexDir>
          <UploadFile multipleUpload={true} />
          <button type="submit" disabled={send}>
            {send ? "Loading..." : "Upload Room"}
          </button>
        </FlexDir>
      </Form>
    </FlexDir>
  );
};
