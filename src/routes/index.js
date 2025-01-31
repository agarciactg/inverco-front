import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import PrivateRoute from "./PrivateRoute";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // 📌 Rutas Privadas (requieren autenticación)
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <PrivateRoute element={<Dashboard />} />,
  },
  {
    type: "collapse",
    name: "history",
    key: "history",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/history",
    component: <PrivateRoute element={<Profile />} />,
  },

  // 📌 Rutas Públicas (sin autenticación)
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
