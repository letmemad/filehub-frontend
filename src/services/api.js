import axios from "axios";
const api = axios.create({
  baseURL: "http://172.16.251.247:3333",
});

export default api;
