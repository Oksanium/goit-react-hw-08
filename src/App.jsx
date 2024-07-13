import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectIsError, selectPending } from "./redux/contactsSlice";

import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const dispatch = useDispatch();
  const pending = useSelector(selectPending);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {pending.isLoading && <p>Loading contacts...</p>}
      {pending.deletePending && <p>Deleting...</p>}
      {pending.addPending && <p>Adding...</p>}
      {error && <p>{error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
