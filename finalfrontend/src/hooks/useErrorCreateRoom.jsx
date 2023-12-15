import Swal from "sweetalert2"
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";


export const useErrorCreateRoom = (res, setRes, setCreatedRoomSuccesfully, setId, logout, navigate) => {
  console.log(res);
  console.log(res.response.data);
  if (res?.status == 200) {
    setId(res.data._id)
    setCreatedRoomSuccesfully(() => true);
    Swal.fire({
      icon: "success",
      title: 'Your property is now posted.',
      showConfirmButton: false,
      timer: 1500,
    });
     setRes({});
  }

  if (res?.response?.data?.error?.includes("Error updating user")) {
    Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Your user could not be updated properly. Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  if (res?.response?.data?.includes("JsonWebTokenError:")) {
    logout;
    navigate('/login');
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Please login.",
      text: "Session expired, login again.",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  if (res?.response?.data?.error?.includes("Error creating room")) {
    Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Your user could not be updated properly. Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

}
