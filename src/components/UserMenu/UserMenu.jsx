import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import userpic from "../../assets/user-icon.avif";
import s from "../AppBar/AppBar.module.css";

export function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={`${s.navList} ${s.usermenu}`}>
      <div className={s.userset}>
        <img src={userpic} className={s.userpic} />
        <p className={s.username}>{user.name}</p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
}
