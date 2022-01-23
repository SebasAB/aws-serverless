import React, { useState } from "react";
import { useSelector } from "react-redux";

const Tasks = () => {
  const state = useSelector((state) => state);
  const [currentId, setCurrentId] = useState(false);
  // console.log(state);
  const tasks = state.task.body;
  // console.log(tasks);
  // console.log(typeof tasks);

  // tasks ? console.log(Object.values(tasks)[0]) : console.log("null");

  return (
    <>
      <h1>Tasks</h1>
      <div className="dropdown-divider"></div>
      {tasks ? (
        <>
          <div className="card">
            <div className="card-header">To Do</div>
            <ul className="list-group list-group-flush">
              {tasks ? (
                Object.values(tasks)[0].map((task, index) => (
                  <li className="list-group-item" key={index}>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm">
                          <h5 className="card-title">{task.title}</h5>
                          <h6 className="card-subtitle">{task.description}</h6>
                        </div>
                        <div className="col-sm">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button type="button" className="btn btn-secondary">
                              Done
                            </button>
                            <button type="button" className="btn btn-secondary">
                              Edit
                            </button>
                            <button type="button" className="btn btn-secondary">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="dropdown-divider"></div>
          <div className="container">
            <h3>Create new task</h3>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Task Title</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Task Description</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {!currentId ? "Create " : "Edit "} task
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Server Error</div>
            <div className="card-body">
              <h5 className="card-title">Microservice unavailable</h5>
              <p className="card-text">Contact your sysadmin for more info.</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tasks;
