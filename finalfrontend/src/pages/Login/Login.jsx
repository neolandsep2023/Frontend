import { useForm } from "react-hook-form";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user.service";
import { useErrorLogin } from "../../hooks/useErrorLogin";
import { useAuth } from "../../context/authContext";



export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login, setUser } = useAuth();
  const navigate = useNavigate();

  const [isSent, setIsSent] = useState(false); //isSent maneja los botones, el disable
  const [res, setRes] = useState({});
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const formSubmit = async (formData) => {
    setIsSent(true);
    setRes(await loginUser(formData));
    setIsSent(false);
  };

  useEffect(() => {
    useErrorLogin(res, setRes, login, setSuccessfulLogin);
  }, [res]);

  useEffect(() => {
    setUser(() => null);
    localStorage.removeItem("user");
  }, []);

  if (successfulLogin) {
    if (res?.data?.user.check == false) {
      return <Navigate to="/verifyCode" />;
    } else {
      return <Navigate to="/" />;
      
    }
  }

  return (
    <>
      <div >
      <div >
      <div >
          <h1 >LOG IN</h1>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
          <div >
          <label>
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            autoComplete="false"
            {...register("email", { required: true })}
          />
          <label  htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />

</div>

          <div >
          <button type="submit">
 LOG IN
</button>
          </div>
          <p >
            
              Have you forgotten the password?{" "}
              <Link to="/forgotPassword" className="anchorCustom">
                Change password
              </Link>
            
          </p>
        </form>
        <div >
          <p>
            Are you not registered? <Link to="/register">Register Here</Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};
