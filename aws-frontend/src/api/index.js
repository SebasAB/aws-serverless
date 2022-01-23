import axios from "axios";

const API = axios.create({
  baseURL: "https://w9b1hobepc.execute-api.us-west-2.amazonaws.com/deploy",
});

// Task routes
export const fetchTasks = () => API.get("/tasks");
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (updatedTask) => API.put("/tasks", updatedTask);
export const deleteTask = (id) => API.delete("/tasks", id);

// Schedules routes
export const fetchScheduleItems = () => API.get("/schedule");
export const createScheduleItem = (scheduleItem) =>
  API.post("/schedule", scheduleItem);
export const updateScheduleItem = (updatedScheduleItem) =>
  API.put("/schedule", updatedScheduleItem);
export const deleteScheduleItem = (id) => API.delete("/schedule", id);
