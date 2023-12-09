import { extraConfig } from "./serviceApiGeneral.config";

//! ------------------ CREATE ------------------
export const createRoom = async (formData) => {
  const APIGeneral = extraConfig();

  return APIGeneral.post(`/rooms/`, formData)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ UPDATE ------------------
export const updateRoom = async (roomId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.patch(`/rooms/${roomId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ DELETE ------------------
export const deleteRoom = async (roomId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.delete(`/rooms/${roomId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ----------------- GET by ID -----------------
export const getRoomById = async (roomId) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/${roomId}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ---------------- GET by NAME ----------------
export const getRoomByName = async (roomName) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/byName/${roomName}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ GET ALL ------------------
export const getAllRooms = async () => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------- SORT -------------------
export const sortRooms = async (method, value) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/sort/rooms/${method}/${value}`)
    .then((res) => res)
    .catch((error) => error);
};

//! ------------------ FILTER ------------------
export const filterRooms = async (filter, min, max) => {
  const APIGeneral = extraConfig();

  return APIGeneral.get(`/rooms/filter/rooms/${filter}/${min}/${max}`)
    .then((res) => res)
    .catch((error) => error);
};