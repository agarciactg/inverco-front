import api from "./api";

// Obtener lista de usuarios
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error al obtener usuarios";
  }
};

// Crear nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await api.post("/user/create/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error al crear usuario";
  }
};
