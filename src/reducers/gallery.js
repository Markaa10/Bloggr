import { FETCH_ALBUMS } from "../constants/actionType";

export default (albums = [], action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.payload;

    default:
      return albums;
  }
};
