import React from "react";
import { useDispatch } from "react-redux";

import {
  deleteScheduleItem,
  updateScheduleItem,
} from "../../../actions/schedule";

const ScheduleItem = ({ scheduleItem }) => {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(deleteScheduleItem(scheduleItem.id));
  };

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="card mt-3 mb-3 pb-3">
          <div className="card-body">
            <h5 className="card-title">{scheduleItem.dayName}</h5>
            <p className="card-text">{scheduleItem.activity}</p>
          </div>
          <div className="container">
            <button
              type="button"
              className="btn btn-outline-primary ml-1 mr-1"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ScheduleItem;
