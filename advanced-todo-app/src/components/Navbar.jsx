import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h1>📝 To-Do App</h1>
      <div>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
