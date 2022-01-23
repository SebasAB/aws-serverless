import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../../actions/tasks";
import { fetchScheduleItems } from "../../actions/schedule";

import Tasks from "../Tasks/Tasks";
import Schedule from "../Schedule/Schedule";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchScheduleItems());
  }, [dispatch]);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container justify-content-center">
          <span className="navbar-brand mb-0 h1">
            Distributed Applications Project - Microservices using AWS
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Schedule />
          </div>
          <div className="col-6">
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
