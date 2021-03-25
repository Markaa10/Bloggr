import { combineReducers } from "redux";
import users from "./user";
import posts from "./post";
import albums from "./gallery";
import todos from "./todo";

export const reducers = combineReducers({ users, posts, albums, todos });
