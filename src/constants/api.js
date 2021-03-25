import axios from "axios";

const API = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const fetchUsers = () => API.get("/users");

export const fetchPosts = (id) => API.get(`posts?userId=${id}`);
export const fetchAlbums = (id) => API.get(`albums?userId=${id}`);
export const fetchTodos = (id) => API.get(`todos?userId=${id}`);
