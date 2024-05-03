import Contact from "./Contact.jsx";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";


import { selectFilteredContacts } from "../redux/selectors.js";

const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactBox}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default ContactList;