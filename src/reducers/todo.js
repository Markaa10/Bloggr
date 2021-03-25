import { FETCH_TODOS } from "../constants/actionType";

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;

    default:
      return todos;
  }
};
