import { useForm } from "react-hook-form";
import { FlexDir, Form, LabelAndInput, RadioInput } from "../../components/StyleComponents";
import { UploadFile } from "../../components";
import { useEffect, useState } from "react";
import { createRoom } from "../../services/room.service";
import { SelectAndOptions } from "../../components/StyleComponents/Select/SelectAndOptions";
import { roomData } from "../../data/Rooms.data";

export const CreateRoom = () => {
  const [send, setSend] = useState(null);
  const [res, setRes] = useState(null);
  const { register, handleSubmit } = useForm();
  const [roomType, setRoomType] = useState("");

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById("file-upload").files;

    if (inputFile.length != 0) {
      //- !=0 -- hay una imagen en el form
      const customFormData = {
        ...formData,
        image: inputFile[0],
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
  
  useEffect(() => {
    console.log(roomType);
  }, [roomType])
  

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
        <FlexDir direction={'column'}>
          <LabelAndInput>
      <label htmlFor="title">Room title</label>
      <input
        id="title"
        name="title"
        placeholder="Spacious flat in Chamartin"
        {...register("title", { required: true })}
      />
      </LabelAndInput>
      

      <LabelAndInput>
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Lovely flat in the middle of Chamartin, near the train station, and with a shopping mall 200m away. The flat has full commodities and fees ar..."
        {...register("description", { required: true })}
      />
      </LabelAndInput>
      <LabelAndInput>
      <label htmlFor="surface">Surface (in square meters)</label>
      <input
      type="number"
        id="surface"
        name="surface"
        placeholder="150m2"
        defaultValue='100'
        {...register("surface", { required: true })}
      />
      </LabelAndInput>
      

   <SelectAndOptions>
  <label htmlFor="type">Location type.</label>
  <select
    name="type"
    id="type"
    onInput={(e) => {
      //no se puede hacer un onChange, no funciona
      console.log("soy target", e.target.value);
      setRoomType(e.target.value)}}
    {...register("type", { required: true })}
  >
    {roomData.type.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

   </SelectAndOptions>

      <UploadFile multipleUpload={true} />
      <button type="submit" disabled={send}>
        {send ? "Loading..." : "Upload Room"}
      </button>
      </FlexDir>
    </Form>
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
