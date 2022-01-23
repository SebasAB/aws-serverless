import React, { useState } from "react";
import { useSelector } from "react-redux";
const Schedule = () => {
  const state = useSelector((state) => state);
  // console.log(state);
  const [currentId, setCurrentId] = useState(false);
  const scheduleItems = state.schedule.body;
  console.log(scheduleItems);
  return (
    <>
      <h1>Schedule</h1>
      <div className="dropdown-divider"></div>
      <div className="container">
        <h4>Next Activities</h4>
        <div className="dropdown-divider"></div>
        {scheduleItems ? (
          <>
            {Object.values(scheduleItems)[0].map((scheduleItem, index) => (
              <>
                <h5 key={index}>{scheduleItem.dayName}</h5>
                <h6>{scheduleItem.activity}</h6>
                <div className="dropdown-divider"></div>
              </>
            ))}
            <div className="dropdown-divider"></div>
            <div className="container">
              <h3>Create new schedule item</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Datetime</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Activity</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {!currentId ? "Create " : "Edit "} schedule item
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
                <p className="card-text">
                  Contact your sysadmin for more info.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Schedule;
