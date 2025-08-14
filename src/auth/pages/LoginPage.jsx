import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)

  const onLogin = async () => {
    const lastApth = localStorage.getItem('lastPath') || '/';
    await login('Randy Gonzalez')
    navigate(lastApth, {
      replace: true
    })

  }
  return (
    <div className="container mt-5">
      <h1>Login </h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
  )
}
