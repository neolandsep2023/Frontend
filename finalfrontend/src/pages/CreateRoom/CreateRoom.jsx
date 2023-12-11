import { useForm } from "react-hook-form";
import { Form } from "../../components/StyleComponents";
import { UploadFile } from "../../components";
import { useState } from "react";
import { createRoom } from "../../services/room.service";

export const CreateRoom = () => {
  const [send, setSend] = useState(null);
  const [res, setRes] = useState(null);
  const { register, handleSubmit } = useForm();


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

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <label htmlFor="title">Room title</label>
      <input
        id="title"
        name="title"
        placeholder="Spacious flat in Chamartin"
        {...register("title", { required: true })}
      />

      <UploadFile multipleUpload={true} />
      <button type="submit" disabled={send} >
     {send ? "Loading..." : "Upload Room"}
    </button>
    </Form>
  );
};

/**
 title: {type: String, required: true, trim: true, maxLength: 100},
    description: {type: String, required: true, minLength: 50, maxLength: 300},
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
    surface: {type: Number, required: true},
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
