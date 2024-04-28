// import css from './ContactList.module.css'

// // import React from 'react';
// import Contact from './Contact.jsx';

// const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <div className={css.contactBox}>
//       {contacts.map(contact => (
//         <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
//       ))}
//     </div>
//   );
// };

// export default ContactList;




import Contact from "./Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../redux/filtersSlice.js";
import { selectContacts } from "../redux/contactsSlice.js";

const ContactList = () => {
  const contactsData = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);
  let filterContacts = [];
  if (contactsData !== undefined) {
    // Перевірка на undefined
    filterContacts = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  return (
    <div className={css.contactBox}>
      {filterContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;