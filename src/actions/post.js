import { FETCH_COMMENTS, FETCH_POSTS } from "../constants/actionType";
import * as api from "../constants/api";

export const getPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(id);

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getComments = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchComments(id);

    dispatch({ type: FETCH_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
