import Swal from "sweetalert2"
import { useAuth } from "../context/authContext";

export const useErrorCreatePost = (res, setRes, setCreatedPostSuccesfully, navigate, logout) => {
  console.log(res);
  if (res?.status == 200) {
    setCreatedPostSuccesfully(() => true);
    Swal.fire({
      icon: "success",
      title: 'Your post is now public.',
      showConfirmButton: false,
      timer: 1500,
    });
     setRes({});
  }

  if (res?.response?.data?.includes("Error saving post")) {
    Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "The post was not saved, sorry! Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  if (res?.response?.data?.error?.includes( "no se encontro por id")) {
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

  if (res?.response?.status === 500) {
    Swal.fire({
        icon: "error",
        title: "Server problems!",
        text: "Please try again later.",
        showConfirmButton: false,
        timer: 3000,
      });
      setRes({});
  }

}
