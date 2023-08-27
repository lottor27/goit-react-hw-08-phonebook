import { useAuth } from "Hooks/auth-use";
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  console.log("restrict");
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
