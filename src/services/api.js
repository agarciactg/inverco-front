import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";
const API_KEY = process.env.REACT_APP_API_KEY || "yilySHJw.WViZASkMxe4Exy1XTNt6RswzZzoR5246";

// Crear instancia de axios con configuración global
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": API_KEY,
  },
});

// Interceptor para agregar el token si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
