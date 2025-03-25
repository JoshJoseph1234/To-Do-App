import { useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { Navigate } from "react-router-dom";

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login page
  }

  return (
    <div className="home">
      <h1>📝 Advanced To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
