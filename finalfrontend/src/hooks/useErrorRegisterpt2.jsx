import Swal from "sweetalert2/dist/sweetalert2.all.js";



export const useErrorRegisterpt2 = (res, setRes, setOkRegister) => {

let acc
if(res?.data){
    acc = 0
    res?.data?.testingUpdate?.map((item)=>{
        for (let key in item){
            if (item[key] == false){ //en el backend metemos un false cada vez que la informacion no se ha guardado bien
                acc++
            }
        }
    })
}

if(acc == 0){
    let check = ""

    res?.data?.testingUpdate?.forEach((item)=>{
        for (let key in item){
            if (item[key] == true ){
                check += `${key}`
            }
        }
    })
//! ----- dentro--- el 200

if (res?.status == 200){
    setRes(()=>({}))
    setOkRegister(() => true) 
    return Swal.fire({
        icon: "success",
        title: "Register completed",
        timer: 3000,
      });
}

}

  //! -------------------------------------> 404 general y el 500

  if (res?.response?.status == 500 || res?.response?.status == 404) {
    setRes(() => ({}));
    return Swal.fire({
      icon: "error",
      title: "Internal Server Error",
      text: "There was an error in our internal servers. Please, try again later",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  if (acc != 0) {
    if (res?.status == 200) {    // enviabamos el test con la respuesta 200
      setRes(() => ({}));
      return Swal.fire({
        icon: "error",
        title: "There was an error registering data",
        text: "Please try again",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }




}
