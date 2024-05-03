// import { useState, useEffect } from 'react';
// import ContactList from './ContactList.jsx';
// import ContactForm from './ContactForm.jsx';
// import SearchBox from './SearchBox.jsx';
// import './App.css';
// // import { configureStore } from '@reduxjs/toolkit';

// const App = () => {
//   const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
//   ];

//   const [contacts, setContacts] = useState(initialContacts);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts'));
//     if (storedContacts) {
//       setContacts(storedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (newContact) => {
//     setContacts([...contacts, newContact]);
//   };

//   const deleteContact = (id) => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   // const handleFilterChange = (event) => {
//   //   setFilter(event.target.value);
//   // };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="Box">
//       <h1>Phonebook</h1>
//       <ContactForm addContact={addContact} />
//       <SearchBox value={filter} onChange={setFilter} />
//       <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
//     </div>
//   );
// };

// export default App;




// import { useState } from "react";
// import "./App.css";

// import ContactForm from "./ContactForm.jsx";
// import SearchBox from "./SearchBox.jsx";
// import ContactList from "./ContactList.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="Box">
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         <ContactList />
//       </div>
//     </>
//   );
// }

// export default App;


// eslint-disable-next-line no-unused-vars
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