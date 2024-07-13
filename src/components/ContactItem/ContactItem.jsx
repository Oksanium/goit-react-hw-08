import s from "./ContactItem.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

export default function ContactItem({ contact, id }) {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div className={s.info}>
        <div className={s.nameDiv}>
          <IoPersonSharp className={s.ico} />
          <p className={s.contactField + " " + s.name}>{contact.name}</p>
        </div>
        <div className={s.numDiv}>
          <IoMdCall className={s.ico} />
          <p className={s.contactField}>{contact.number}</p>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(deleteContactThunk(id));
        }}
        className={s.btn}
        id={id}
      >
        DELETE
      </button>
    </div>
  );
}
