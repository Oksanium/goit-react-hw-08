import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  function logout() {
    dispatch(logoutThunk(token));
  }

  return (
    <header>
      <ul className={s.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? s.active : "";
            }}
          >
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return isActive ? s.active : "";
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => {
                  return isActive ? s.active : "";
                }}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => {
                  return isActive ? s.active : "";
                }}
              >
                Contacts
              </NavLink>
            </li>
            <button className={s.button} onClick={logout}>
              Logout
            </button>
          </>
        )}
      </ul>
    </header>
  );
}
