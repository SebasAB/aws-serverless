import React from "react";
import { useDispatch } from "react-redux";

import { deleteTask, updateTask } from "../../../actions/tasks";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleDone = () => {
    dispatch(
      updateTask({
        id: task.id,
        title: task.title,
        description: task.description,
        done: true,
      })
    );
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="card mt-3 mb-3 pb-3">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
          </div>
          <div className="container">
            <button
              type="button"
              className="btn btn-outline-primary ml-1 mr-1"
              onClick={handleDone}
            >
              Done
            </button>
            <button
              type="button"
              className="btn btn-outline-danger ml-1 mr-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
