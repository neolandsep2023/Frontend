import { Rating } from "primereact/rating";
import { useEffect, useState } from "react"
import {
  createComment,
  createUserComment,
} from "../../services/comment.service";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonPrimary, FlexDir, Form, LabelAndInput } from "../StyleComponents";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export const UserReview = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(false);
  const [send, setSend] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const formSubmit = async (formData) => {
    const customFormData = {
        ...formData, 
    }
    const res = await createUserComment(id, customFormData);
    setSend(true)
    res.response.status == 404 || res.response.status == 500
    ? (Swal.fire({
        icon: "error",
        title: "There has been an error sending the comment.",
        text: "Please, try again",
        showConfirmButton: false,
        timer: 1500,
      }), setSend(false)) 
    : (Swal.fire({
        icon: "success",
        title: "Comment posted successfully.",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      }), setSend(false),navigate(`user/${id}`) ); // Set send to false after handling the success
  };
  
  useEffect(() => {

  }, [send, res])
  

  return (
    <FlexDir direction="column" width="100%" height='100%' justifyContent="center">
      <Form onSubmit={handleSubmit(formSubmit)} width="90%" height='100%'>
        <FlexDir  direction="column" width="100%" justifyContent="center" height='100%'>
        <LabelAndInput >
          <input
          type="text"
            id="review"
            name="review"
            style={{ height: "70%" }}
            {...register("textComment", {
              required: true,
              minLength: 1,
              maxLength: 300,
            })}
          />
        </LabelAndInput>
        <ButtonPrimary variant="normal" type="submit" disabled={send}>
            {send ? "Loading..." : "Send comment"}
          </ButtonPrimary>
          </FlexDir>
      </Form>
    </FlexDir>
  );
};
