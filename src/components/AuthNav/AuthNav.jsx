import { NavLink } from "react-router-dom";
import s from "../AppBar/AppBar.module.css";

export function AuthNav() {
  return (
    <div className={s.navList}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? s.active : "";
        }}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? s.active : "";
        }}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
