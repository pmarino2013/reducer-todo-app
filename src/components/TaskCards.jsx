import React, { useState } from "react";

const TaskCards = ({ item, deleteTarea, handleChange }) => {
  const [activar, setActivar] = useState(false);
  const [input, setInput] = useState(item.tarea);

  const handleSubmit = (e) => {
    e.preventDefault();
    let datos = {
      id: item.id,
      tarea: input.toUpperCase(),
    };
    handleChange(datos);
    setActivar(false);
  };
  return (
    <div className="card my-3" onDoubleClick={() => setActivar(!activar)}>
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
          <span>{input.toUpperCase()}</span>
        )}

        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            deleteTarea(item.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TaskCards;
