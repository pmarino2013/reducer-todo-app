import TaskApp from "./components/TaskApp";
import moment from "moment";

function App() {
  moment.locale("es");
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center text-success">
          <h1>Tareas con Reducer</h1>
          <span className="fecha-text ">
            {moment.utc().local().format("LL")}
          </span>
        </div>
      </div>
      <div className="row mt-3">
        <TaskApp />
      </div>
    </div>
  );
}

export default App;
