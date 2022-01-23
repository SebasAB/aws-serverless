export default (tasks = [], action) => {
  switch (action.type) {
    case "GET_TASKS":
      return action.payload;
      break;

    case "CREATE_TASK":
      return action.payload;

    case "UPDATE_TASK":
      return action.payload;

    case "DELETE_TASK":
      return action.payload;

    default:
      return tasks;
  }
};
