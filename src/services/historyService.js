import api from "./api";

// Buscar historial por usuario
export const getHistory = async () => {
  try {
    const response = await api.get(`/history/list`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error al buscar history";
  }
};
