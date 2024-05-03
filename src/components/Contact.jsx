import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";



// import { IoCall, IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../redux/contactsOps.js";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const { id, name, number } = contact;
  return (
    <div className={css.contactGroup}>
      <ul className={css.list}>
        <li className={css.contactData}>
          <FaUser /> {contact.name}
        </li>
        <li className={css.contactData}>
          <BsFillTelephoneFill /> {contact.number}
        </li>
      </ul>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;

