import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// Componente de Ruta Privada
export default function PrivateRoute({ element }) {
  return isAuthenticated() ? element : <Navigate to="/authentication/sign-in" />;
}

// Definir PropTypes para evitar errores de ESLint
PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
