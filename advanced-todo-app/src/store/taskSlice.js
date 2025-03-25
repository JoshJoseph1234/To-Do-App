import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const initialState = {
  tasks: loadTasks(), // Initialize state with saved tasks
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save to localStorage
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save to localStorage
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
