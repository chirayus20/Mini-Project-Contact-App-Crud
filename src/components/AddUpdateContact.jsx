import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidtion = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "myStore");
      await addDoc(contactsRef, contact);
      toast.success("Contact Added Successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "myStore", id);
      await updateDoc(contactsRef, contact);
      toast.success("Contact Updated Successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidtion}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name"className="h-10 border" />

              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
              </div>
            </div>
            <button className="bg-orange px-3 py-1.5 border self-end">
              {isUpdate ? "Update" : "Add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdateContact;
