
import Swal from "sweetalert2"
export const useErrorRegister = (res, setRegisterOk, setRegisterGoogleOK, setRes) => {
  
  //? si la respuesta es ok ---- > directamente esta el status en la primera clave es decir: res.status
  //? si la respuesta no esta ok--> res.response.status
  //! ------------------ 200 : todo ok
  if (res?.status == 200 ) {

    const dataToString = JSON.stringify(res);
    localStorage.setItem("data", dataToString);

if(res?.data?.googleSignUp){
  setRegisterGoogleOK(() => true)
}else{
  setRegisterOk(() => true);
}

    Swal.fire({
      icon: "success",
      title: 'Register succesful',
      showConfirmButton: false,
      timer: 2000,
    });
    setRes({});
  }



  //! ------------------- 409: user ya registrado

  if (res?.response?.status === 409) {
    Swal.fire({
      icon: "error",
      title: "Invalid email",
      text: "Please, enter a valid email",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  if (res?.response?.data?.message?.includes("User validation failed: gender: Path `gender` is required")) {
    Swal.fire({
      icon: "error",
      title: "Gender is a required field",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }


  //! ------------------- La contraseña no esta en el formato correcto
  if (res?.response?.data?.message?.includes("User validation failed: password:")) {
    Swal.fire({
      icon: "error",
      title: "Insuficient password",
      text: "The password must contain 8 characters, 1 upper case, 1 lower case and a special character",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //! ------------------- cuando el userName ya existe
  if (
    res?.response?.status === 409 || res?.response?.data?.includes("This username already exists")
  ) {
    Swal.fire({
      icon: "error",
      title: "This username is already in use",
      text: "Please, try another one",
      showConfirmButton: false,
      timer: 3000,
    });
    setRes({});
  }

  //! -------------------- 500 : internal server error

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
};
