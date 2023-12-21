import Swal from "sweetalert2"

export const useErrorUpdatePost = (res, setRes, navigate) => {
  console.log(res);
  if (res?.status == 200) {
    let id = (res?.data?.postByIdUpdated?._id)
  navigate(`/feed/${id}`)
    Swal.fire({
      icon: "success",
      title: 'Updated successfully.',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
     setRes({});
  }

  if (res?.response?.data?.update == false) {
    Swal.fire({
      icon: "error",
      title: "Could not update the room properly.",
      text: "The post was not properly updated, sorry! Please try again or contact support.",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    setRes({});
  }

  if (res?.response?.data?.error?.includes( "Error al actualizar por id")) {
    Swal.fire({
      icon: "error",
      title: "Update did not go as expected.",
      text: "Please retry or contact support.",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }
  if (res?.response?.data?.error?.includes( "Error encontrando el post")) {
    Swal.fire({
      icon: "error",
      title: "Server problems!",
      text: "Post not found.",
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
