import React, { useReducer, useState } from "react";
import { reducer } from "../reducer/talksReducer";

import ReactAudioPlayer from "react-audio-player";
import exclamacion from "../assets/exclamacion.mp3";

import TaskCards from "./TaskCards";

const TaskApp = () => {
  let inicialValue = [];
  const [textValue, setTextValue] = useState("");
  const [play, setPlay] = useState(false);
  const [sonidoDesmontar, setSonidoDesmontar] = useState(false);

  const [state, dispatch] = useReducer(reducer, inicialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      newTarea: textValue,
    });
    setPlay(true);
    setTextValue("");
  };

  const deleteTarea = (id) => {
    dispatch({
      type: "delete",
      tareaId: id,
    });
    setTimeout(() => {
      changeSonido(false);
    }, 500);
  };

  const handleChange = (item) => {
    dispatch({
      type: "change",
      tarea: item,
    });
  };

  const changeSonido = (valor) => {
    setSonidoDesmontar(valor);
  };
  return (
    <>
      {sonidoDesmontar && (
        <ReactAudioPlayer src={exclamacion} autoPlay={sonidoDesmontar} />
      )}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="form-control"
              />
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 offset-md-3">
            {state.map((item) => (
              <TaskCards
                key={item.id}
                item={item}
                deleteTarea={deleteTarea}
                handleChange={handleChange}
                play={play}
                changeSonido={changeSonido}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskApp;
