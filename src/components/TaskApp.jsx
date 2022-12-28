import React from "react";
import TaskCards from "./TaskCards";

const TaskApp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form>
            <input type="text" className="form-control" />
          </form>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <TaskCards />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
