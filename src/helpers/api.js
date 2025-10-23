import axios from "axios";

const api = axios.create({
  baseURL: "https://todoportifolio-api-g7dubadahzb9daeb.brazilsouth-01.azurewebsites.net/",//minha API .NET
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

