import api from "./api";

// Buscar restaurantes
export const searchRestaurants = async (query, location) => {
  try {
    const response = await api.get(`/restaurant/search`, {
      params: { query, location },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error al buscar restaurantes";
  }
};
