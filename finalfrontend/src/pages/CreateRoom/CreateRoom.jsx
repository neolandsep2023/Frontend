//<!--IMP                     Libraries                            -->
import L from "leaflet";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Navigate, useNavigate } from "react-router-dom";


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
import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";
import { useErrorCreateRoom } from "../../hooks/useErrorCreateRoom";

//<!--IMP                     Component                            -->
export const CreateRoom = () => {
  //<!--sec                     Estados                         -->
  const [send, setSend] = useState(null);
  const [res, setRes] = useState({});
  const [createdRoomSuccesfully, setCreatedRoomSuccesfully] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //estos estados son para que se rendericen condicionalmente elementos
  const [roomType, setRoomType] = useState("Apartment");
  const [province, setProvince] = useState("Almeria");
  const [postcode, setPostcode] = useState("");

  //estos estados son para re-renderizar el componente si cambia la referencia
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  //<!--sec                     Funciones pagina                         -->
  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;
console.log(formData)
    if (inputFile.length != 0) {
      //- !=0 -- hay una imagen en el form
      const customFormData = {
        ...formData,
        image: inputFile,
      };

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
    console.log(roomType);
    console.log(postcode);
    console.log(province);
  }, [roomType, postcode, province]);

  useEffect(() => {
    useErrorCreateRoom(res, setRes, setCreatedRoomSuccesfully)
  }, [res])
  


if(createdRoomSuccesfully) {
  <Navigate to='/profile'/>
}



  //----------------------USE EFFECT MAPA--------------------------
  useEffect(() => {
    const createMap = () => {
      if (
        province &&
        postcode &&
        postcodes[province] &&
        postcodes[province][postcode]
      ) {
        //solo si existen todos los datos que necesitamos!!
        if (!mapRef.current) {
          //si NO HAY un mapa creado (mapRef.current se dirige al estado ACTUAL de mapRef),
          //solo si es null entramos en esta primera clausula
          //vamos a inicializar una instancia de leaflet.map en el div con el id 'map'. Vamos a meterle un
          //centro, que son las coordenadas latitud y longitud del codigo postal seleccionado
          const map = L.map("map", {
            center: [
              parseFloat(postcodes[province][postcode].latitude),
              parseFloat(postcodes[province][postcode].longitude),
            ],
            zoom: 15,
          });
          //esto es solamente la atribucion a leaflet, gracias leaflet <3
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
          }).addTo(map);

          // guardamos la instancia del mapa en el current mapRef, para poder juzgar despues si hay que crear
          //una nueva instancia o solo modificar el mapa que ya hay
          mapRef.current = map;

          // este es el puntero lindo azulin que hay en el mapa. Decidi ponerlo porque hay veces que los codigos
          //postales estan tan cerca que el mapa no cambia de posicion. Con esto, al menos cambia el puntero.
          //se le asignan las coordenadas del codigo postal y se anade al mapa (addTo(map))
          //Luego al igual que con el mapa, lo guardamos como primera instancia de markerRef
          const marker = L.marker([
            parseFloat(postcodes[province][postcode].latitude),
            parseFloat(postcodes[province][postcode].longitude),
          ]).addTo(map);
          markerRef.current = marker;
        } else {
          // esto se hace si SI hay mapRef.current, que es settear la vista, es decir, actualizar la vista del mapa
          mapRef.current.setView(
            [
              parseFloat(postcodes[province][postcode].latitude),
              parseFloat(postcodes[province][postcode].longitude),
            ],
            15
          );

          //y se actualiza el markerRef si en efecto hay markerRef. Lo que hace es un metodo de set lat(itude) y
          // LoNGitude.
          if (markerRef.current) {
            markerRef.current.setLatLng([
              parseFloat(postcodes[province][postcode].latitude),
              parseFloat(postcodes[province][postcode].longitude),
            ]);
          }
        }
      }
    };

    createMap();
    //y al final de todo llamamos a la funcion que hace todo esto, y tiene dependencias en postcode, para que se
    //actualice cada vez que cambia
  }, [postcode]);
  //---------------------------------------------------------------



//<!--Sec                       RETURN                                                             -->
  return (
    <FlexDir direction='column'>
    <Form onSubmit={handleSubmit(formSubmit)} width='90%'>
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
          <label htmlFor="surface">{roomType} surface in square meters.</label>
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

        <FlexDir direction='row' width={"100%"}>
          <LabelAndInput gap={"4px"} width={"100%"} wrap="wrap">
          <label>
              What commodities does the house offer?
            </label>
          {roomData?.commoditiesHome?.map((item) => (
              <div 
              key={item}
              className="inputContainer"
              style={{width: '300px'}}>
                
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
            <label>
              What commodities do the rooms offer?
            </label>
          {roomData?.commoditiesRoom?.map((item) => (
              <div 
              key={item}
              className="inputContainer">
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



        <SelectAndOptions>
          <label htmlFor="publicLocation">
            Community where the {roomType.toLowerCase()} is located.
          </label>
          <select
            name="publicLocation"
            id="publicLocation"
            defaultValue="Madrid"
            {...register("publicLocation", { required: true })}
          >
            {roomData?.publicLocation?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </SelectAndOptions>

        <SelectAndOptions>
          <label htmlFor="province">
            Province where the {roomType.toLowerCase()} is located.
          </label>
          <select
            name="province"
            id="province"
            onInput={(e) => setProvince(e.target.value)}
            {...register("province", { required: true })}
          >
            {Object.keys(postcodes)
              .sort((a, b) => a.localeCompare(b))
              .map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
          </select>
        </SelectAndOptions>

        {province && postcodes[province] && (
          <>
            <SelectAndOptions>
              <label htmlFor="postcode">
                Community where the {roomType.toLowerCase()} is located.
              </label>
              <select
                name="postcode"
                id="postcode"
                onInput={(e) => setPostcode(e.target.value)}
            {...register("postcode", { required: true })}
              >
                {Object.entries(postcodes[province])
                  .sort((a, b) => a - b)
                  .map(([postcode]) => (
                    //postcode esta entre corchetes porque es destructuring de un array. Object.entries te da una
                    //serie de arrays con estructura [clave: valor], y al hacer destructuring de esos pares,
                    //sobreentiende que si solo se pone un elemento, sera del primero
                    <option key={postcode} value={postcode}>
                      {postcode}
                    </option>
                  ))}
              </select>
              <div
                id="map"
                style={{ width: "100%", margin: "4px", height: "50vh" }}
              ></div>
            </SelectAndOptions>
          </>
        )}

        <UploadFile multipleUpload={true} />
        <button type="submit" disabled={send}>
          {send ? "Loading..." : "Upload Room"}
        </button>
      </FlexDir>
    </Form>
    </FlexDir>
  );
};

/**
    type: {type: String, required: true, enum: [
      "Apartment",
      "House",
      "Condo",
      "Townhouse",
      "Studio",
      "Loft",
      "Duplex",
      "Flat",
    ]},
    available: {type: boolean, required: true, default: true},
    bathroom: {type: Boolean, required: true},
    publicLocation: {type: String, required: true},
    postcode: {type: Number, required: true},
    petsAllowed: {type: Boolean, required: true},
    exterior: {type: Boolean, required: true},
    // deposit: {type: Boolean, required: true},
    // depositPrice: {type: Number},
    roomates: {type: Number, required: true},
    commoditiesRoom: {type: String, required: true, enum: [ 
    ]},
    commoditiesHome: {type: String, required: true, enum: [
    ]},
    // price: {type: Number, required: true},
    postedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    image: [{type: String}]
 */
