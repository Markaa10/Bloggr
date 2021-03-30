import { COMPLETE_TODO, FETCH_TODOS } from "../constants/actionType";
import * as api from "../constants/api";

export const getTodos = (id) => async (dispatch) => {
  const { data } = await api.fetchTodos(id);

  dispatch({ type: FETCH_TODOS, payload: data });
};

export const toggleTodo = (id, todo) => async (dispatch) => {
  const { data } = await api.completeTodo(id, todo);

  dispatch({ type: COMPLETE_TODO, payload: data });
};
