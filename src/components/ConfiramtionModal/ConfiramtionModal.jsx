import s from "./ConfiramtionModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import { modalOff } from "../../redux/contacts/slice";
import { selectItemId } from "../../redux/contacts/selectors";

export default function ConfiramtionModal() {
  document.body.style.overflow = "hidden";

  const dispatch = useDispatch();
  const itemId = useSelector(selectItemId);

  function handleNo(e) {
    if (e.target === e.currentTarget) dispatch(modalOff());
    document.body.style.overflow = "auto";
  }

  function handleYes() {
    dispatch(deleteContactThunk(itemId));
    document.body.style.overflow = "auto";
  }

  return (
    <div className={s.overlay} onClick={handleNo}>
      <div className={s.box}>
        <h3>Delete contact?</h3>
        <div className={s.btnSet}>
          <button className={`${s.btn} + ${s.no}`} onClick={handleNo}>
            No
          </button>
          <button className={`${s.btn} + ${s.yes}`} onClick={handleYes}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
