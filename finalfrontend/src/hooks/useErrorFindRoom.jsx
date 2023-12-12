import Swal from "sweetalert2"
export const useErrorFindRoom = (res, setFindOk, setRes) => {
  
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status
  //! ------------------ 200 : todo ok
  if (res?.status == 200) {
    setFindOk(() => true);
    Swal.fire({
      icon: "success",
      title: 'Successful Fetching',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  if (res?.response?.status == 500) {
    Swal.fire({
      icon: "error",
      title: "Interval server error",
      text: "There was an error in our interval server. Please try again",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  if (res?.response?.status == 404) {
    Swal.fire({
      icon: "error",
      title: "Not Found",
      text: "404 error",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }
}
