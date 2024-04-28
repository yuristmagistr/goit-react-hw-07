// import css from './ContactForm.module.css';
// // ContactForm.js
// // import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';

// const ContactForm = ({ addContact }) => {
//   const initialValues = {
//     name: '',
//     number: ''
//   };

//   const validationSchema = Yup.object({
//       name: Yup.string()
//           .required('Required')
//           .min(3, 'Too Short!')
//           .max(50, 'Too Long!'),
//       number: Yup.string()
//           .required('Required')
//           .min(3, 'Too Short!')
//           .max(50, 'Too Long!'),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };
//     addContact(newContact);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.formBox}>
//         <div className={css.inputContainer}>
//                   <label className={css.label} htmlFor="name">
//                       Name
//                   </label>
//           <Field className={css.input} type="text" id="name" name="name" />
//           <ErrorMessage className={css.error} name="name" component="div" />
//         </div>
//         <div className={css.inputContainer}>
//           <label htmlFor="number">Number</label>
//           <Field className={css.input} type="text" id="number" name="number" />
//           <ErrorMessage className={css.error} name="number" component="div" />
//         </div>
//         <button className={css.buttonAdd} type="submit">Add Contact</button>
//       </Form>
//     </Formik>
//   );
// };


// export default ContactForm;



import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice.js";
// import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formBox}>
        <div className={css.inputContainer}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor="number">Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.buttonAdd} type="submit">
          Add contact{" "}
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;