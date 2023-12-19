import Swal from "sweetalert2";

export const useCanUserPost = (user, navigate) => {
    console.log(user)
  if (
    user.description == "" || user.description == null ||
    user.name == "" || user.name == null ||
    user.lastName == "" || user.lastName == null ||
    user.birthYear == "" || user.birthYear == null ||
    user?.interests?.length == 0 || user.interests == null
  ) {
    console.log("hola")
    const modifyThis = [];
    const requiredData = ["description", "name", "lastName", "birthYear", "interests"]

    console.log(Object.keys(user))
    for (let i = 0; i < Object.keys(user).length; i++) {
        if (Object.values(user)[i].length === 0 ) {
          console.log("length 0")
            modifyThis.push(Object.keys(user)[i])
        }
    }
          for (let i = 0; i < requiredData.length; i++) {
            user[requiredData[i]] ? console.log("hola") : modifyThis.push(requiredData[i])
            
          }
    let joint = modifyThis.join(", ")
    navigate("/profile");
    return Swal.fire({
        position: "center",
        icon: "question",
        iconColor: "rgba(43,117,60,0.7)",
        title: "You have to finish editing your profile.",
        text: `You have to modify: ${joint}`,
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        animation: true,
      });
  }
};
