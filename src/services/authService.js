import api from "./api";

// Iniciar sesión
export const login = async (username, password) => {
  try {
    const response = await api.post("/auth/token/", { username, password });    
    localStorage.setItem("token", response.data.data.access);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en la autenticación";
  }
};

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem("token");
};

// Registrar usuario
export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en el registro";
  }
};
