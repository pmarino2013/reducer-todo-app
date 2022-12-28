export function reducer(state, action) {
  switch (action.type) {
    case "add":
      if (action.newTarea) {
        return [
          ...state,
          {
            id: new Date().getTime(),
            tarea: action.newTarea,
          },
        ];
      }
    case "delete":
      return state.filter((tarea) => {
        return tarea.id !== action.tareaId;
      });

    case "change":
      return state.map((tarea) => {
        if (tarea.id === action.tarea.id) {
          return action.tarea;
        } else {
          return tarea;
        }
      });

    default:
      return state;
  }
}
