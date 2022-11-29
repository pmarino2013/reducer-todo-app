import TaskApp from "./components/TaskApp";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Tareas con Reducer</h1>
        </div>
      </div>
      <div className="row mt-5">
        <TaskApp />
      </div>
    </div>
  );
}

export default App;
