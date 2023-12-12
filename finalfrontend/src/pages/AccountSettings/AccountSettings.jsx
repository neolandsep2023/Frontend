import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { useErrorChangePassword } from "../../hooks/useErrorChangePassword";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { changePasswordAuth} from "../../services/user.service";
import { FlexDir, Form } from "../../components/StyleComponents";


export const AccountSettings = () => {


  const [resPassword, setResPassword] = useState({});
  const [sendPassword, setSendPassword] = useState(false);


  const { setUser, setIsDeletedUser, user, logout } = useAuth();
  const { handleSubmit, register } = useForm();


  const changePasswordFormSubmit = (formData) => {
    const { password, newPassword, confirmPassword } = formData;

    if (newPassword == confirmPassword) {
      Swal.fire({
        title: "Change password?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel,",
      }).then(async (resPassword) => {
        if (resPassword.isConfirmed) {
          setSendPassword(true);
          setResPassword(await changePasswordAuth({ password, newPassword }));
          setSendPassword(false);
        }
      
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Your password and confirmation password must match",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  //! ----- useEffect

  useEffect(() => {
    useErrorChangePassword(resPassword, setResPassword, setUser);
    console.log(resPassword)
  }, [resPassword]);

  //! ---- estados de navegacion


  return (
    <>

 
        <FlexDir direction={"column"} >
          <h3 >Change your password</h3>
          <Form onSubmit={handleSubmit(changePasswordFormSubmit)}>
            <FlexDir direction={"column"}>
              <label htmlFor="custom-input" >
                Current password
              </label>
              <input
             
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
            </FlexDir>
            <FlexDir direction={"column"}>
              <label htmlFor="custom-input" className="customPlaceholder">
                New password
              </label>
              <input
              
                type="password"
                id="newPassword"
                name="newPassword"
                autoComplete="false"
                {...register("newPassword", { required: true })}
              />
            </FlexDir>
            <FlexDir direction={"column"}>
              <label htmlFor="custom-input" >
                Confirm new password
              </label>
              <input
               
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="false"
                {...register("confirmPassword", { required: true })}
              />
            </FlexDir>
            <FlexDir >
            <button type="submit"
             >
Change Password
</button>

            </FlexDir>
          </Form>
        </FlexDir>
        <FlexDir>
        <button  onClick={() => useDeleteUser(setUser, setIsDeletedUser)}>
        Delete account
      </button>

        </FlexDir>

    </>
  );
};
