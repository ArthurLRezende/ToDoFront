import { Navigate } from "react-router-dom";

//Toda rota que estiver dentro desse componente deverá conter o token no localstorage. Caso contrário, será redirecionado para a pagina de login
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
