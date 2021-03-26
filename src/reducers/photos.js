import { FETCH_PHOTOS } from "../constants/actionType";

export default (photos = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return action.payload;

    default:
      return photos;
  }
};
