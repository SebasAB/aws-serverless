export default (scheduleItems = [], action) => {
  switch (action.type) {
    case "GET_SCHEDULE_ITEMS":
      return action.payload;
      break;

    case "CREATE_SCHEDULE_ITEM":
      return action.payload;

    case "UPDATE_SCHEDULE_ITEM":
      return action.payload;

    case "DELETE_SCHEDULE_ITEM":
      return action.payload;

    default:
      return scheduleItems;
  }
};
