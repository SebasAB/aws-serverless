import * as api from "../api";

export const fetchScheduleItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchScheduleItems();
    dispatch({ type: "GET_SCHEDULE_ITEMS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createScheduleItem = (scheduleItem) => async (dispatch) => {
  try {
    const { data } = await api.createScheduleItem(scheduleItem);
    dispatch({ type: "CREATE_SCHEDULE_ITEM", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateScheduleItem = (updatedScheduleItem) => async (dispatch) => {
  try {
    const { data } = await api.updateScheduleItem(updatedScheduleItem);
    dispatch({ type: "UPDATE_SCHEDULE_ITEM", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteScheduleItem = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteScheduleItem(id);
    dispatch({ type: "DELETE_SCHEDULE_ITEM", payload: data });
  } catch (error) {
    console.log(error);
  }
};
