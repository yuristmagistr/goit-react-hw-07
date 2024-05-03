import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps.js";
import { selectIsLoading, selectError } from "../redux/selectors.js";

import ContactForm from "./ContactForm.jsx";
import SearchBox from "./SearchBox.jsx";
import ContactList from "./ContactList.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="Box">
        <h1>Phonebook</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;