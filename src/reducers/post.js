import { FETCH_POSTS } from "../constants/actionType";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;

    default:
      return posts;
  }
};
