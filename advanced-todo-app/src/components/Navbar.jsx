import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar">
      <h1>To-Do App</h1>
      {isAuthenticated && (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
