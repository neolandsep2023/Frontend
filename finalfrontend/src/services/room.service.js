import { updateToken } from "../utils/updateToken";
import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ CREATE ------------------
export const createRoom = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/rooms/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ UPDATE ------------------
export const updateRoom = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ DELETE ------------------
export const deleteRoom = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------- GET by ID -----------------
export const getRoomById = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by NAME ----------------
export const getRoomByName = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET ALL ------------------
export const getAllRooms = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------- SORT -------------------
export const sortRooms = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ FILTER ------------------
export const filterRooms = async (userId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${userId}`)
    .then((res) => res)
    .catch((error) => error);
};