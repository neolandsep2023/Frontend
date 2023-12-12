import Swal from "sweetalert2/dist/sweetalert2.all.js";



export const useErrorUpdate = (res, setRes, logout) => {

let acc
if(res?.data){
    acc = 0
    res?.data?.testUpdate?.map((item)=>{
        for (let key in item){
            if (item[key] == false){ 
                acc++
            }
        }
    })
}

if(acc == 0){
    let check = ""

    res?.data?.testUpdate?.forEach((item)=>{
        for (let key in item){
            if (item[key] == true ){
                check += `${key}`
            }
        }
    })
//! ----- dentro--- el 200

if (res?.status == 200){
    logout()
    setRes(()=>({}))
    return Swal.fire({
        icon: "success",
        title: "Your profile has been updated",
        text: `✅ ${check} updated`,
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
        title: "There was an error updating your profile",
        text: "Please try again",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }




}
