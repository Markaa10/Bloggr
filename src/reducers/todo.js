import { COMPLETE_TODO, FETCH_TODOS } from "../constants/actionType";

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;

    case COMPLETE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

    default:
      return todos;
  }
};
