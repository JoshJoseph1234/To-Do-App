import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/"); // Redirect to Home after login
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
