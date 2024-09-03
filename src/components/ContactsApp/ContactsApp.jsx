import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectPending } from "../../redux/contacts/selectors";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { useEffect } from "react";

export default function ContactsApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const { isLoading, deletePending, addPending } = useSelector(selectPending);

  const error = useSelector(selectIsError);
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Phonebook</h1>
      {isLoading && <p>Loading contacts...</p>}
      {deletePending && <p>Deleting...</p>}
      {addPending && <p>Adding...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
