import React, { useState } from "react";
import { useSelector } from "react-redux";

import Task from "./Task/Task";
import TaskForm from "./TaskForm/TaskForm";

const Tasks = () => {
  const state = useSelector((state) => state);
  const tasks = state.task.body;
  // console.log(tasks);
  // const tasks = null;

  return (
    <>
      <div className="container mt-3">
        {tasks ? (
          <>
            <h3>Tasks</h3>
            {Object.values(tasks)[0].map((task, index) => (
              <>
                {task.done ? (
                  <></>
                ) : (
                  <div className="container" key={index}>
                    <Task task={task} />
                  </div>
                )}
              </>
            ))}
            <div className="dropdown-divider"></div>
            <div className="container">
              <TaskForm />
            </div>
          </>
        ) : (
          <>
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Server Error</div>
              <div className="card-body">
                <h5 className="card-title">Microservice unavailable</h5>
                <p className="card-text">Please wait.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tasks;
