import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createScheduleItem } from "../../../actions/schedule";

const ScheduleForm = () => {
  const dispatch = useDispatch();

  const [scheduleItemData, setscheduleItemData] = useState({
    dayName: "",
    activity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createScheduleItem(scheduleItemData));
  };

  return (
    <div className="container">
      <h3>Schedule Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter date"
            onChange={(e) =>
              setscheduleItemData({
                ...scheduleItemData,
                dayName: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Activity</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter activity"
            onChange={(e) =>
              setscheduleItemData({
                ...scheduleItemData,
                activity: e.target.value,
              })
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

export default ScheduleForm;
