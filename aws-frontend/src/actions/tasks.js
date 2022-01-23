import * as api from "../api";

export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    dispatch({ type: "GET_TASKS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);
    dispatch({ type: "CREATE_TASK", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (updatedTask) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(updatedTask);
    dispatch({ type: "UPDATE_TASK", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteTask(id);
    dispatch({ type: "UPDATE_TASK", payload: data });
  } catch (error) {
    console.log(error);
  }
};
