import { combineReducers } from "redux";
import users from "./user";
import posts from "./post";

export const reducers = combineReducers({ users, posts });
