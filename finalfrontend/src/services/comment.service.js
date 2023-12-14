import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ GET ALL COMMENTS ------------------
export const getAllComments = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comments/getAll`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ CREATE ------------------
export const createComment = async (roomId, formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/comments/createRoomReview/${roomId}`, formData)
    .then((res) => res)
    .catch((error) => error);
};