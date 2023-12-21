import { useEffect } from "react";
import { useState } from "react";
import { deletePost } from "../../services/post.service";
import { deleteRoom } from "../../services/room.service";
import { deleteComment } from "../../services/comment.service";
import  Swal  from "sweetalert2/dist/sweetalert2.all";
import { useNavigate } from "react-router-dom";
//type es el tipo de elemento que vamos a borrar, para que entre al switch y haga lo adecuado.
//falta hacer la gestion de errores!!
//el id es el id del elemento que va a borrar!!


export const DeleteButtonComponent = ({ type, id }) => {
  console.log("soy el tipo de boton de delete", type)
    const navigate = useNavigate();
  const deleteAction = async () => {
    Swal.fire({
      title: `Delete ${type}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB3236",
      cancelButtonColor: "#8E8F91",
      confirmButtonText: `Delete ${type}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        switch (type) {
          case "comment":
            let res = await deleteComment(id);
            if (resRoom.status == 200) {
              navigate('/')
              Swal.fire({
                title: "Comment Deleted",
                icon: "info",
                showCancelButton: true,
              })
            }
            break;

          case "post":
            let resPost = await deletePost(id);
            if (resRoom.status == 200) {
              navigate('/feed')
            }
            break;
          case "room":
            let resRoom = await deleteRoom(id);
            if (resRoom.status == 200) {
              navigate('/roomSearch')
            }
            break;

          default:
            break;
        }
      }
    });
  };

  return <button style={{width: '100px', height: '50px'}} onClick={deleteAction}>DeleteButton</button>;
};
