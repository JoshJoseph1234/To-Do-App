import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();

  const API_KEY = "11bffea0316789bec76f6dd84a7c2a05"; // Replace with your OpenWeather API Key

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      return data.main.temp + "°C";
    } catch (error) {
      console.error("Weather fetch error:", error);
      return "N/A";
    }
  };

  const handleAddTask = async () => {
    if (task.trim() === "") return;

    let taskWeather = null;
    if (task.toLowerCase().includes("outdoor")) {
      taskWeather = await fetchWeather();
    }

    dispatch(addTask({ text: task, weather: taskWeather }));
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
