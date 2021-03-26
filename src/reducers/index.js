import { combineReducers } from "redux";
import users from "./user";
import posts from "./post";
import comments from "./comments";
import albums from "./gallery";
import todos from "./todo";
import photos from "./photos";

export const reducers = combineReducers({
  users,
  posts,
  albums,
  todos,
  comments,
  photos,
});
