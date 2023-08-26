import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Contacts from './Phonebook/PhonebookForm';
import SearchContact from './Filter/Filter';
import AddContactForm from './addContact/addContact';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorContacts, selectLoaderContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import Loading from './loading/loading';
import Heder from './Heder/Heder';
import { Route, Switch } from 'react-router-dom';
import Home from 'Pages/Home';
import Register from 'Pages/Register';
import TodosView from 'Pages/Contacts';
import Login from 'Pages/Login';

export const App = () => {
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
      <Heder />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/contacts" component={TodosView} /> */}
      </Switch>
      <AddContactForm />

      {isLoading && !error && <Loading />}
      <SearchContact />
      <Contacts />
    </div>
  );
};
