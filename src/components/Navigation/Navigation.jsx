import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "../AppBar/AppBar.module.css";

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navList}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? s.active : "";
        }}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return isActive ? s.active : "";
          }}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
