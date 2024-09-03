import s from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { filterContactList } from "../../redux/filters/selectors";
import ConfiramtionModal from "../ConfiramtionModal/ConfiramtionModal";
import { selectShowModal } from "../../redux/contacts/selectors";

export default function ContactList() {
  const list = useSelector(filterContactList);

  const showModal = useSelector(selectShowModal);

  function renderList(contact) {
    return <ContactItem contact={contact} key={contact.id} id={contact.id} />;
  }

  return (
    <>
      <div className={s.list}>{list.map(renderList)}</div>
      {showModal && <ConfiramtionModal />}
    </>
  );
}
