import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { contactsSelector } from 'store/contacts/selectors';
import { createContact } from 'store/contacts/contactsReducer';
import { getContactsThunk, updateContactsThunk } from 'store/contacts/actions';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList/ContactList';
import { userSelectors } from 'store/user/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [contactData, setContactData] = useState({ name: '', number: '' });
  const { contacts } = useSelector(contactsSelector);
  const { isLoading } = useSelector(contactsSelector);
  const { token } = useSelector(userSelectors);
  const dispatch = useDispatch();

  const createdContact = [
    ...contacts,
    { name: contactData.name, number: contactData.number, id: nanoid() },
  ];

  useEffect(() => {
    token && dispatch(getContactsThunk(token));
  }, [dispatch, token]);

  const addContact = data => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${data.name} is already in your contacts.`);
      return;
    }

    dispatch(createContact(createdContact));
    dispatch(
      updateContactsThunk({
        data: contactData,
        token: token,
      })
    ).then(() => {
      token&&dispatch(getContactsThunk(token));
    });
  };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (
      (name === 'name' && !/^[A-Za-zА-Яа-яЁё\s]+$/.test(value)) ||
      (name === 'number' && isNaN(value))
    ) {
      return setContactData(prevState => ({
        ...prevState,
        [name]: '',
      }));
    }
    setContactData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name: contactData.name, number: contactData.number });
    setContactData({
      name: '',
      number: '',
    });
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className={css.title}>Name:</h2>
          <input
            className={css.input}
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
          />
          <h2 className={css.title}>Number:</h2>
          <input
            className={css.input}
            type="text"
            name="number"
            value={contactData.number}
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type="submit">
          Submit
        </button>
      </form>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactForm;
