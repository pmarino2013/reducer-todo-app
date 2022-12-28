import React from "react";
import "animate.css";
const TaskCards = () => {
  return (
    <div className="card my-3 animate__animated animate__fadeIn">
      <div className="card-body d-flex align-items-center justify-content-between">
        <span>Tarea</span>
        <span className="btn-delete text-white">
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default TaskCards;
