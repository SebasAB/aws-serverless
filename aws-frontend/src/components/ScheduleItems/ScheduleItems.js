import React, { useState } from "react";
import { useSelector } from "react-redux";

import ScheduleForm from "./ScheduleForm/ScheduleForm";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

const Schedule = () => {
  const state = useSelector((state) => state);
  const scheduleItems = state.schedule.body;
  // console.log(scheduleItems);
  // const scheduleItems = null;
  return (
    <>
      <div className="container mt-3">
        {scheduleItems ? (
          <>
            <h3>Schedule Items</h3>
            {Object.values(scheduleItems)[0].map((scheduleItem, index) => (
              <div className="container" key={index}>
                <ScheduleItem scheduleItem={scheduleItem} />
              </div>
            ))}
            <div className="container mb-3 ">
              <ScheduleForm />
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

export default Schedule;
