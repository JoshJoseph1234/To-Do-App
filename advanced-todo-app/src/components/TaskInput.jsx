import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;
