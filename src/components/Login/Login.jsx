import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { signInUserThunk } from 'store/user/operations';

const Login = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = values => {
    dispatch(signInUserThunk(values));
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={styles.inputField}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </Form>
      </Formik>
      <div className={styles.registerPrompt}>
        Don't have an account?{' '}
        <Link to="/register" className={styles.registerLink}>
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
