import Loading from 'components/Loading/Loading';
import Section from 'components/Section/section-title';
import AddContactForm from 'components/userContacts/Add-contact/add-contact';
import SearchContact from 'components/userContacts/SearchContact/SearchContact';
import Contacts from 'components/userContacts/Contacts/contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchContacts } from 'redux/operations';
import { selectErrorContacts, selectLoaderContacts } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorContacts);
  const isLoading = useSelector(selectLoaderContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AddContactForm />
      <Section title="Contacts">
        {isLoading && !error && <Loading />}
        <SearchContact searchTitle="Find contacts by name" />
        <Contacts />
      </Section>
    </div>
  );
};

export default ContactsPage;
