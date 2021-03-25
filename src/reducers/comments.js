import { FETCH_COMMENTS } from "../constants/actionType";

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;

    default:
      return comments;
  }
};
