import axios from "axios";

const API = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const fetchUsers = () => API.get("/users");

export const fetchPosts = (id) => API.get(`posts?userId=${id}`);
export const fetchComments = (id) => API.get(`comments?postId=${id}`);

export const fetchAlbums = (id) => API.get(`albums?userId=${id}`);
export const fetchPhotos = (id) => API.get(`photos?albumId=${id}`);

export const fetchTodos = (id) => API.get(`todos?userId=${id}`);
export const completeTodo = (id, completeTodo) =>
  API.patch(`todos?userId=${id}`, completeTodo);
