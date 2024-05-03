import Contact from "./Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

// import { selectNameFilter } from "../redux/filtersSlice.js";
// import { selectContacts } from "../redux/contactsSlice.js";

// const ContactList = () => {
//   const contactsData = useSelector(selectContacts);
//   const search = useSelector(selectNameFilter);
//   let filterContacts = [];
//   if (contactsData !== undefined) {
//     // Перевірка на undefined
//     filterContacts = contactsData.filter((contact) =>
//       contact.name.toLowerCase().includes(search.trim().toLowerCase())
//     );
//   }
//   return (
//     <div className={css.contactBox}>
//       {filterContacts.map((contact) => (
//         <Contact key={contact.id} contact={contact} />
//       ))}
//     </div>
//   );
// };
// export default ContactList;

import { selectFilteredContacts } from "../redux/selectors.js";

const ContactList = () => {
  // const contactsData = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  // const search = useSelector(selectNameFilter);
  // let filterContacts = [];
  // if (contactsData !== undefined) {
  //   // Перевірка на undefined
  //   filterContacts = contactsData.filter((contact) =>
  //     contact.name.toLowerCase().includes(search.trim().toLowerCase())
  //   );
  // }
  return (
    <div className={css["contactlistBox"]}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;