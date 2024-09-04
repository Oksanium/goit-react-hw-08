import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export function PrivateRoute({ component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();

  return isLoggedIn ? component : <Navigate to="/login" state={location} />;
}
