import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task.text}</span>
          {task.weather && <span>🌤 {task.weather}</span>}
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
