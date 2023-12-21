import { useEffect } from "react";
import { useState } from "react";
import { deletePost } from "../../services/post.service";
import { deleteRoom } from "../../services/room.service";
import { deleteComment } from "../../services/comment.service";
import { Swal } from "sweetalert2/dist/sweetalert2.all";
import { useNavigate } from "react-router-dom";

export const DeleteButtonComponent = ({ type, id }) => {
    const navigate = useNavigate();
  const deleteAction = async () => {
    Swal.fire({
      title: "Delete account?",
      text: "If you delete your account, you will permanently loose your profile and all the information saved",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB3236",
      cancelButtonColor: "#8E8F91",
      confirmButtonText: "Delete account",
    }).then(async (result) => {
      if (result.isConfirmed) {
        switch (type) {
          case "comment":
            let res = await deleteComment(id);
            break;

          case "post":
            let resPost = await deletePost(id);
            break;
          case "room":
            let resRoom = await deleteRoom(id);
            if (resRoom.status == 200) {

            }
            break;

          default:
            break;
        }
      }
    });
  };

  return <button onClick={deleteAction}>DeleteButton</button>;
};
