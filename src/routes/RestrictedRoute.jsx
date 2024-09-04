import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export function RestrictedRoute({ component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={location?.state || "/"} replace />
  ) : (
    component
  );
}
