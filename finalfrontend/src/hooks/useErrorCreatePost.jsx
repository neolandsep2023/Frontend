import Swal from "sweetalert2"

export const useErrorCreatePost = (res, setRes, setCreatedPostSuccesfully, navigate) => {
  console.log(res);
  if (res?.status == 200) {
    let id = (res?.data?.savedPost?._id)
  navigate(`/feed/${id}`)
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
