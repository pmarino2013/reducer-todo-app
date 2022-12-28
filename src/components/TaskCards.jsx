import React, { useState } from "react";
import "animate.css";
const TaskCards = ({ item, deleteTarea, handleChange }) => {
  const [activar, setActivar] = useState(false);
  const [input, setInput] = useState(item.tarea);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange({ id: item.id, tarea: input.toUpperCase() });
    setActivar(false);
  };
  return (
    <div
      className="card my-3 animate__animated animate__fadeIn"
      onDoubleClick={() => setActivar(!activar)}
    >
      <div className="card-body d-flex align-items-center justify-content-between">
        {activar ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              value={input.toUpperCase()}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        ) : (
          <span onTouchEnd={() => setActivar(!activar)}>
            {input.toUpperCase()}
          </span>
        )}
        <span
          className="btn-delete text-white"
          onClick={() => {
            deleteTarea(item.id);
          }}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
};

export default TaskCards;
