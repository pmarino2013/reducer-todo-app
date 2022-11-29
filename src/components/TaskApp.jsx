import React, { useReducer, useState } from "react";
import { reducer } from "../reducer/talksReducer";
import TaskCards from "./TaskCards";

const TaskApp = () => {
  let inicialValue = [];
  const [textValue, setTextValue] = useState("");
  const [state, dispatch] = useReducer(reducer, inicialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      newTarea: textValue,
    });
    setTextValue("");
  };

  const deleteTarea = (id) => {
    dispatch({
      type: "delete",
      tareaId: id,
    });
  };

  const handleChange = (item) => {
    dispatch({
      type: "change",
      tarea: item,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              className="form-control"
              placeholder="Escribe la tarea"
            />
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          {state.map((item) => (
            <TaskCards
              key={item.id}
              item={item}
              deleteTarea={deleteTarea}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
