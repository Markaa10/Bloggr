import { FETCH_TODOS } from "../constants/actionType";
import * as api from "../constants/api";

export const getTodos = (id) => async (dispatch) => {
  const { data } = await api.fetchTodos(id);

  dispatch({ type: FETCH_TODOS, payload: data });
};
