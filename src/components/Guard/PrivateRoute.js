import { Navigate } from 'react-router-dom';
import { useAuth } from 'Hooks/auth-use';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  console.log("Privet");
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
