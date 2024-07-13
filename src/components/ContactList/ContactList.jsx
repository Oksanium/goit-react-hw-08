import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { filterContactList } from "../../redux/filtersSlice";

export default function ContactList() {
  const list = useSelector(filterContactList);

  function renderList(contact) {
    return <ContactItem contact={contact} key={contact.id} id={contact.id} />;
  }

  return <div className={s.list}>{list.map(renderList)}</div>;
}
