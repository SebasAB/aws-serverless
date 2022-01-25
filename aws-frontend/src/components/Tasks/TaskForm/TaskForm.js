import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createTask } from "../../../actions/tasks";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(taskData));
  };

  return (
    <div className="container">
      <h3>Task Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task title"
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter task description"
            onChange={(e) =>
              setTaskData({ ...taskData, description: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
