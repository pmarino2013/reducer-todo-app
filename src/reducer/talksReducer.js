export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: new Date().getTime(),
          tarea: action.newTarea,
        },
      ];
    case "delete":
      return state.filter((tarea) => {
        return tarea.id !== action.tareaId;
      });

    case "change":
      return state.map((t) => {
        if (t.id === action.tarea.id) {
          return action.tarea;
        } else {
          return t;
        }
      });

    default:
      return state;
  }
}
